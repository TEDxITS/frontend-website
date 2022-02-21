import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';
import ReactPlayer from 'react-player';

import NextImage from '@/components/NextImage';

import LeftLine from '@/assets/svg/LeftLine';
import RightLine from '@/assets/svg/RightLine';
import TopLine from '@/assets/svg/TopLine';

type VideoModalProps = {
  isOpen: boolean;
  url: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function VideoModal({
  isOpen,
  setIsOpen,
  url,
}: VideoModalProps) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog
        as='div'
        className='bg-cdark/80 flex overflow-hidden fixed inset-0 z-10 flex-col'
        onClose={closeModal}
      >
        <div className='z-20 px-4 min-h-screen text-center'>
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

          {/* This element is to trick the browser into centering the modal contents. */}
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
            <div className='max-w-[80%] inline-block overflow-hidden w-full align-middle rounded-3xl transition-all transform md:max-w-[70%]'>
              <main className='bg-cdark flex relative flex-col p-2 md:p-4'>
                <div className='aspect-h-9 aspect-w-16 overflow-hidden z-50 rounded-2xl'>
                  <ReactPlayer
                    style={{ zIndex: 10 }}
                    url={url}
                    width={'100%'}
                    height={'100%'}
                    controls={true}
                  />
                </div>
                <TopLine className='absolute -top-4 left-1/2 w-1/2 -translate-x-1/2 lg:-top-16 lg:w-1/3' />
                <LeftLine className='absolute bottom-0 left-0 z-10 h-1/4 lg:h-1/2' />
                <RightLine className='absolute bottom-0 -right-4 h-1/5 lg:h-1/3' />
              </main>
            </div>
          </Transition.Child>
        </div>
        <NextImage
          src='/svg/letter/t-letter.png'
          width={547}
          height={602}
          alt='t letter'
          className='animate-[pulse_8s__ease_infinite] max-w-[50vw] absolute left-0 -top-16 w-full -translate-x-1/2'
        />
        <NextImage
          src='/svg/letter/e-letter.png'
          width={543}
          height={576}
          alt='e letter'
          className='max-w-[50vw] absolute bottom-0 left-1/4 w-full -translate-x-1/3 translate-y-1/2'
        />

        <NextImage
          src='/svg/letter/d-letter.png'
          width={495}
          height={468}
          alt='d letter'
          className='max-w-[30vw] absolute top-0 right-1/4 w-full blur-xl -translate-y-1/2'
        />
        <NextImage
          src='/svg/letter/x-letter.png'
          width={400}
          height={415}
          alt='x letter'
          className='animate-[pulse_15s__ease_infinite] max-w-[40vw] absolute right-0 bottom-0 w-full translate-x-1/4 translate-y-1/4'
        />
      </Dialog>
    </Transition>
  );
}
