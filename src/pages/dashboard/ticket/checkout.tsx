import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

import { setApiContext } from '@/lib/axios';
import { isTicketOpen } from '@/lib/date';
import { getEventData } from '@/lib/hooks/event';

import Layout from '@/components/layout/Layout';
import LoadingPage from '@/components/layout/LoadingPage';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import CountdownModal from '@/container/modal/CountdownModal';
import CheckoutCard from '@/container/ticketing/checkout/CheckoutCard';
import TicketingCard from '@/container/ticketing/TicketingCard';

import { AllEventType, AllPaymentType } from '@/constant/links';

import { PageWithAuth } from '@/types/auth';
import { Event, Payment } from '@/types/event';

const WithssrPage: PageWithAuth = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  const [isCountdownModalOpen, setIsCountdownModalOpen] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    if (!data) {
      router.push('/404');
      return;
    }
    if (!isTicketOpen()) {
      setIsCountdownModalOpen(true);
      setTimeout(() => {
        router.push('/dashboard/ticket');
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data && isTicketOpen()) {
    return (
      <Layout
        withDashboard={true}
        className='bg-blob-blue bg-cgray bg-no-repeat bg-cover'
        isDark={true}
      >
        <Seo templateTitle='Checkout' />

        <main className='layout flex flex-col pt-4 pb-8 md:pb-16'>
          <div className='flex flex-col gap-y-8 items-start md:flex-row'>
            <TicketingCard
              type={data.type}
              className='w-full max-w-none md:sticky md:top-14 md:max-w-xs'
            >
              <h4 className='text-cdark text-xl font-bold'>Price</h4>
              <h1 className='text-cdark'>
                {data.price / 1000}k
                <span className='text-cdark text-2xl font-normal'>/ticket</span>
              </h1>
            </TicketingCard>
            <div className='w-full rounded-3xl md:pl-4 lg:pl-8'>
              <div className='grid relative pt-32 pb-8 bg-white rounded-3xl drop-shadow-lg'>
                <NextImage
                  src='https://res.cloudinary.com/tedxits/image/upload/v1650805104/images/ticket/image-ticket_a82grw.jpg'
                  width={716}
                  height={345}
                  alt='Ticket'
                  className='overflow-hidden absolute top-0 w-full max-h-24 rounded-sm rounded-t-3xl'
                  useSkeleton
                />
                <CheckoutCard data={data} />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    );
  } else {
    return (
      <>
        {isCountdownModalOpen && (
          <CountdownModal
            isOpen={isCountdownModalOpen}
            setIsOpen={setIsCountdownModalOpen}
          />
        )}
        <LoadingPage />
      </>
    );
  }
};

WithssrPage.permission = 'auth';

export default WithssrPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  setApiContext(context);
  const type = context.query.type as Event;
  const payment = context.query.payment as Payment;

  const isEventValid = AllEventType.includes(type);
  const isPaymentValid = AllPaymentType.includes(payment);

  if (!(isEventValid && isPaymentValid)) {
    return {
      props: { data: null },
    };
  }
  try {
    const eventData = await getEventData(type, payment);
    return {
      props: {
        data: {
          event_id: eventData.event_id,
          payment_id: eventData.event_price[0].payment_id,
          type: type,
          price: eventData.event_price[0].price,
          quota: eventData.event_price[0].quota,
        },
      },
    };
  } catch (error) {
    return {
      props: { data: null },
    };
  }
};
