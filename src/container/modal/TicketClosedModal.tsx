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
        className='fixed inset-0 overflow-y-auto z-10'
        onClose={closeModal}
      >
        <div className='bg-cdark/40 min-h-screen px-4 text-center'>
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
            enterFrom='-translate-y-96 opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='-translate-y-96 opacity-0 scale-95'
          >
            <div className='align-top inline-block max-w-xl overflow-hidden text-left transform transition-all w-full'>
              <div className='flex flex-col relative'>
                <div className='flex flex-col items-center px-0 relative z-10 md:px-8'>
                  <TicketClosed className='-translate-x-1 -translate-y-8 max-w-sm w-full' />
                  <ButtonLink
                    href={`/ticket/notify-me?type=${data.type}&payment=${data.payment}`}
                    className='-translate-y-16 border border-cdark font-medium text-lg to-cred hover:from-cgreen'
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
