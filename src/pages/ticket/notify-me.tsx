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
      <main className='bg-blob-blue bg-cover grid min-h-screen overflow-hidden py-8 relative md:py-16'>
        <section className='flex items-center justify-center layout min-h-screen z-10'>
          <div className='drop-shadow-lg max-w-md w-full'>
            <div className='flex flex-col pb-2 relative'>
              <img src='/svg/ticket-top.svg' alt='' className='w-full z-20' />
              <div className='-mb-1 bg-cgray flex flex-col gap-4 items-center pb-1 pt-8 px-8 z-10'>
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

                <p className='font-medium leading-none text-cdark text-center text-lg'>
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
                      className='bg-transparent border border-cdark'
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
                  className='flex font-fivo items-center text-cred text-sm'
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
                className='w-full z-20'
              />
            </div>
          </div>
        </section>
        <div className='absolute blur-sm inset-0 md:blur-none'>
          <NextImage
            src='/images/checkout-page/sticker-ticket-1.png'
            width={441}
            height={220}
            alt='Ticket'
            className='-left-16 -rotate-12 absolute top-1/2'
            imgClassName='drop-shadow-lg'
          />
          <NextImage
            src='/images/checkout-page/sticker-ticket-2.png'
            width={488}
            height={259}
            alt='Ticket'
            className='-right-16 absolute rotate-6 top-0'
            imgClassName='drop-shadow-lg'
          />
          <NextImage
            src='/images/checkout-page/sticker-ticket-3.png'
            width={401}
            height={189}
            alt='Ticket'
            className='absolute bottom-1/2 left-0 rotate-3'
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
