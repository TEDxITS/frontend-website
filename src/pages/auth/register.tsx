import axios from 'axios';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import api from '@/lib/axios';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import InputPassword from '@/components/input/InputPassword';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Logo from '@/components/tabs/Logo';
import RegisterModal from '@/container/modal/RegisterModal';

import useAuthStore from '@/store/useAuthStore';

import RegisterTitle from '@/assets/svg/RegisterTitle';
import { LOGIN_PAGE, RESEND_VERIFICATION_PAGE } from '@/constant/links';
import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

import { ApiAuthResponse } from '@/types/api';

export enum RegisterInputField {
  'NAME' = 'name',
  'EMAIL' = 'email',
  'PASSWORD' = 'password',
  'REPEATPASSWORD' = 'repeatpassword',
}

export type RegisterDataType = {
  [RegisterInputField.NAME]: string;
  [RegisterInputField.EMAIL]: string;
  [RegisterInputField.PASSWORD]: string;
  [RegisterInputField.REPEATPASSWORD]: string;
};

const initialValueRegister: RegisterDataType = {
  name: '',
  email: '',
  password: '',
  repeatpassword: '',
};

export default function RegisterPage() {
  //#region  //*=========== Store ===========
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

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('');
  const methods = useForm<RegisterDataType>({
    defaultValues: initialValueRegister,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, getValues, reset } = methods;

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit = () => {
    if (getValues('password') !== getValues('repeatpassword')) {
      toast.error("Try again, Your password didn't match");
      return;
    }
    handleSubmit(submitData)();
  };

  const submitData = async (data: RegisterDataType) => {
    const newdata = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    setEmail(data.email);
    setIsLoading(true);
    try {
      const response = await api.post<ApiAuthResponse>(
        `/auth/create-account`,
        newdata
      );
      if (response.data.success) {
        setIsOpen(true);
        toast.success(
          'Register Success! Please check your email to verify your account'
        );
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
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
      <Seo templateTitle='Register' />
      {/* modal */}
      <RegisterModal isOpen={isOpen} setIsOpen={setIsOpen} email={email} />
      {/* form */}
      <main className='bg-blob-blue grid overflow-hidden relative py-8 min-h-screen bg-cover md:py-16'>
        <section className='layout flex relative z-10 flex-col gap-16'>
          <p className='text-cdark text-sm text-left'>
            Time to See the Unseen.
          </p>
          <div className='flex flex-col gap-8 justify-center mx-auto my-auto w-full max-w-lg'>
            <RegisterTitle className='w-full' />

            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit((data) => submitData(data))}
                className='flex flex-col gap-8 w-full'
              >
                <Input
                  dark={true}
                  id={RegisterInputField.NAME}
                  type='name'
                  label='Name'
                  helperText='Name must consist of at least 3 letters'
                  validation={{
                    required: true,
                    pattern: /[a-zA-Z][a-zA-Z ]{2,}$/g,
                  }}
                  className='border-cdark bg-transparent border'
                />
                <Input
                  dark={true}
                  id={RegisterInputField.EMAIL}
                  type='email'
                  label='Email'
                  validation={{ required: true, pattern: /^\S+@\S+$/i }}
                  className='border-cdark bg-transparent border'
                />
                <InputPassword
                  dark={true}
                  id={RegisterInputField.PASSWORD}
                  helperText='Password must contain minimum 8 characters, one uppercase, one lowercase, and one number'
                  type='password'
                  label='Password'
                  validation={{
                    required: true,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
                  }}
                  className='border-cdark bg-transparent border'
                />
                <InputPassword
                  dark={true}
                  id={RegisterInputField.REPEATPASSWORD}
                  type='password'
                  label='Repeat your password'
                  validation={{ required: true }}
                  className='border-cdark bg-transparent border'
                />

                <Button
                  type='button'
                  onClick={onSubmit}
                  isLoading={isLoading}
                  className='block'
                >
                  Register
                </Button>
              </form>
            </FormProvider>
            <div className='grid grid-cols-2 place-items-center'>
              <p className='text-cdark'>Already have an account ?</p>
              <UnstyledLink
                href={LOGIN_PAGE}
                className='font-fivo text-cblue/90 flex items-center text-base font-bold transition-colors duration-75 hover:text-cblue'
              >
                Login Now
              </UnstyledLink>
            </div>
            <ArrowLink
              as={UnstyledLink}
              href={RESEND_VERIFICATION_PAGE}
              className='font-fivo text-cred flex items-center mx-auto text-sm'
            >
              Resend Email Verification
            </ArrowLink>
          </div>
          <div className='flex justify-between items-start'>
            <Logo isDark className='w-20' />
            <p className='text-cdark text-sm'>@2022</p>
          </div>
        </section>
        <NextImage
          src='/images/forgot-password/float.png'
          width={365}
          height={402}
          alt='float'
          className='absolute right-0 bottom-0 w-1/2 translate-x-1/4 translate-y-1/4'
        />
      </main>
    </Layout>
  );
}
