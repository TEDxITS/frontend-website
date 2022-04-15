import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import SelectInput from '@/components/input/SelectInput';

//#region  //*=========== From submission type ===========
enum InputField {
  'NAMALENGKAP' = 'namaLengkap',
  'NOTELP' = 'noTelp',
  'PROVINSI' = 'provinsi',
  'KABUPATENKOTA' = 'kabupatenKota',
  'KECAMATAN' = 'kecamatan',
  'KELURAHAN' = 'kelurahan',
  'NORUMAHJLBLOKETC' = 'noRumahJlBlokEtc',
  'KODEPOS' = 'kodePos',
}

type CFSDataType = {
  [InputField.NAMALENGKAP]: string;
  [InputField.NOTELP]: string;
  [InputField.PROVINSI]: string;
  [InputField.KABUPATENKOTA]: string;
  [InputField.KECAMATAN]: string;
  [InputField.KELURAHAN]: string;
  [InputField.NORUMAHJLBLOKETC]: string;
  [InputField.KODEPOS]: string;
};
//#endregion  //*======== From submission type ===========

//#region  //*=========== Initial Value ===========
const initialValueCFS: CFSDataType = {
  namaLengkap: '',
  noTelp: '',
  provinsi: '',
  kabupatenKota: '',
  kecamatan: '',
  kelurahan: '',
  noRumahJlBlokEtc: '',
  kodePos: '',
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

export default function OfflineKitCheckout() {
  const methods = useForm<CFSDataType>({
    defaultValues: initialValueCFS,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, reset } = methods;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  //#endregion  //*======== Server connection ===========
  const onSubmit = () => {
    handleSubmit(submitData)();
  };

  //#endregion  //*======== Server connection ===========
  const submitData = async (data: CFSDataType) => {
    setIsLoading(true);
    //#endregion  //*======== Write to google sheet ===========
    /* eslint-disable no-console */
    console.log(data);
    /* eslint-disable no-console */
    toast.success('Successful registration!');
    setIsLoading(false);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => submitData(data))}
        className='w-[calc(100%-4rem)] flex flex-col gap-8 sm:w-full'
      >
        <div className='grid gap-y-4 mx-0 sm:mx-24'>
          <Input
            dark={true}
            id={InputField.NAMALENGKAP}
            label={'Nama Lengkap'}
            validation={{ required: true }}
            className={'border border-cdark'}
          />
          <Input
            dark={true}
            placeholder='081123456789'
            id={InputField.NOTELP}
            type='number'
            label='No. Telp'
            validation={{ required: true }}
            className={'border border-cdark'}
          />
          <SelectInput
            dark={true}
            id={InputField.PROVINSI}
            label='Provinsi'
            validation={{ required: true }}
            className={'border border-cdark'}
          >
            {DEPARTMENT_OPTION.map((bidang) => (
              <option value={bidang} key={bidang}>
                {bidang}
              </option>
            ))}
          </SelectInput>
          <SelectInput
            dark={true}
            id={InputField.KABUPATENKOTA}
            label='Kabupaten/Kota'
            validation={{ required: true }}
            className={'border border-cdark'}
          >
            {BATCH_OPTION.map((bidang) => (
              <option value={bidang} key={bidang}>
                {bidang}
              </option>
            ))}
          </SelectInput>
          <Input
            dark={true}
            id={InputField.KECAMATAN}
            label='Kecamatan'
            validation={{ required: true }}
            className={'border border-cdark'}
          />
          <Input
            dark={true}
            id={InputField.KELURAHAN}
            label='Kelurahan'
            validation={{ required: true }}
            className={'border border-cdark'}
          />
          <Input
            dark={true}
            id={InputField.NORUMAHJLBLOKETC}
            helperText='Jl. Lalala'
            label='No Rumah, Jl, Blok, etc'
            validation={{ required: true }}
            className={'border border-cdark'}
          />
          <Input
            dark={true}
            id={InputField.KODEPOS}
            type='number'
            label='Kode Pos'
            validation={{ required: true }}
            className={'border border-cdark'}
          />
        </div>
        <div className='flex relative justify-center mx-0 mt-4 sm:mx-24'>
          <Button type='button' isLoading={isLoading} onClick={onSubmit}>
            Buy Now
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
