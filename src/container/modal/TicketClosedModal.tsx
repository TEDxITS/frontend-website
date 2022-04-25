/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';

type TicketClosedModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: EventPaymentType;
};

import ButtonLink from '@/components/links/ButtonLink';

import TicketClosed from '@/assets/svg/TicketClosed';

import { EventPaymentType } from '@/types/event';

export default function TicketClosedModal({
  isOpen,
  setIsOpen,
  data,
}: TicketClosedModalProps) {
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
              <div className='flex relative flex-col'>
                <div className='flex relative z-10 flex-col items-center px-0 md:px-8'>
                  <TicketClosed className='w-full max-w-sm -translate-x-1 -translate-y-8' />
                  <ButtonLink
                    href={`/ticket/notify-me?type=${data.type}&payment=${data.payment}`}
                    className='border-cdark to-cred text-lg font-medium border -translate-y-16 hover:from-cgreen'
                    variant='secondary'
                  >
                    Notify me on Restock
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
