import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '@/components/buttons/Button';

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
  namaLengkap: 'userName',
  noTelp: '08148294019',
  provinsi: 'Province',
  kabupatenKota: 'City',
  kecamatan: 'District',
  kelurahan: 'Kelurahan :v',
  noRumahJlBlokEtc: 'Sesame Street',
  kodePos: '62047',
};

//#endregion  //*======== Initial Option ===========

export default function OfflineCheckout() {
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
        className='flex flex-col gap-8 w-full'
      >
        <SectionHeader title='Online' />
        <div className='flex justify-center'>
          <p className='text-cdark w-6/12'>
            Choose an affordable plan that&apos;s packed with the best features
            for engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
        </div>
        <div className='flex relative justify-center mt-4'>
          <Button type='button' isLoading={isLoading} onClick={onSubmit}>
            Book
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div>
      <p className='text-cdark text-xl font-semibold'>{title}</p>
      <hr className='border-cdark' />
    </div>
  );
}
