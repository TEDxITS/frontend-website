/* eslint-disable @next/next/no-img-element */
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

import { getToday } from '@/lib/helper';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import SelectInput from '@/components/input/SelectInput';
import TextAreaInput from '@/components/input/TextAreaInput';
import Tooltip from '@/components/Tooltip';

import { storage } from '@/../firebase/initFirebase';

//#region  //*=========== From submission type ===========
enum InputField {
  'NAME' = 'name',
  'EMAIL' = 'email',
  'DEPARTMENT' = 'department',
  'NRP' = 'nrp',
  'BATCH' = 'batch',
  'CONTACT' = 'contact',
  'PROOF' = 'proof',
  'CV' = 'cv',
  'ESSAY' = 'essay',
  'VIDEO' = 'video',
  'REELS' = 'reels',
  'WHY' = 'why',
}

type Modify<T, R> = Omit<T, keyof R> & R;

type CFSDataType = {
  [InputField.NAME]: string;
  [InputField.EMAIL]: string;
  [InputField.DEPARTMENT]: string;
  [InputField.NRP]: string;
  [InputField.BATCH]: string;
  [InputField.CONTACT]: string;
  [InputField.PROOF]: [File, MediaMetadata] | null;
  [InputField.CV]: [File, MediaMetadata] | null;
  [InputField.ESSAY]: [File, MediaMetadata] | null;
  [InputField.VIDEO]: string;
  [InputField.REELS]: string;
  [InputField.WHY]: string;
};

type CFSDataSheetType = Modify<
  CFSDataType,
  {
    [InputField.PROOF]: string;
    [InputField.CV]: string;
    [InputField.ESSAY]: string;
  }
>;
//#endregion  //*======== From submission type ===========

//#region  //*=========== Initial Value ===========
const initialValueCFS: CFSDataType = {
  name: '',
  email: '',
  department: 'Actuarial Science',
  nrp: '',
  batch: '2021',
  contact: '',
  proof: null,
  cv: null,
  essay: null,
  video: '',
  reels: '',
  why: '',
};

//#endregion  //*======== Initial Value ===========

//#region  //*=========== Initial Option ===========

const BATCH_OPTION = ['2021', '2020', '2019', '2018', '2017', 'Alumni'];

const DEPARTMENT_OPTION = [
  'Actuarial Science',
  'Architecture',
  'Automation Electronic Engineering',
  'Biology',
  'Biomedical Engineering',
  'Business Management',
  'Business Statistics',
  'Chemical Engineering',
  'Chemistry',
  'Civil Engineering',
  'Civil Infrastructure Engineering',
  'Computer Engineering',
  'Developmental Studies',
  'Electrical Engineering',
  'Environmental Engineering',
  'Geomatics Engineering',
  'Geophysics Engineering',
  'Industrial Chemical Engineering',
  'Industrial Mechanical Engineering',
  'Industrial Product Design',
  'Informatics',
  'Information Systems',
  'Information Technology',
  'Instrumentation Engineering',
  'Interior Design',
  'Marine Engineering',
  'Material Engineering',
  'Mathematics',
  'Mechanical Engineering',
  'Naval Architecture and Shipbuilding Engineering',
  'Ocean Engineering',
  'Physics',
  'Physics Engineering',
  'Regional and Urban Planning',
  'Sea Transportation Engineering',
  'Statistics',
  'Systems and Industrial Engineering',
  'Technology Management',
  'Visual Communication Design',
];

//#endregion  //*======== Initial Option ===========

