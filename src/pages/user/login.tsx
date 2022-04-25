/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import api from '@/lib/axios';
import useLoadingToast from '@/hooks/toast/useLoadingToast';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import InputPassword from '@/components/input/InputPassword';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

import useAuthStore from '@/store/useAuthStore';

import LoginTitle from '@/assets/svg/LoginTitle';
import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

import { ApiResponse } from '@/types/api';
import { PageWithAuth, User } from '@/types/auth';

enum LoginInputField {
  'EMAIL' = 'email',
  'PASSWORD' = 'password',
}

type LoginDataType = {
  [LoginInputField.EMAIL]: string;
  [LoginInputField.PASSWORD]: string;
};

const initialValueLogin: LoginDataType = {
  email: '',
  password: '',
};

const LoginPage: PageWithAuth = () => {
  //#region  //*=========== Store ===========
  const login = useAuthStore.useLogin();
  const isAuthenticated = useAuthStore.useIsAuthenticated();
  //#endregion  //*======== Store ===========

  //#region  //*=========== Autentication Redirect ===========
  const router = useRouter();
  React.useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard/ticket');
    }
  }, [isAuthenticated, router]);
  //#endregion  //*======== Autentication Redirect ===========

  const methods = useForm<LoginDataType>({
    defaultValues: initialValueLogin,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit } = methods;

  const isLoading = useLoadingToast();

  const onSubmit: SubmitHandler<LoginDataType> = async (data) => {
    // eslint-disable-next-line no-console
    console.log(data);

    toast.promise(
      api.post<ApiResponse<User>>(`/auth/login-account`, data).then((res) => {
        login({
          token: res.data.data.token,
        });
      }),
      {
        ...DEFAULT_TOAST_MESSAGE,
        success: 'Berhasil! Anda bisa masuk ke akun anda',
      }
    );

    return;
  };

  return (
    <Layout>
      <Seo templateTitle='Login' />

      <main className='bg-clight bg-texture'>
        <section className='relative px-8 py-32 min-h-screen md:px-[30vw]'>
          <small className='font-fivo text-cdark absolute top-24 text-lg font-medium md:left-40'>
            Time to See the Unseen.
          </small>
          <div className='flex justify-center'>
            <LoginTitle />
          </div>
          <FormProvider {...methods}>
            {' '}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col gap-8 mt-8 w-full'
            >
              <Input
                autoComplete='username'
                dark={true}
                id={LoginInputField.EMAIL}
                type='email'
                label='Email'
                validation={{ required: true, pattern: /^\S+@\S+$/i }}
                className='bg-clight border-slate-300 rounded-md border'
              />
              <InputPassword
                autoComplete='current-password'
                dark={true}
                id={LoginInputField.PASSWORD}
                label='Password'
                className='bg-clight border-slate-300 rounded-md border'
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
                  <UnstyledLink
                    href='/login/forgot-password'
                    className='text-cred font-medium opacity-75 transition hover:opacity-100'
                  >
                    Forgot your password?
                  </UnstyledLink>
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
                  <UnstyledLink
                    href='/register'
                    className='text-cblue text-lg font-bold opacity-75 transition hover:opacity-100'
                  >
                    Register Now
                  </UnstyledLink>
                </div>
              </div>
            </form>
          </FormProvider>
        </section>
      </main>
    </Layout>
  );
};

LoginPage.permission = 'auth';

export default LoginPage;
