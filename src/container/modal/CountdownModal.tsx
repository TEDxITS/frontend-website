/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';

type CountdownModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

import NextImage from '@/components/NextImage';

export default function CountdownModal({
  isOpen,
  setIsOpen,
}: CountdownModalProps) {
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
              <div className='layout flex items-center'>
                <NextImage
                  width={1516}
                  height={659}
                  src='https://res.cloudinary.com/tedxits/image/upload/v1653395290/ticketing/countdown-ticket.png'
                  className='hidden w-full origin-left lg:block'
                  alt='closed tickets'
                />
                <NextImage
                  width={659}
                  height={1501}
                  src='https://res.cloudinary.com/tedxits/image/upload/v1653395290/ticketing/countdown-ticket-mobile.png'
                  className='block w-full origin-left lg:hidden'
                  alt='closed tickets'
                />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
