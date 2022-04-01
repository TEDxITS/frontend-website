/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

enum ExampleInputField {
  'EMAIL' = 'email',
}

type ExampleDataType = {
  [ExampleInputField.EMAIL]: string;
};

const initialValueCFS: ExampleDataType = {
  email: '',
};

export default function SandboxPage() {
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
      <Seo templateTitle='Example Form using react-hook-form' />

      <main className='bg-clight bg-texture'>
        <section className='px-8 py-32 min-h-screen md:px-[30vw]'>
          <h1 className='text-cdark'>Login</h1>
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
                className='border-slate-300 bg-white rounded-md border'
              />
              <Input
                dark={true}
                id='password'
                type='password'
                label='Password'
                className='border-slate-300 bg-white rounded-md border'
              />
              <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                  <Input
                    id='checkbox'
                    type='checkbox'
                    label='Remember me'
                    className='text-cdark w-4 h-4 rounded border-gray-300 cursor-pointer focus:ring-cdark'
                  />
                </div>

                <div className='text-sm'>
                  <UnderlineLink
                    href='/login/forgot-password'
                    className='text-cdark font-medium'
                  >
                    Forgot your password?
                  </UnderlineLink>
                </div>
              </div>
              <Button type='submit' isLoading={isLoading} className='block'>
                Log in
              </Button>
              <div className='flex justify-evenly items-center'>
                <div className='flex items-center'>
                  <p className='text-cdark font-medium'>
                    Haven<span>&apos;</span>t register?
                  </p>
                </div>

                <div className='text-sm'>
                  <UnderlineLink
                    href='/register'
                    className='text-cdark font-medium'
                  >
                    Register Now
                  </UnderlineLink>
                </div>
              </div>
            </form>
          </FormProvider>
        </section>
      </main>
    </Layout>
  );
}
