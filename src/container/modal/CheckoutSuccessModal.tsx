/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';
import toast from 'react-hot-toast';
import { MdContentCopy } from 'react-icons/md';

import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Timer from '@/components/Timer';

import { TicketResponse } from '@/types/api';
type CheckoutSuccessProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: TicketResponse;
};
export default function CheckoutSuccess({
  data,
  isOpen,
  setIsOpen,
}: CheckoutSuccessProps) {
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(
      `Halo! Aku mau konfirmasi pesanan tiket dengan kode unik: ${data.booking_id}. Tolong diproses segera, ya!`
    );
    toast.success('Copied to clipboard');
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as='div'
          className='overflow-y-auto fixed inset-0 z-10'
          onClose={closeModal}
        >
          <div className='bg-cdark/80 min-h-screen text-center backdrop-blur-sm'>
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
              <div className='inline-block w-full text-left align-middle transition-all transform'>
                <div className='bg-cgray layout z-10 rounded-3xl'>
                  <div className='layout flex flex-col gap-4 items-center py-8'>
                    <NextImage
                      src='/images/checkout-page/confirmation-page-title.svg'
                      width={525}
                      height={111.461}
                      alt='checklist'
                      className='w-full max-w-lg'
                    />
                    <p className='text-cdark'>
                      Thankyou for your Purchase, please confirm your payment in
                    </p>
                    <Timer endTime={data.booking_finish_time} />

                    <div className='flex flex-col gap-4 w-full'>
                      <SectionHeader title='Payment Information' />
                      <div className='text-cdark flex relative gap-1 items-center'>
                        {data.booking_id}
                        <MdContentCopy
                          size={25}
                          className='text-cdark cursor-pointer'
                          onClick={copyToClipBoard}
                        />
                      </div>

                      <SectionHeader title='Personal Information' />
                      <div className='bg-cgray bg-texture text-cdark px-2'>
                        <p>{data.booking_name}</p>
                        <p>{data.booking_address}</p>
                        <p>{data.booking_telp}</p>
                      </div>
                      <div className='text-cdark flex items-center px-2'>
                        <p>Price : </p>
                        <p className='text-lg font-bold'>
                          {data.PaymentType?.price}
                        </p>
                      </div>
                      <div className='flex flex-col gap-y-2 items-center mt-8'>
                        <UnstyledLink
                          href={'https://page.line.me/193pbtpg'}
                          className='bg-cred font-fivo text-cgray flex gap-4 items-center px-8 py-3 text-lg font-bold text-center rounded-full transition-all duration-75 animate-bounce hover:drop-shadow-xl hover:scale-105'
                        >
                          <NextImage
                            width={256}
                            height={256}
                            src='https://res.cloudinary.com/tedxits/image/upload/v1650892536/LINE_logo.svg_ub0rpu.png'
                            className='w-6 drop-shadow-lg'
                            alt='Line'
                          />
                          Confirm Payment
                        </UnstyledLink>
                        <small className='text-cdark'>
                          copy the payment detail text above and send it via
                          chat to our admin
                        </small>
                        <div className='text-cdark flex flex-wrap gap-2 items-center'>
                          <p>or confirm via</p>
                          <UnderlineLink
                            className='text-cgreen'
                            href={`https://api.whatsapp.com/send/?phone=6281519457059&text=Halo! Aku mau konfirmasi pesanan tiket dengan kode unik: ${data.booking_id}. Tolong diproses segera, ya!`}
                          >
                            {'Whatsapp'}
                          </UnderlineLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className=''>
      <p className='text-cdark text-xl font-semibold'>{title}</p>
      <hr className='border-cdark' />
    </div>
  );
}
