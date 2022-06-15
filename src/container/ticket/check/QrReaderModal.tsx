/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react';
import { Result } from '@zxing/library';
import React from 'react';
import { QrReader } from 'react-qr-reader';

type QrReaderModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBookingId: React.Dispatch<React.SetStateAction<string>>;
};

export default function QrReaderModal({
  isOpen,
  setIsOpen,
  setBookingId,
}: QrReaderModalProps) {
  const resultHandler = (result: Result | null | undefined) => {
    if (result) {
      setBookingId(result.getText());
      closeModal();
    }
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
                  <img
                    src='/svg/ticket-top.svg'
                    alt=''
                    className='z-20 w-full'
                  />
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

                    <div className='w-full'>
                      <p>silahkan melakukan scan barcode anda</p>
                      <QrReader
                        onResult={(result) => resultHandler(result)}
                        constraints={{ facingMode: 'user' }}
                      />
                    </div>
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
    </>
  );
}
