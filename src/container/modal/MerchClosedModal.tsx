/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';

type MerchClosedModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

import MerchClosed from '@/assets/svg/MerchClosed';

export default function MerchClosedModal({
  isOpen,
  setIsOpen,
}: MerchClosedModalProps) {
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
          <div className='bg-cdark/40 px-4 min-h-screen text-center'>
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
              enterFrom='-translate-y-96 opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='-translate-y-96 opacity-0 scale-95'
            >
              <div className='inline-block overflow-hidden w-full max-w-xl text-left align-top transition-all transform'>
                <div className='flex relative flex-col pb-2'>
                  <div className='flex z-10 flex-col gap-4 items-center px-0 -mb-1 rotate-6 md:px-8'>
                    <MerchClosed className='transition -translate-y-8 hover:scale-105' />
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
