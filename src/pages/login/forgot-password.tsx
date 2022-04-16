/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import ForgotPasswordTitle from '@/assets/svg/ForgotPasswordTitle';

enum ExampleInputField {
  'EMAIL' = 'email',
}

type ExampleDataType = {
  [ExampleInputField.EMAIL]: string;
};

const initialValueCFS: ExampleDataType = {
  email: '',
};

export default function ForgotPasswordPage() {
  const methods = useForm<ExampleDataType>({
    defaultValues: initialValueCFS,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, reset } = methods;

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const submitData = async () => {
    setIsLoading(true);
    //#region  //*=========== Simulate Fetch Data ===========
    setTimeout(() => {
      setIsLoading(false);
      reset();
    }, 3000);
    //#endregion  //*======== Simulate Fetch Data ===========
  };
  return (
    <Layout>
      <Seo templateTitle='Forgot Password' />

      <main className='bg-clight bg-texture'>
        <section className='px-8 py-48 min-h-screen md:px-[30vw]'>
          <small className='font-fivo text-cdark absolute top-24 text-base md:left-40'>
            Time to See the Unseen.
          </small>
          <div className='flex justify-start items-center pb-6'>
            <div className='text-lg'>
              <UnderlineLink href='/login' className='text-cdark'>
                To Login Page
              </UnderlineLink>
            </div>
          </div>
          <div className='flex justify-center'>
            <ForgotPasswordTitle />
          </div>
          <FormProvider {...methods}>
            {' '}
            <form
              onSubmit={handleSubmit(() => submitData())}
              className='flex flex-col gap-8 mt-8 w-full'
            >
              <Input
                dark={true}
                id={ExampleInputField.EMAIL}
                type='email'
                label='Email'
                validation={{ required: true, pattern: /^\S+@\S+$/i }}
                className='bg-clight border-slate-300 rounded-md border'
              />
              <Button type='submit' isLoading={isLoading} className='block'>
                Send reset password
              </Button>
            </form>
          </FormProvider>
          <NextImage
            src='/images/forgot-password/float.png'
            width={365}
            height={402}
            alt='float'
            className='max-w-[50vw] absolute right-28 w-full md:max-w-[30vw] md:right-0 md:top-96'
          />
        </section>
      </main>
    </Layout>
  );
}
