/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import InputPassword from '@/components/input/InputPassword';
import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import RegisterTitle from '@/assets/svg/RegisterTitle';

enum ExampleInputField {
  'EMAIL' = 'email',
}

type ExampleDataType = {
  [ExampleInputField.EMAIL]: string;
};

const initialValueCFS: ExampleDataType = {
  email: '',
};

export default function RegisterPage() {
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
      <Seo templateTitle='Register' />

      <main className='bg-clight bg-texture'>
        <section className='min-h-screen px-8 py-32 md:px-[30vw]'>
          <small className='absolute font-fivo font-medium text-cdark text-lg top-24 md:left-40'>
            Time to See the Unseen.
          </small>
          <div className='flex justify-center'>
            <RegisterTitle />
          </div>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(() => submitData())}
              className='flex flex-col gap-8 mt-8 w-full'
            >
              <Input
                dark={true}
                id='name'
                type='name'
                label='Name'
                validation={{ required: true, pattern: /^[A-Za-z]+$/ }}
                className='bg-clight border border-slate-300 rounded-md'
              />
              <Input
                dark={true}
                id={ExampleInputField.EMAIL}
                type='email'
                label='Email'
                validation={{ required: true, pattern: /^\S+@\S+$/i }}
                className='bg-clight border border-slate-300 rounded-md'
              />
              <InputPassword
                dark={true}
                id='password'
                type='password'
                label='Password'
                className='bg-clight border border-slate-300 rounded-md'
              />
              <InputPassword
                dark={true}
                id='password'
                type='password'
                label='Repeat Password'
                className='bg-clight border border-slate-300 rounded-md'
              />

              <Button type='submit' isLoading={isLoading} className='block'>
                Register
              </Button>
              <div className='flex items-center justify-evenly'>
                <div className='flex items-center'>
                  <p className='font-medium text-cdark'>
                    Already have an account?
                  </p>
                </div>

                <div className='text-sm'>
                  <UnderlineLink
                    href='/login'
                    className='font-medium text-cdark'
                  >
                    Login Now
                  </UnderlineLink>
                </div>
              </div>
            </form>
          </FormProvider>
          <NextImage
            src='/images/forgot-password/float.png'
            width={365}
            height={402}
            alt='float'
            className='absolute max-w-[50vw] right-28 w-full md:max-w-[30vw] md:right-0 md:top-96'
          />
        </section>
      </main>
    </Layout>
  );
}
