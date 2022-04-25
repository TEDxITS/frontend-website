import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

import { getEventData } from '@/lib/hooks/event';

import ArrowDownButton from '@/components/buttons/ArrowDownButton';
import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import TicketClosedModal from '@/container/modal/TicketClosedModal';
import CoverSection from '@/container/ticket/CoverSection';
import {
  BookNowText,
  GrabTicketText,
  ScrollDownText,
} from '@/container/ticket/Text';
import TicketingCard from '@/container/ticketing/TicketingCard';

import DrawTopRight from '@/assets/svg/DrawTopRight';
import { offlineNonKit, offlineWithKit } from '@/constant/links';

import { PageWithAuth } from '@/types/auth';
import { EventPaymentType } from '@/types/event';

const TicketPage: PageWithAuth = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [eventData, setEventData] =
    React.useState<EventPaymentType>(offlineNonKit);

  const [isOfflineNonKitLoading, setIsOfflineNonKitLoading] =
    React.useState<boolean>(false);
  const [isOfflineWithKitLoading, setIsOfflineWithKitLoading] =
    React.useState<boolean>(false);

  const openModalOfflineNonKit = () => {
    setIsOfflineNonKitLoading(true);
    setEventData(offlineNonKit);
    if (data[0].event_price[0].quota <= 0) {
      setIsOpen(true);
      setIsOfflineNonKitLoading(false);
    } else {
      router.push(
        `/dashboard/ticket/checkout?type=${offlineNonKit.type}&payment=${offlineNonKit.payment}`
      );
    }
  };

  const openModalOfflineWithKit = () => {
    setIsOfflineWithKitLoading(true);
    setEventData(offlineWithKit);
    if (data[1].event_price[0].quota <= 0) {
      setIsOpen(true);
      setIsOfflineWithKitLoading(false);
    } else {
      router.push(
        `/dashboard/ticket/checkout?type=${offlineWithKit.type}&payment=${offlineWithKit.payment}`
      );
    }
  };

  return (
    <Layout className='bg-[#EAEAE2]' withDashboard={true}>
      <Seo templateTitle='Ticket' />
      {isOpen && (
        <TicketClosedModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          data={eventData}
        />
      )}

      <main className='bg-blob-blue flex flex-col gap-16 bg-top bg-no-repeat bg-cover'>
        <section className='flex relative z-10 flex-col gap-8'>
          <div className='overflow-hidden w-full'>
            <div className='layout flex relative flex-col items-center'>
              <NextImage
                width={690}
                height={566}
                src='/images/ticket/blue-blob.png'
                alt='Blue Blob'
                className='absolute top-0 bottom-0'
              />
              <div className='layout flex z-20 flex-col justify-center items-center w-full md:mt-32'>
                <CoverSection />
              </div>
              <div className='max-w-[50%] flex relative z-10 justify-center my-16 w-full md:max-w-[18%] md:my-0'>
                <BookNowText className='w-full' />
                <DrawTopRight
                  className='absolute top-0 right-0 w-16 translate-x-full -translate-y-1/2'
                  drawStroke='#2F65E7'
                />
                <DrawTopRight
                  className='-scale-100 absolute bottom-0 left-0 w-16 -translate-x-full translate-y-1/2'
                  drawStroke='#2F65E7'
                />
              </div>
              <div className='flex z-10 flex-col items-center w-full'>
                <div className='relative'>
                  <ScrollDownText className='absolute -right-full -left-full' />
                  <ArrowDownButton
                    href='#book'
                    iconClassName='mt-[150%] text-cblue hover:border-cblue'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='flex overflow-hidden relative flex-col pt-16 pb-32'>
          <div className='layout flex z-10 flex-col items-center max-w-md'>
            <GrabTicketText className='w-1/2' />
            <p className='text-[#808080] flex flex-wrap mt-4'>
              Ready to spread the ideas of{' '}
              <span className='text-cblue mx-1'>visibility </span> and
              <span className='text-cblue mx-1'>vulnerability? </span> Join us,
              feel the impact and be the witness of
              <NextImage
                width={78.97}
                height={14.85}
                src='/images/logo/tedxits-text.svg'
                alt='TedXITS 2022'
                className='ml-1 h-3'
              />{' '}
              <span className='text-cdark font-bold'>2022</span>
            </p>
          </div>
          <div className='flex relative flex-col'>
            <div className='layout flex z-10 flex-col mt-16'>
              <div
                className='grid gap-y-8 gap-x-16 mx-auto md:grid-cols-2'
                id='book'
              >
                <TicketingCard
                  type='offline-non-kit'
                  className='ease transition-all duration-300 hover:-translate-y-2'
                >
                  <div className='flex flex-col items-center my-auto'>
                    <div className='flex flex-col items-center'>
                      <p className='mr-auto font-semibold'>Price</p>
                      <h1 className='text-cblue'>
                        {data[0].event_price[0].price / 1000}k
                        <span className='text-2xl font-normal'>/ticket</span>
                      </h1>
                      <Button
                        isLoading={isOfflineNonKitLoading}
                        onClick={openModalOfflineNonKit}
                        className='py-1 my-4 text-lg font-bold shadow-lg'
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </TicketingCard>
                <TicketingCard
                  type='offline-kit'
                  className='ease transition-all duration-300 hover:-translate-y-2'
                >
                  <div className='flex flex-col items-center my-auto'>
                    <div className='flex flex-col items-center'>
                      <p className='mr-auto font-semibold'>Price</p>
                      <h1 className='text-cblue'>
                        {data[1].event_price[0].price / 1000}k
                        <span className='text-2xl font-normal'>/ticket</span>
                      </h1>
                      <Button
                        isLoading={isOfflineWithKitLoading}
                        onClick={openModalOfflineWithKit}
                        className='py-1 my-4 text-lg font-bold shadow-lg'
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </TicketingCard>
              </div>
            </div>
            <div className='absolute inset-0'>
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
                className='absolute top-0 -right-16 rotate-6'
                imgClassName='drop-shadow-lg'
              />
              <NextImage
                src='https://res.cloudinary.com/tedxits/image/upload/v1650805425/images/ticket/sticker-ticket-3_t2a1la.png'
                width={401}
                height={189}
                alt='Ticket'
                className='absolute left-0 bottom-1/2 rotate-3'
                imgClassName='drop-shadow-lg'
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

TicketPage.permission = 'auth';

export default TicketPage;

export const getServerSideProps = async () => {
  const eventNonKit = await getEventData(
    offlineNonKit.type,
    offlineNonKit.payment
  );
  const eventWithKit = await getEventData(
    offlineWithKit.type,
    offlineWithKit.payment
  );

  const responseEventData = await Promise.all([eventNonKit, eventWithKit]);

  return {
    props: { data: responseEventData },
  };
};
