import axios from 'axios';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import api from '@/lib/axios';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import InputPassword from '@/components/input/InputPassword';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Logo from '@/components/tabs/Logo';

import useAuthStore from '@/store/useAuthStore';

import LoginTitle from '@/assets/svg/LoginTitle';
import { FORGOT_PASSWORD_PAGE, REGISTER_PAGE } from '@/constant/links';
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
  const { handleSubmit, reset } = methods;

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit: SubmitHandler<LoginDataType> = async (data) => {
    setIsLoading(true);
    try {
      const response = await api.post<ApiResponse<User>>(
        `/auth/login-account`,
        data
      );
      if (response.data.success) {
        toast.success('Login success!');
        login({
          token: response.data.data.token,
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error.message);
      } else {
        toast.error(DEFAULT_TOAST_MESSAGE.error);
      }
    } finally {
      reset();
      setIsLoading(false);
    }
  };

  return (
    <Layout className='bg-[#EAEAE2]'>
      <Seo templateTitle='Login' />

      <main className='bg-blob-blue bg-cover grid min-h-screen py-8 md:py-16'>
        <section className='flex flex-col gap-16 layout relative'>
          <p className='text-cdark text-left text-sm'>
            Time to See the Unseen.
          </p>
          <div className='flex flex-col gap-8 justify-center max-w-lg mx-auto my-auto w-full'>
            <LoginTitle className='w-full' />
            <FormProvider {...methods}>
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
                  className='bg-transparent border border-cdark'
                />
                <InputPassword
                  autoComplete='current-password'
                  dark={true}
                  id={LoginInputField.PASSWORD}
                  label='Password'
                  className='bg-transparent border border-cdark'
                />

                <ArrowLink
                  as={UnstyledLink}
                  href={FORGOT_PASSWORD_PAGE}
                  className='flex font-fivo items-center ml-auto text-cred text-sm'
                >
                  Forgot your password?
                </ArrowLink>

                <Button type='submit' isLoading={isLoading} className='block'>
                  Log in
                </Button>
              </form>
            </FormProvider>
            <div className='grid grid-cols-2 place-items-center'>
              <p className='text-cdark'>
                Haven<span>&apos;</span>t register?
              </p>

              <UnstyledLink
                href={REGISTER_PAGE}
                className='duration-75 flex font-bold font-fivo items-center text-base text-cblue/90 transition-colors hover:text-cblue'
              >
                Register Now
              </UnstyledLink>
            </div>
          </div>
          <div className='flex items-start justify-between'>
            <Logo isDark className='w-20' />
            <p className='text-cdark text-sm'>@2022</p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

LoginPage.permission = 'auth';
export default LoginPage;
