/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import * as React from 'react';
import toast from 'react-hot-toast';

import api, { setApiContext } from '@/lib/axios';
import { getSeat } from '@/lib/hooks/event';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import QrReaderModal from '@/container/ticket/check/QrReaderModal';
import SeatLayout from '@/container/ticket/check/SeatLayout';

import DrawBottomLeft from '@/assets/svg/DrawBottomLeft';
import DrawBottomRight from '@/assets/svg/DrawBottomRight';
import DrawTopLeft from '@/assets/svg/DrawTopLeft';
import DrawTopRight from '@/assets/svg/DrawTopRight';
import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

import { ApiAuthResponse } from '@/types/api';
import { EventSeatApiData } from '@/types/event';

export type SeatType = {
  title: string;
  value: number;
};
export default function CheckPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [seatData, setSeatData] = React.useState<EventSeatApiData[]>(
    data as EventSeatApiData[]
  );

  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] =
    React.useState<boolean>(false);

  const [bookingId, setBookingId] = React.useState<string>('');
  const [seatNumber, setSeatNumber] = React.useState<SeatType>({
    title: '',
    value: 0,
  });

  const refetchData = async () => {
    const data = await getSeat();
    setSeatData(data);
  };

  const resetData = async () => {
    refetchData();
    setBookingId('');
    setSeatNumber({
      title: '',
      value: 0,
    });
  };

  const submitData = async () => {
    if (bookingId === '') {
      toast.error('Please scan your QR code first');
      return;
    }
    if (seatNumber.value === 0) {
      toast.error('Please select your seat first');
      return;
    }

    const data = {
      booking_id: bookingId,
      seat_no: seatNumber.value,
    };
    toast.promise(
      api.post<ApiAuthResponse>(`/seat/input-seat`, data).then((res) => {
        if (res.data.success) {
          setIsSuccessModalOpen(true);
        } else {
          toast.error(res.data.message);
        }
      }),
      {
        ...DEFAULT_TOAST_MESSAGE,
        success: 'Seat registered successfully',
      }
    );
    refetchData();
  };

  return (
    <Layout showFooter={false}>
      <Seo templateTitle='Ticket Check Page' />
      <QrReaderModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        setBookingId={setBookingId}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        setIsOpen={setIsSuccessModalOpen}
        seat={seatNumber.title}
        resetData={resetData}
      />

      <main className='bg-blob-blue flex relative flex-col gap-16 bg-top bg-no-repeat bg-cover'>
        <div className='flex z-10 flex-col gap-4 justify-center items-center min-h-screen backdrop-blur-md'>
          <h1 className='font-fivo font-bold'>Select Your Seat</h1>

          <div className='flex justify-between w-full max-w-3xl'>
            <div className='flex flex-col gap-4'>
              <p>
                Booking Number :{' '}
                <input
                  className='bg-cdark border-clight px-2 py-1 w-full rounded-md border'
                  onChange={(event) => setBookingId(event.target.value)}
                  value={bookingId}
                />
              </p>
              <p>
                Selected Seat Number :{' '}
                <h1 className='text-cred font-bold'>
                  {seatNumber.value === 0 ? 'none' : seatNumber.title}
                </h1>
              </p>
            </div>
            <div>
              <Button
                variant='secondary'
                className='p-0 px-3 py-1'
                onClick={submitData}
              >
                Submit
              </Button>
            </div>
          </div>
          <hr />
          <SeatLayout
            setSeatNumber={setSeatNumber}
            seatNumber={seatNumber}
            seatData={seatData}
          />
        </div>

        <div className='overflow-hidden absolute inset-0 brightness-50'>
          <NextImage
            src='https://res.cloudinary.com/tedxits/image/upload/v1650805425/images/ticket/sticker-ticket-1_ggkhcm.png'
            width={441}
            height={220}
            alt='Ticket'
            className='absolute -left-16 top-1/2 -rotate-12'
            imgClassName='drop-shadow-lg'
          />
          <NextImage
            src='https://res.cloudinary.com/tedxits/image/upload/v1650805425/images/ticket/sticker-ticket-2_oncgxj.png'
            width={488}
            height={259}
            alt='Ticket'
            className='hidden absolute top-4 -right-16 rotate-6 md:block'
            imgClassName='drop-shadow-lg '
          />
          <NextImage
            src='https://res.cloudinary.com/tedxits/image/upload/v1650805425/images/ticket/sticker-ticket-3_t2a1la.png'
            width={401}
            height={189}
            alt='Ticket'
            className='bottom-[40%] hidden absolute left-0 rotate-3 md:block'
            imgClassName='drop-shadow-lg'
          />
        </div>
      </main>
    </Layout>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  setApiContext(context);

  try {
    const eventData = await getSeat();
    return {
      props: {
        data: eventData,
      },
    };
  } catch (error) {
    return {
      props: { data: null },
    };
  }
};

type SuccessModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  seat: string;
  resetData: () => Promise<void>;
};

function SuccessModal({
  isOpen,
  setIsOpen,
  seat,
  resetData,
}: SuccessModalProps) {
  const closeModal = () => {
    setIsOpen(false);
    resetData();
  };
  return (
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
                <img src='/svg/ticket-top.svg' alt='' className='z-20 w-full' />
                <div className='bg-cgray flex z-10 flex-col gap-4 items-center px-8 pt-4 pb-1 -mb-1'>
                  <img
                    src='/svg/tedx-logo.svg'
                    alt='TedxITS logo'
                    className='h-8'
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

                  <div className='flex relative justify-center items-center px-2 w-full'>
                    <DrawBottomLeft className='left-[10%] absolute bottom-0 w-8' />
                    <DrawBottomRight className='right-[10%] absolute bottom-0 w-8' />
                    <DrawTopLeft className='left-[10%] absolute top-0 w-8' />
                    <DrawTopRight className='right-[10%] absolute top-0 w-8' />
                    <div className='text-center'>
                      <p className='text-cdark'>your seat number :</p>
                      <h1 className='text-cdark'>{seat}</h1>
                    </div>
                  </div>
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
                  <p
                    id='prompt'
                    className='font-fivo text-cdark mt-2 font-medium text-center'
                  >
                    <span className='text-xs'> scan here or go to </span>
                    <br />
                    <span className='bg-cgreen text-clight inline-flex justify-center items-center px-2 rounded-full'>
                      tedxits.org/ticket/get-certificate
                    </span>{' '}
                  </p>
                  <img
                    src='/images/ticket/qr-booklet.svg'
                    alt='barcode'
                    className='w-56 shadow-sm'
                  />
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
  );
}
