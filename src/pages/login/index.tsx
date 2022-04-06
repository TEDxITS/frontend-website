/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import api from '@/lib/axios';
import useLoadingToast from '@/hooks/toast/useLoadingToast';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import InputPassword from '@/components/input/InputPassword';
import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

import useAuthStore from '@/store/useAuthStore';

import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

import { ApiResponse } from '@/types/api';
import { User } from '@/types/auth';

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

export default function LoginPage() {
  const methods = useForm<LoginDataType>({
    defaultValues: initialValueLogin,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit } = methods;

  const isLoading = useLoadingToast();

  //#region  //*=========== Store ===========
  const login = useAuthStore.useLogin();
  //#endregion  //*======== Store ===========

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
        <section className='px-8 py-32 min-h-screen md:px-[30vw]'>
          <h1 className='text-cdark'>Login</h1>
          <FormProvider {...methods}>
            {' '}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col gap-8 mt-8 w-full'
            >
              <Input
                dark={true}
                id={LoginInputField.EMAIL}
                type='email'
                label='Email'
                validation={{ required: true, pattern: /^\S+@\S+$/i }}
                className='border-slate-300 bg-white rounded-md border'
              />
              <InputPassword
                dark={true}
                id={LoginInputField.PASSWORD}
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
