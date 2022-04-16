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
        <section className='px-8 py-32 min-h-screen md:px-[30vw]'>
          <small className='font-fivo text-cdark absolute top-24 text-lg font-medium md:left-40'>
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
                className='bg-clight border-slate-300 rounded-md border'
              />
              <Input
                dark={true}
                id={ExampleInputField.EMAIL}
                type='email'
                label='Email'
                validation={{ required: true, pattern: /^\S+@\S+$/i }}
                className='bg-clight border-slate-300 rounded-md border'
              />
              <InputPassword
                dark={true}
                id='password'
                type='password'
                label='Password'
                className='bg-clight border-slate-300 rounded-md border'
              />
              <InputPassword
                dark={true}
                id='password'
                type='password'
                label='Repeat Password'
                className='bg-clight border-slate-300 rounded-md border'
              />

              <Button type='submit' isLoading={isLoading} className='block'>
                Register
              </Button>
              <div className='flex justify-evenly items-center'>
                <div className='flex items-center'>
                  <p className='text-cdark font-medium'>
                    Already have an account?
                  </p>
                </div>

                <div className='text-sm'>
                  <UnderlineLink
                    href='/login'
                    className='text-cdark font-medium'
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
            className='max-w-[50vw] absolute right-28 w-full md:max-w-[30vw] md:right-0 md:top-96'
          />
        </section>
      </main>
    </Layout>
  );
}
