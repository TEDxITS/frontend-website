/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import api from '@/lib/axios';
import useLoadingToast from '@/hooks/toast/useLoadingToast';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Logo from '@/components/tabs/Logo';

import ForgotPasswordTitle from '@/assets/svg/ForgotPasswordTitle';
import { LOGIN_PAGE } from '@/constant/links';
import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

import { ApiForgotPass } from '@/types/api';

enum ForgotPass {
  'EMAIL' = 'email',
}

type PassDataType = {
  [ForgotPass.EMAIL]: string;
};

type SuccessModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
};

const initialValueCFS: PassDataType = {
  email: '',
};

export default function ForgotPasswordPage() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('');
  const isLoading = useLoadingToast();
  const methods = useForm<PassDataType>({
    defaultValues: initialValueCFS,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, reset, getValues } = methods;

  const submitData = async (data: PassDataType) => {
    setEmail(getValues('email') as string);
    toast.promise(
      api.post<ApiForgotPass>(`/auth/forgot-password`, data).then((res) => {
        if (res.data.status) {
          setIsOpen(true);
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      }),
      {
        ...DEFAULT_TOAST_MESSAGE,
        success: 'Success! please check your email',
      }
    );

    reset();
  };

  return (
    <Layout className='bg-[#EAEAE2]'>
      <Seo templateTitle='Forgot Password' />
      {/* modal */}
      <SuccessModal isOpen={isOpen} setIsOpen={setIsOpen} email={email} />
      {/* form */}
      <main className='bg-blob-blue grid overflow-hidden relative py-8 min-h-screen bg-cover md:py-16'>
        <section className='layout flex relative z-10 flex-col gap-16'>
          <p className='text-cdark text-sm text-left'>
            Time to See the Unseen.
          </p>

          <div className='flex flex-col justify-center mx-auto my-auto w-full max-w-lg'>
            <ArrowLink
              as={UnstyledLink}
              href={LOGIN_PAGE}
              direction='left'
              className='font-fivo text-cred flex items-center mr-auto text-sm'
            >
              Login
            </ArrowLink>
            <ForgotPasswordTitle className='w-full' />
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(submitData)}
                className='flex flex-col gap-8 mt-8 w-full'
              >
                <Input
                  dark={true}
                  id={ForgotPass.EMAIL}
                  type='email'
                  label='Email'
                  validation={{ required: true, pattern: /^\S+@\S+$/i }}
                  className='border-cdark bg-transparent border'
                />

                <Button type='submit' isLoading={isLoading} className='block'>
                  Send reset password
                </Button>
              </form>
            </FormProvider>
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

const SuccessModal = ({ isOpen, setIsOpen, email }: SuccessModalProps) => {
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog
        as='div'
        className='overflow-y-auto fixed inset-0 z-10'
        onClose={closeModal}
      >
        <div className='bg-cdark/80 px-4 min-h-screen text-center'>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0' />
          </Transition.Child>

          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='inline-block overflow-hidden w-full max-w-md text-left align-middle transition-all transform'>
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

                  <p className='font-fivo text-cdark font-medium text-center'>
                    Forgot Password Success! Please check{' '}
                    <span className='text-cblue font-bold'>{email}</span> to get
                    your password reset link.
                  </p>

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
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
