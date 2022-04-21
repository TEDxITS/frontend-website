/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import api from '@/lib/axios';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import ForgotPasswordTitle from '@/assets/svg/ForgotPasswordTitle';
import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

import { ApiForgotPass } from '@/types/api';

// yang perlu ditanyain
// 1. cara debug api success dan fail apa
// 2. show pada modal transition kenapa enggak mau isOpen(nggk ngasih return value false)
// 3. nanyain lagi default toast message

enum ForgotPass {
  'EMAIL' = 'email',
}

type PassDataType = {
  [ForgotPass.EMAIL]: string;
};

type UrlModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialValueCFS: PassDataType = {
  email: '',
};

export default function ForgotPasswordPage() {
  const methods = useForm<PassDataType>({
    defaultValues: initialValueCFS,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { handleSubmit, reset } = methods;

  const submitData = async (data: PassDataType) => {
    setIsLoading(true);
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
        success: 'Berhasil! silahkan mengecek email anda',
      }
    );
    setIsLoading(false);
    reset();
  };

  return (
    <Layout>
      <Seo templateTitle='Forgot Password' />

      <SuccessModal isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* batas modal di sini */}
      <main className='bg-clight bg-texture grid relative py-16 min-h-screen'>
        <section className='layout flex relative flex-col justify-center items-center'>
          <p className='text-cdark absolute top-0 right-0'>
            Time to See the Unseen.
          </p>
          <ArrowLink
            direction='left'
            href='/login'
            className='text-cdark absolute top-0 left-0'
          >
            Login
          </ArrowLink>

          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit((data) => submitData(data))}
              className='flex z-10 flex-col items-center w-full'
            >
              <ForgotPasswordTitle className='animate-float w-full max-w-xl' />
              <div className='flex flex-col gap-8 mt-20 w-full max-w-lg'>
                <Input
                  dark={true}
                  id={ForgotPass.EMAIL}
                  type='email'
                  label='Email'
                  validation={{ required: true, pattern: /^\S+@\S+$/i }}
                  className='bg-clight border-slate-300 rounded-md border'
                />

                <Button type='submit' isLoading={isLoading} className='block'>
                  Send reset password
                </Button>
              </div>
            </form>
          </FormProvider>
          <NextImage
            src='/images/forgot-password/float.png'
            width={365}
            height={402}
            alt='float'
            className='animate-float max-w-[50%] absolute right-0 bottom-0 w-full'
          />
        </section>
      </main>
    </Layout>
  );
}

const SuccessModal = ({ isOpen, setIsOpen }: UrlModalProps) => {
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
                <div className='/ bg-cgray flex z-10 flex-col gap-4 items-center px-8 pt-8 pb-1 -mb-1'>
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
                  <div id='register'>
                    <p className='/ font-fivo text-cdark font-medium leading-tight text-center'>
                      Forgot Password Success!, you will receive an email with a
                      password reset link.
                    </p>
                  </div>
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
