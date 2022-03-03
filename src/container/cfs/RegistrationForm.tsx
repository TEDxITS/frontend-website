/* eslint-disable @next/next/no-img-element */
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import SelectInput from '@/components/input/SelectInput';
import TextAreaInput from '@/components/input/TextAreaInput';
import Tooltip from '@/components/Tooltip';

import { storage } from '@/../firebase/initFirebase';

//#region  //*=========== From submission type ===========
type Modify<T, R> = Omit<T, keyof R> & R;

type CFSDataType = {
  email: string;
  name: string;
  nrp: string;
  batch: string;
  department: string;
  cv: [File, MediaMetadata] | null;
  campaign: string;
  video: string;
  why: string;
};

type CFSDataSheetType = Modify<
  CFSDataType,
  {
    cv: string;
  }
>;
//#endregion  //*======== From submission type ===========

//#region  //*=========== Initial Value ===========
const initialValueCFS: CFSDataType = {
  email: '',
  name: '',
  nrp: '',
  batch: '2021',
  department: 'Physics',
  cv: null,
  campaign: '',
  video: '',
  why: '',
};
//#endregion  //*======== Initial Value ===========

//#region  //*=========== Initial Option ===========

const BATCH_OPTION = ['2021', '2020', '2019', '2018'];

const DEPARTMENT_OPTION = ['Physics', 'Math', 'Informatics', 'Chemistry'];

//#endregion  //*======== Initial Option ===========

export default function RegistrationForm() {
  const methods = useForm<CFSDataType>({
    defaultValues: initialValueCFS,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, reset } = methods;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  //#region  //*=========== Server connection ===========
  const uploadToFirebase = async (
    file: File,
    folder: string,
    fileName: string
  ) => {
    try {
      const uploadTask = ref(storage, `${folder}/${fileName}`);
      const uploadImage = uploadBytes(uploadTask, file);
      const url = await uploadImage.then((snapshot) =>
        getDownloadURL(snapshot.ref)
      );

      return { url: url, success: true };
    } catch (error) {
      return { url: '', success: false, message: error };
    }
  };

  const uploadToGoogleSheet = async (data: CFSDataSheetType) => {
    try {
      const res = await fetch(
        'https://sheet.best/api/sheets/c91a84ef-e9ce-4d6a-81e3-4adcc196870e',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            time: JSON.stringify(Date.now()),
            email: data.email,
            name: data.name,
            nrp: data.nrp,
            batch: data.batch,
            department: data.department,
            cv: data.cv,
            campaign: data.campaign,
            video: data.video,
            why: data.why,
          }),
        }
      );
      await res.json();
      return { success: true };
    } catch (error) {
      return { success: false, message: error };
    }
  };
  //#endregion  //*======== Server connection ===========

  const onSubmit = async (data: CFSDataType) => {
    setIsLoading(true);
    //#region  //*=========== Check if CV is exist ===========
    if (!data.cv) {
      toast.error('Silahkan melakukan upload ulang CV anda');
      setIsLoading(false);
      return;
    }
    //#endregion  //*======== Check if CV is exist ===========

    //#region  //*=========== Upload file to firebase ===========
    toast.loading('Melakukan upload file...');
    const resUploadFile = await uploadToFirebase(data.cv[0], 'cv', data.nrp);
    if (!resUploadFile?.success) {
      toast.dismiss();
      toast.error(
        'Gagal melakukan upload file, silahkan coba beberapa saat lagi'
      );
      toast.error(JSON.stringify(resUploadFile.message));
      setIsLoading(false);
      return;
    }
    toast.dismiss();
    //#endregion  //*======== Upload file to firebase ===========

    //#region  //*=========== Write to google sheet ===========
    toast.loading('Menyimpan data anda...');
    const resUploadToSheet = await uploadToGoogleSheet({
      ...data,
      cv: resUploadFile.url,
    });

    if (!resUploadToSheet?.success) {
      toast.error('server sedang bermasalah, silahkan coba beberapa saat lagi');
      setIsLoading(false);
      return;
    }
    toast.dismiss();
    //#endregion  //*======== Write to google sheet ===========

    toast.success('Sukses registrasi!');
    setIsLoading(false);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <div className='grid gap-y-4 gap-x-8 md:grid-cols-2'>
          <Input
            dark={true}
            id='name'
            label={'Full Name'}
            validation={{ required: true }}
          />
          <Input
            dark={true}
            placeholder='example@email.com'
            id='email'
            type='email'
            label='Email'
            validation={{ required: true, pattern: /^\S+@\S+$/i }}
          />
          <SelectInput
            dark={true}
            id='department'
            label='Department'
            validation={{ required: true }}
          >
            {DEPARTMENT_OPTION.map((bidang) => (
              <option value={bidang} key={bidang}>
                {bidang}
              </option>
            ))}
          </SelectInput>
          <Input
            dark={true}
            id='nrp'
            type='number'
            label='Student ID (NRP)'
            validation={{ required: true }}
          />
          <SelectInput
            dark={true}
            id='batch'
            label='Batch'
            validation={{ required: true }}
          >
            {BATCH_OPTION.map((bidang) => (
              <option value={bidang} key={bidang}>
                {bidang}
              </option>
            ))}
          </SelectInput>
          <Input
            dark={true}
            id='cv'
            type='file'
            accept='image/jpeg,image/gif,image/png,application/pdf,image/x-eps'
            label={'CV'}
            validation={{ required: true }}
          />
          <Input
            dark={true}
            id={'video'}
            label={
              <div className='flex'>
                <Tooltip
                  withUnderline={true}
                  spanClassName='flex gap-2'
                  content='make sure that the folder is accessible for everyone!'
                >
                  Google Drive Link
                  <HiOutlineExclamationCircle className='text-lg text-primary-600' />
                </Tooltip>
              </div>
            }
            helperText='website harus berupa link/domain'
            validation={{
              required: true,
              pattern:
                /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi,
            }}
          />

          <Input
            dark={true}
            id={'campaign'}
            label={'Instagram Reels Link'}
            helperText='website harus berupa link/domain'
            validation={{
              required: true,
              pattern:
                /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi,
            }}
          />
          <div className='md:col-span-2'>
            <TextAreaInput
              dark={true}
              id='why'
              label={
                <p className='text-cdark flex gap-1 items-center'>
                  Why do you want to be a speaker at
                  <img
                    src='/images/logo/tedxits-text.svg'
                    alt=''
                    className='h-3'
                  />
                  ?
                </p>
              }
              validation={{ required: true }}
              className=''
            />
          </div>
        </div>
        <div className='flex relative justify-end mt-4'>
          <Button type='submit' isLoading={isLoading}>
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
