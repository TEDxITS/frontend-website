import * as React from 'react';
import toast from 'react-hot-toast';
import { BiScan } from 'react-icons/bi';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import QrReaderModal from '@/container/ticket/check/QrReaderModal';
import SeatLayout from '@/container/ticket/check/SeatLayout';

export default function CheckPage() {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(true);
  const [bookingId, setBookingId] = React.useState<string>('');
  const [seatNumber, setSeatNumber] = React.useState<number>(0);
  return (
    <Layout showFooter={false}>
      <Seo templateTitle='Ticket Check Page' />
      <QrReaderModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        setBookingId={setBookingId}
      />
      <main className='relative'>
        <section className=''>
          <div className='layout flex flex-col gap-8 items-center py-16 min-h-screen'>
            <h2 className='font-fivo font-bold'>Seat Selection</h2>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                  <p>
                    Booking Id :{' '}
                    <span className='text-cred font-bold'>
                      {bookingId ? bookingId : '-'}
                    </span>
                  </p>
                  <p>
                    Seat Number :{' '}
                    <span className='text-cred font-bold'>
                      {seatNumber === 0 ? '-' : seatNumber}
                    </span>
                  </p>
                </div>
                <div>
                  <Button
                    variant='secondary'
                    className='p-0 px-3 py-1'
                    onClick={() => {
                      toast.success('Kursi berhasil didaftarkan');
                      setSeatNumber(0);
                      setTimeout(() => {
                        setIsModalOpen(true);
                      }, 500);
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </div>
              <hr />
              <SeatLayout
                setSeatNumber={setSeatNumber}
                seatNumber={seatNumber}
              />
            </div>
          </div>
        </section>
        <Button
          onClick={() => setIsModalOpen(true)}
          className='fixed right-8 bottom-8 px-2 py-2'
        >
          <BiScan size={35} />
        </Button>

        <div
          className='absolute inset-0 bg-center bg-no-repeat bg-cover opacity-40 pointer-events-none'
          style={{
            backgroundImage: `url('https://res.cloudinary.com/tedxits/image/upload/v1654093793/event/pre-event-3-bg_e2hxim.jpg')`,
          }}
        />
      </main>
    </Layout>
  );
}