export default function RegistrationForm() {
  const methods = useForm<CFSDataType>({
    defaultValues: initialValueCFS,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, reset, setError, getValues } = methods;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  //#region  //*=========== Server connection ===========
  const uploadToFirebase = async (
    name: string,
    number: number,
    file: File,
    folder: string,
    fileName: string
  ) => {
    toast.loading(`Uploading File ${number}/3 (${name})...`);
    const uploadTask = ref(storage, `${folder}/${fileName}`);
    const uploadImage = uploadBytes(uploadTask, file);
    const url = await uploadImage.then((snapshot) =>
      getDownloadURL(snapshot.ref)
    );

    return url;
  };

  const uploadAllFile = async (data: CFSDataType) => {
    if (!data.cv || !data.proof || !data.essay) {
      toast.error('Please re-upload your file');
      setIsLoading(false);
      return { url: '', success: false, message: 'File didnt exist' };
    }
    try {
      const folderName = `${data.nrp}_${JSON.stringify(Date.now())}`;
      const proof = await uploadToFirebase(
        'Proof',
        1,
        data.proof[0],
        folderName,
        `${data.nrp}_proof`
      );

      const cv = await uploadToFirebase(
        'CV',
        2,
        data.cv[0],
        folderName,
        `${data.nrp}_cv`
      );

      const essay = await uploadToFirebase(
        'Essay',
        3,
        data.essay[0],
        folderName,
        `${data.nrp}_essay`
      );

      const fileUrl = await Promise.all([proof, cv, essay]);
      return {
        url: await fileUrl,
        success: true,
        message: 'Success Upload File',
      };
    } catch (error) {
      return { url: '', success: false, message: JSON.stringify(error) };
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
            time: getToday(),
            ...data,
          }),
        }
      );
      await res.json();
      return { success: true };
    } catch (error) {
      return { success: false, message: error };
    }
  };

  const isFileInLimit = () => {
    let isFileValid = true;
    if (getValues('proof.0.size') > 2000000) {
      setError('proof', {
        type: 'size',
      });

      isFileValid = false;
    }
    if (getValues('cv.0.size') > 2000000) {
      setError('cv', {
        type: 'size',
      });

      isFileValid = false;
    }
    if (getValues('essay.0.size') > 2000000) {
      setError('proof', {
        type: 'size',
      });

      isFileValid = false;
    }
    return isFileValid;
  };

  //#endregion  //*======== Server connection ===========

  const onSubmit = () => {
    if (!isFileInLimit()) {
      toast.error('Files must not exceed the maximum size of 2 MB');
      return;
    }
    handleSubmit(submitData)();
  };

  const submitData = async (data: CFSDataType) => {
    setIsLoading(true);

    //#region  //*=========== Upload file to firebase ===========
    toast.loading('Uploading files...');
    const resUploadFile = await uploadAllFile(data);
    if (!resUploadFile?.success) {
      toast.dismiss();
      toast.error('Failed to upload the file, please try again later');
      toast.error(JSON.stringify(resUploadFile.message));
      setIsLoading(false);
      return;
    }
    toast.dismiss();
    //#endregion  //*======== Upload file to firebase ===========

    //#region  //*=========== Write to google sheet ===========
    toast.loading('Saving your data...');
    const resUploadToSheet = await uploadToGoogleSheet({
      ...data,
      proof: resUploadFile.url[0],
      cv: resUploadFile.url[1],
      essay: resUploadFile.url[2],
    });

    if (!resUploadToSheet?.success) {
      toast.error('The server is having problems, please try again in a while');
      setIsLoading(false);
      return;
    }
    toast.dismiss();
    //#endregion  //*======== Write to google sheet ===========

    toast.success('Successful registration!');
    setIsLoading(false);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => submitData(data))}
        className='flex flex-col gap-8 w-full'
      >
        <SectionHeader number='01' title="Let's start with your identity!" />
        <div className='grid gap-y-4 gap-x-8 md:grid-cols-2'>
          <Input
            dark={true}
            id={InputField.NAME}
            label={'Full Name'}
            validation={{ required: true }}
          />
          <Input
            dark={true}
            placeholder='example@email.com'
            id={InputField.EMAIL}
            type='email'
            label='Email'
            validation={{ required: true, pattern: /^\S+@\S+$/i }}
          />
          <SelectInput
            dark={true}
            id={InputField.DEPARTMENT}
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
            id={InputField.NRP}
            type='number'
            label='Student ID (NRP)'
            validation={{ required: true }}
          />
          <SelectInput
            dark={true}
            id={InputField.BATCH}
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
            id={InputField.CONTACT}
            helperText='WhatsApp Number or ID LINE '
            label={'Contact'}
            validation={{ required: true }}
          />
        </div>
        <SectionHeader number='02' title='Upload your requirements!' />
        <div className='grid gap-x-8 gap-y-10 md:grid-cols-2'>
          <Input
            dark={true}
            id={InputField.PROOF}
            type='file'
            accept='image/jpeg,image/gif,image/png,application/pdf,image/x-eps'
            label={
              <>
                Proof of study at ITS
                <small className='text-cblue my-1 leading-none'>
                  {' '}
                  Example: KTM (PDF)
                </small>
              </>
            }
            validation={{ required: true }}
          />
          <Input
            dark={true}
            id={InputField.CV}
            type='file'
            accept='image/jpeg,image/gif,image/png,application/pdf,image/x-eps'
            label={
              <>
                CV
                <small className='text-cblue my-1 leading-none'> (PDF)</small>
              </>
            }
            validation={{ required: true }}
          />
          <Input
            dark={true}
            id={InputField.ESSAY}
            type='file'
            accept='image/jpeg,image/gif,image/png,application/pdf,image/x-eps'
            label={
              <div className='flex flex-col'>
                Short essay about your talk idea and topic
                <small className='text-cblue my-1 leading-none'>
                  Max. 500 words (PDF)
                </small>
              </div>
            }
            helperText={''}
            validation={{ required: true }}
          />
          <Input
            dark={true}
            id={InputField.VIDEO}
            label={
              <div className='flex flex-col'>
                <Tooltip
                  withUnderline={true}
                  spanClassName='flex gap-2'
                  content='make sure that the folder is accessible for everyone!'
                >
                  Video presenting your talk idea and topic
                  <HiOutlineExclamationCircle className='text-lg text-primary-600' />
                </Tooltip>
                <small className='text-cblue my-1 leading-none'>
                  Upload it on your Google Drive and submit the video link
                  (Link)
                </small>
              </div>
            }
            helperText='Must be a link/domain'
            validation={{
              required: true,
              pattern:
                /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi,
            }}
          />
          <Input
            dark={true}
            id={InputField.REELS}
            label={
              <div className='flex flex-col'>
                Instagram Reels Link
                <small className='text-cblue my-1 leading-none'>
                  Upload on your main account (make sure it is public) and
                  submit the post link (Link)
                </small>
              </div>
            }
            helperText='Must be a link/domain'
            validation={{
              required: true,
              pattern:
                /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi,
            }}
          />
        </div>
        <SectionHeader number='03' title='Lastly..' />
        <div>
          <TextAreaInput
            dark={true}
            id={InputField.WHY}
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
        <div className='flex relative justify-end mt-4'>
          <Button type='button' isLoading={isLoading} onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div>
      <p className='text-cdark text-xl font-semibold'>
        <span className='font-sympath'>{number}</span>. {title}
      </p>
      <hr className='border-cdark' />
    </div>
  );
}
