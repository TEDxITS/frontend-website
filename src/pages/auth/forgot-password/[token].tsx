/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import api from '@/lib/axios';
import useLoadingToast from '@/hooks/toast/useLoadingToast';

import Button from '@/components/buttons/Button';
import InputPassword from '@/components/input/InputPassword';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import { LOGIN_PAGE } from '@/constant/links';
import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

import { RegisterInputField } from '../register';

import { ApiForgotPass } from '@/types/api';

enum ForgotPass {
  'PASSWORD' = 'password',
  'REPEATPASSWORD' = 'repeatpassword',
}

type PassDataType = {
  [ForgotPass.PASSWORD]: string;
  [RegisterInputField.REPEATPASSWORD]: string;
};

const initialValueReset: PassDataType = {
  password: '',
  repeatpassword: '',
};

const ResetPasswordPage = () => {
  const router = useRouter();
  const token = router.query.token;
  const isLoading = useLoadingToast();
  const methods = useForm<PassDataType>({
    defaultValues: initialValueReset,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, reset, getValues } = methods;

  const onSubmit = () => {
    if (getValues('password') !== getValues('repeatpassword')) {
      toast.error("Try again, Your password didn't match");
      return;
    }
    handleSubmit(submitData)();
  };

  const submitData = async (data: PassDataType) => {
    const newdata = {
      newPass: data.password,
      token: token,
    };
    toast.promise(
      api.post<ApiForgotPass>(`/auth/new-password`, newdata).then((res) => {
        if (res.data.status) {
          toast.success(res.data.message);
          router.push(LOGIN_PAGE);
        } else {
          toast.error(res.data.message);
        }
      }),
      {
        ...DEFAULT_TOAST_MESSAGE,
        success: 'Success! please login again with your new password',
      }
    );

    reset();
  };
  return (
    <Layout className='bg-[#EAEAE2]' showFooter={false}>
      <Seo templateTitle='Reset Password' />

      <main className='bg-blob-blue flex overflow-hidden relative flex-col bg-cover'>
        <section className='layout flex z-10 justify-center items-center min-h-screen'>
          <div className='w-full max-w-md drop-shadow-lg'>
            <div className='flex relative flex-col pb-2'>
              <img src='/svg/ticket-top.svg' alt='' className='z-20 w-full' />
              <div className='bg-cgray flex z-10 flex-col gap-4 items-center px-8 pt-8 pb-1 -mb-1'>
                <img
                  src='/svg/tedx-logo.svg'
                  alt='TedxITS logo'
                  className='h-10'
                />
                <svg viewBox='0 0 498.33 2.18'>
                  <path
                    d='M489.87 1.17L5.98 1'
                    fill='none'
                    stroke='#231f20'
                    strokeLinecap='round'
                    strokeMiterlimit='10'
                    strokeWidth='2px'
                    strokeDasharray='5'
                  />
                </svg>

                <p className='font-fivo text-cdark text-lg font-medium'>
                  Reset your password
                </p>

                <FormProvider {...methods}>
                  <form
                    onSubmit={handleSubmit((data) => submitData(data))}
                    className='flex flex-col gap-8 mb-8 w-full'
                  >
                    <InputPassword
                      dark={true}
                      id={RegisterInputField.PASSWORD}
                      helperText='Password must contain minimum 8 characters, one uppercase, one lowercase, and one number'
                      type='password'
                      label='Password'
                      validation={{
                        required: true,
                        pattern:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
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
                      Reset Password
                    </Button>
                  </form>
                </FormProvider>
                <svg viewBox='0 0 498.33 2.18'>
                  <path
                    d='M489.87 1.17L5.98 1'
                    fill='none'
                    stroke='#231f20'
                    strokeLinecap='round'
                    strokeMiterlimit='10'
                    strokeWidth='2px'
                    strokeDasharray='5'
                  />
                </svg>
              </div>
              <img
                src='/svg/ticket-bottom.svg'
                alt=''
                className='z-20 w-full'
              />
            </div>
          </div>
        </section>
        <div className='absolute inset-0 blur-sm md:blur-none'>
          <NextImage
            src='/images/checkout-page/sticker-ticket-1.png'
            width={441}
            height={220}
            alt='Ticket'
            className='absolute -left-16 top-1/2 -rotate-90'
            imgClassName='drop-shadow-lg'
          />
          <NextImage
            src='/images/checkout-page/sticker-ticket-2.png'
            width={488}
            height={259}
            alt='Ticket'
            className='absolute top-0 -right-16 rotate-6'
            imgClassName='drop-shadow-lg'
          />
          <NextImage
            src='/images/checkout-page/sticker-ticket-3.png'
            width={401}
            height={189}
            alt='Ticket'
            className='absolute left-0 bottom-1/2 rotate-3'
            imgClassName='drop-shadow-lg'
          />
        </div>
      </main>
    </Layout>
  );
};

export default ResetPasswordPage;
