/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import useLoadingToast from '@/hooks/toast/useLoadingToast';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import { GUIDEBOOK } from '@/constant/links';
import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

enum Certificate {
  'NAMA' = 'nama',
  'EMAIL' = 'email',
}

type CertificateType = {
  [Certificate.NAMA]: string;
  [Certificate.EMAIL]: string;
};

const initialValueResend: CertificateType = {
  nama: '',
  email: '',
};

export default function NotifyPage() {
  const isLoading = useLoadingToast();
  const methods = useForm<CertificateType>({
    defaultValues: initialValueResend,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, reset } = methods;

  const uploadToGoogleSheet = async (data: CertificateType) => {
    try {
      const res = await fetch(
        'https://sheet.best/api/sheets/c91a84ef-e9ce-4d6a-81e3-4adcc196870e',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nama: data.nama,
            email: data.email,
          }),
        }
      );
      await res.json();
      return { success: true };
    } catch (error) {
      return { success: false, message: error };
    }
  };

  const submitData = async (data: CertificateType) => {
    toast.promise(
      uploadToGoogleSheet(data).then((res) => {
        if (res.success) {
          toast.success(
            'We will send your certificate to the email you provided'
          );
        }
      }),
      {
        ...DEFAULT_TOAST_MESSAGE,
      }
    );
    reset();
  };

  return (
    <Layout className='bg-cdark' showFooter={false}>
      <Seo templateTitle='Get your Certificate' />

      {/* form */}
      <main className='bg-blob-blue grid overflow-hidden relative py-8 min-h-screen bg-cover md:py-16'>
        <section className='layout flex z-10 justify-center items-center'>
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

                <p className='text-cdark text-lg font-medium leading-none text-center'>
                  Get E-certificate
                  <br />
                  <span className='text-cdark/80 text-sm'>
                    Input your name and email here to get your e-certificate
                  </span>
                </p>

                <FormProvider {...methods}>
                  <form
                    onSubmit={handleSubmit((data) => submitData(data))}
                    className='flex flex-col gap-8 my-8 w-full'
                  >
                    <Input
                      dark={true}
                      id={Certificate.NAMA}
                      label='Full Name'
                      validation={{ required: true }}
                      className='border-cdark bg-transparent border'
                    />
                    <Input
                      dark={true}
                      id={Certificate.EMAIL}
                      type='email'
                      label='Email'
                      validation={{ required: true, pattern: /^\S+@\S+$/i }}
                      className='border-cdark bg-transparent border'
                    />

                    <Button
                      type='submit'
                      isLoading={isLoading}
                      className='block'
                    >
                      Submit
                    </Button>
                  </form>
                </FormProvider>
                <ArrowLink
                  as={UnstyledLink}
                  href={GUIDEBOOK}
                  className='font-fivo text-cred flex items-center text-sm'
                >
                  Read TEDxITS Main Event Booklet
                </ArrowLink>
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
            src='https://res.cloudinary.com/tedxits/image/upload/v1650805425/images/ticket/sticker-ticket-1_ggkhcm.png'
            width={441}
            height={220}
            alt='Ticket'
            className='absolute -left-16 top-1/2 -rotate-12'
            imgClassName='drop-shadow-lg'
          />
          <NextImage
            src='https://res.cloudinary.com/tedxits/image/upload/v1650805425/images/ticket/sticker-ticket-2_oncgxj.png'
            width={488}
            height={259}
            alt='Ticket'
            className='hidden absolute top-4 -right-16 rotate-6 md:block'
            imgClassName='drop-shadow-lg '
          />
          <NextImage
            src='https://res.cloudinary.com/tedxits/image/upload/v1650805425/images/ticket/sticker-ticket-3_t2a1la.png'
            width={401}
            height={189}
            alt='Ticket'
            className='bottom-[40%] hidden absolute left-0 rotate-3 md:block'
            imgClassName='drop-shadow-lg'
          />
        </div>
      </main>
    </Layout>
  );
}
