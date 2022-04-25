/* eslint-disable @next/next/no-img-element */
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { getToday } from '@/lib/helper';
import useLoadingToast from '@/hooks/toast/useLoadingToast';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import {
  AllEventType,
  AllPaymentType,
  TICKET_PAGE_NO_AUTH,
} from '@/constant/links';
import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

import { Event, Payment } from '@/types/event';

enum NotifyMe {
  'EMAIL' = 'email',
}

type NotifyDataType = {
  [NotifyMe.EMAIL]: string;
};

const initialValueResend: NotifyDataType = {
  email: '',
};

export default function NotifyPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { type, payment } = data;

  const isLoading = useLoadingToast();
  const methods = useForm<NotifyDataType>({
    defaultValues: initialValueResend,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, reset } = methods;

  const uploadToGoogleSheet = async (data: NotifyDataType) => {
    try {
      const res = await fetch(
        'https://sheet.best/api/sheets/6d933106-841b-4072-b6b7-a25066903c6d',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            time: getToday(),
            email: data.email,
            type: type,
            payment: payment,
          }),
        }
      );
      await res.json();
      return { success: true };
    } catch (error) {
      return { success: false, message: error };
    }
  };

  const submitData = async (data: NotifyDataType) => {
    toast.promise(
      uploadToGoogleSheet(data).then((res) => {
        if (res.success) {
          toast.success(
            'Success! We will notify you when the ticket is RESTOCKED again'
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
    <Layout className='bg-[#EAEAE2]'>
      <Seo templateTitle='Notify Me' />

      {/* form */}
      <main className='bg-blob-blue grid overflow-hidden relative py-8 min-h-screen bg-cover md:py-16'>
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

                <p className='text-cdark text-lg font-medium leading-none text-center'>
                  Notify me on Ticket Restock!
                  <br />
                  <span className='text-cdark/80 text-sm'>
                    don&apos;t worry we wont spam you
                  </span>
                </p>

                <FormProvider {...methods}>
                  <form
                    onSubmit={handleSubmit((data) => submitData(data))}
                    className='flex flex-col gap-8 mb-8 w-full'
                  >
                    <Input
                      dark={true}
                      id={NotifyMe.EMAIL}
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
                  href={TICKET_PAGE_NO_AUTH}
                  direction='left'
                  className='font-fivo text-cred flex items-center text-sm'
                >
                  Discover Ticket
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
            src='/images/checkout-page/sticker-ticket-1.png'
            width={441}
            height={220}
            alt='Ticket'
            className='absolute -left-16 top-1/2 -rotate-12'
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
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const type = context.query.type as string;
  const payment = context.query.payment as string;

  const isEventValid = AllEventType.includes(type as Event);
  const isPaymentValid = AllPaymentType.includes(payment as Payment);

  if (!(isEventValid && isPaymentValid)) {
    toast.error('Notify for ticket that are not valid');
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        type: type,
        payment: payment,
      },
    },
  };
};
