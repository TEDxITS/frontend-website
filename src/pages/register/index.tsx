/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import InputPassword from '@/components/input/InputPassword';
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
          <h1 className='text-cdark'>Register</h1>
          <FormProvider {...methods}>
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
              <InputPassword
                dark={true}
                id='password'
                type='password'
                label='Password'
                validation={{ required: true, pattern: /^\S+@\S+$/i }}
                className='border-slate-300 bg-white rounded-md border'
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
        </section>
      </main>
    </Layout>
  );
}
