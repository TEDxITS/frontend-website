import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { RiCloseCircleLine } from 'react-icons/ri';

import clsxm from '@/lib/clsxm';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';

import { CardState } from '@/pages/black-elephant-mail';

import MailInput from './MailInput';
import TextInput from './TextInput';

//#region  //*=========== Type ===========
export enum MailInputField {
  'SUBJECT' = 'subject',
  'MESSAGES' = 'messages',
}

export type MailDataType = {
  [MailInputField.SUBJECT]: string;
  [MailInputField.MESSAGES]: string;
};

//#endregion  //*======== Type ===========

//#region  //*=========== Initial Value ===========
const initialValueMail: MailDataType = {
  subject: '',
  messages: '',
};
//#endregion  //*======== Initial Value ===========

export default function FormCard({
  setState,
}: {
  setState: React.Dispatch<keyof typeof CardState>;
}) {
  //#region  //*=========== State ===========
  const [textValue, setTextValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  //#endregion  //*======== State ===========

  //#region  //*=========== React Hook Form ===========
  const methods = useForm<MailDataType>({
    defaultValues: initialValueMail,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, reset, setError, getValues, clearErrors } = methods;
  //#endregion  //*======== React Hook Form ===========

  //#region  //*=========== Connection with server ===========
  const postMail = async (value: MailDataType) => {
    try {
      const res = await fetch('/api/mail/createMail', {
        method: 'POST',
        body: JSON.stringify(value),
      });
      const data = await res.json();
      const { success, message } = await data;
      return { success, message };
    } catch (error) {
      return { success: false, message: error };
    }
  };

  const onSubmit = () => {
    const messages: string = getValues(MailInputField.MESSAGES);
    if (messages.length <= 0) {
      setError(MailInputField.MESSAGES, {
        type: 'required',
      });
      return;
    } else {
      clearErrors(MailInputField.MESSAGES);
    }
    handleSubmit(submitData)();
  };

  const submitData = async (data: MailDataType) => {
    setIsLoading(true);

    toast.loading('Sending your anonymous mail...');
    const resUploadMail = await postMail(data);
    if (!resUploadMail?.success) {
      toast.dismiss();
      toast.error('Failed sending data, please try again later');
      toast.error(JSON.stringify(resUploadMail.message));
      setIsLoading(false);
      return;
    }
    toast.dismiss();

    toast.success('Successful sending your mail!');
    setIsLoading(false);
    setState('DONE');
    setTextValue('');
    reset();
  };
  //#endregion  //*======== Connection with server ===========

  return (
    <div className='flex relative flex-col gap-6 w-full' id='form'>
      <div className='flex justify-between w-full'>
        <small className={clsxm('font-fivo text-sm font-normal ')}>
          Black Elephant Mail
        </small>
        <button onClick={() => setState('BEFORE')}>
          <RiCloseCircleLine size={25} />
        </button>
      </div>
      <HeaderForm />
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit((data) => submitData(data))}
          className='flex flex-col gap-8 w-full'
        >
          <MailInput
            dark={true}
            id={MailInputField.SUBJECT}
            label={<>SUBJECT OF THE UNSPOKEN TABOO WORDS :</>}
            validation={{ required: true }}
          />
          <TextInput textValue={textValue} setTextValue={setTextValue} />
          <div className='flex justify-between items-end'>
            <Button
              type='button'
              isLoading={isLoading}
              onClick={onSubmit}
              className='p-0 bg-none hover:bg-none'
            >
              <NextImage
                width={250}
                height={90}
                priority={true}
                src='/images/black-elephant-mail/button-send.png'
                alt='Send Buttons'
                className='w-32'
              />
            </Button>

            <small className={clsxm('font-fivo text-sm font-normal ')}>
              <span className='font-bold'>TED</span>xITS ©2022
            </small>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

function HeaderForm() {
  return (
    <div className='border-cdark font-fivo flex gap-x-4 max-w-max'>
      <div className='flex flex-col justify-between'>
        <h2 className='text-cdark text-xl italic font-extrabold md:text-4xl'>
          T<span className='font-pilow'>O</span>
        </h2>
        <h2 className='text-cdark text-xl italic font-extrabold md:text-4xl'>
          F<span className='font-pilow'>R</span>
          OM
        </h2>
      </div>
      <div className='flex flex-col justify-between'>
        <h2 className='text-cdark text-xl italic font-extrabold md:text-4xl'>
          :
        </h2>
        <h2 className='text-cdark text-xl italic font-extrabold md:text-4xl'>
          :
        </h2>
      </div>
      <div className='flex flex-col justify-between'>
        <h2 className='text-cdark text-xl italic font-extrabold md:text-4xl'>
          TEDxITS
        </h2>
        <h2 className='text-cdark text-xl italic font-extrabold md:text-4xl'>
          ANONYMOUS
        </h2>
      </div>
    </div>
  );
}
