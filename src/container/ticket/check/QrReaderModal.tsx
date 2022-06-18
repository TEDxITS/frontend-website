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
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog
        as='div'
        className='overflow-hidden fixed inset-0 z-10'
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
            enterFrom='translate-x-96 md:translate-y-96 opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='translate-x-96 md:translate-y-96 opacity-0 scale-95'
          >
            <div className='inline-block overflow-hidden w-full max-w-3xl text-left align-middle transition-all transform'>
              <div className='layout flex flex-col items-center'>
                <div className='relative w-full'>
                  <p className='absolute top-24 left-1/2 z-10 -translate-x-1/2'>
                    please scan your{' '}
                    <span className='bg-cgreen inline-flex justify-center items-center px-2 rounded-full'>
                      barcode
                    </span>{' '}
                    here
                  </p>
                  <QrReader
                    className='w-full'
                    onResult={(result) => resultHandler(result)}
                    constraints={{ facingMode: 'user' }}
                  />
                  <p className='absolute bottom-24 left-1/2 z-10 -translate-x-1/2'>
                    scanning booking number...
                  </p>
                  <div className='flex absolute inset-0 z-20 justify-center items-center p-32'>
                    <div className='aspect-h-1 aspect-w-1 border-clight w-full border border-dashed'></div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
