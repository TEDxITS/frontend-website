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

      <main className='bg-blob-blue bg-cover bg-no-repeat bg-top flex flex-col gap-16'>
        <section className='flex flex-col gap-8 relative z-10'>
          <div className='overflow-hidden w-full'>
            <div className='flex flex-col items-center layout relative'>
              <NextImage
                width={690}
                height={566}
                src='/images/ticket/blue-blob.png'
                alt='Blue Blob'
                className='absolute bottom-0 top-0'
              />
              <div className='flex flex-col items-center justify-center layout w-full z-20 md:mt-32'>
                <CoverSection />
              </div>
              <div className='flex justify-center max-w-[50%] my-16 relative w-full z-10 md:max-w-[18%] md:my-0'>
                <BookNowText className='w-full' />
                <DrawTopRight
                  className='-translate-y-1/2 absolute right-0 top-0 translate-x-full w-16'
                  drawStroke='#2F65E7'
                />
                <DrawTopRight
                  className='-scale-100 -translate-x-full absolute bottom-0 left-0 translate-y-1/2 w-16'
                  drawStroke='#2F65E7'
                />
              </div>
              <div className='flex flex-col items-center w-full z-10'>
                <div className='relative'>
                  <ScrollDownText className='-left-full -right-full absolute' />
                  <ArrowDownButton
                    href='#book'
                    iconClassName='mt-[150%] text-cblue hover:border-cblue'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='flex flex-col overflow-hidden pb-32 pt-16 relative'>
          <div className='flex flex-col items-center layout max-w-md z-10'>
            <GrabTicketText className='w-1/2' />
            <p className='flex flex-wrap mt-4 text-[#808080]'>
              Ready to spread the ideas of{' '}
              <span className='mx-1 text-cblue'>visibility </span> and
              <span className='mx-1 text-cblue'>vulnerability? </span> Join us,
              feel the impact and be the witness of
              <NextImage
                width={78.97}
                height={14.85}
                src='/images/logo/tedxits-text.svg'
                alt='TedXITS 2022'
                className='h-3 ml-1'
              />{' '}
              <span className='font-bold text-cdark'>2022</span>
            </p>
          </div>
          <div className='flex flex-col relative'>
            <div className='flex flex-col layout mt-16 z-10'>
              <div
                className='gap-x-16 gap-y-8 grid mx-auto md:grid-cols-2'
                id='book'
              >
                <TicketingCard
                  type='offline-non-kit'
                  className='duration-300 ease transition-all hover:-translate-y-2'
                >
                  <div className='flex flex-col items-center my-auto'>
                    <div className='flex flex-col items-center'>
                      <p className='font-semibold mr-auto'>Price</p>
                      <h1 className='text-cblue'>
                        {data[0].event_price[0].price / 1000}k
                        <span className='font-normal text-2xl'>/ticket</span>
                      </h1>
                      <Button
                        isLoading={isOfflineNonKitLoading}
                        onClick={openModalOfflineNonKit}
                        className='font-bold my-4 py-1 shadow-lg text-lg'
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </TicketingCard>
                <TicketingCard
                  type='offline-kit'
                  className='duration-300 ease transition-all hover:-translate-y-2'
                >
                  <div className='flex flex-col items-center my-auto'>
                    <div className='flex flex-col items-center'>
                      <p className='font-semibold mr-auto'>Price</p>
                      <h1 className='text-cblue'>
                        {data[1].event_price[0].price / 1000}k
                        <span className='font-normal text-2xl'>/ticket</span>
                      </h1>
                      <Button
                        isLoading={isOfflineWithKitLoading}
                        onClick={openModalOfflineWithKit}
                        className='font-bold my-4 py-1 shadow-lg text-lg'
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
                className='-left-16 -rotate-12 absolute top-1/2'
                imgClassName='drop-shadow-lg'
              />
              <NextImage
                src='https://res.cloudinary.com/tedxits/image/upload/v1650805425/images/ticket/sticker-ticket-2_oncgxj.png'
                width={488}
                height={259}
                alt='Ticket'
                className='-right-16 absolute rotate-6 top-0'
                imgClassName='drop-shadow-lg'
              />
              <NextImage
                src='https://res.cloudinary.com/tedxits/image/upload/v1650805425/images/ticket/sticker-ticket-3_t2a1la.png'
                width={401}
                height={189}
                alt='Ticket'
                className='absolute bottom-1/2 left-0 rotate-3'
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
