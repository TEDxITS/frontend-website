import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

import MerchPopUp from '@/assets/svg/MerchPopUp';

export default function ImgModal() {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='bg-cdark overflow-y-auto fixed inset-0 z-10 bg-opacity-75'
          onClose={closeModal}
        >
          <div className='min-h-screen text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block overflow-hidden max-w-md align-middle transition-all transform'>
                <button className='bottom-[50%] font-fivo left-[50%] translate-y-[26.5rem] text-4xl font-extrabold transition-all duration-150 ease-in-out hover:drop-shadow-xl hover:scale-110'>
                  BUY NOW!
                </button>
                <MerchPopUp />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
