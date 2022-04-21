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
    navigator.clipboard.writeText(data.booking_id);
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
          className='fixed inset-0 overflow-y-auto z-10'
          onClose={closeModal}
        >
          <div className='backdrop-blur-sm bg-cdark/80 min-h-screen text-center'>
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
              className='align-middle h-screen inline-block'
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
              <div className='align-middle inline-block text-left transform transition-all w-full'>
                <div className='bg-cgray layout rounded-3xl z-10'>
                  <div className='flex flex-col gap-4 items-center layout py-8'>
                    <NextImage
                      src='/images/checkout-page/confirmation-page-title.svg'
                      width={525}
                      height={111.461}
                      alt='checklist'
                      className='max-w-lg w-full'
                    />
                    <p className='text-cdark'>
                      Thankyou for your Purchase, please confirm your payment in
                    </p>
                    <Timer endTime={data.booking_finish_time} />

                    <div className='flex flex-col gap-4 w-full'>
                      <SectionHeader title='Payment Information' />
                      <div className='flex gap-1 items-center relative text-cdark'>
                        {data.booking_id}
                        <MdContentCopy
                          size={25}
                          className='cursor-pointer text-cdark'
                          onClick={copyToClipBoard}
                        />
                      </div>

                      <SectionHeader title='Personal Information' />
                      <div className='bg-cgray bg-texture px-2 text-cdark'>
                        <p>{data.booking_name}</p>
                        <p>{data.booking_address}</p>
                        <p>{data.booking_telp}</p>
                      </div>
                      <div className='flex items-center px-2 text-cdark'>
                        <p>Price : </p>
                        <p className='font-bold text-lg'>
                          {data.PaymentType?.price}
                        </p>
                      </div>
                      <div className='flex flex-col gap-y-2 items-center mt-8'>
                        <UnstyledLink
                          href={'https://page.line.me/193pbtpg'}
                          className='animate-bounce bg-cred duration-75 flex font-bold font-fivo gap-4 items-center px-8 py-3 rounded-full text-center text-cgray text-lg transition-all hover:drop-shadow-xl hover:scale-105'
                        >
                          <NextImage
                            width={256}
                            height={256}
                            src='https://res.cloudinary.com/tedxits/image/upload/v1650892536/LINE_logo.svg_ub0rpu.png'
                            className='drop-shadow-lg w-6'
                            alt='Line'
                          />
                          Confirm Payment
                        </UnstyledLink>
                        <div className='flex flex-wrap gap-2 items-center text-cdark'>
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
      <p className='font-semibold text-cdark text-xl'>{title}</p>
      <hr className='border-cdark' />
    </div>
  );
}
