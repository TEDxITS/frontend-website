import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

import { setApiContext } from '@/lib/axios';
import { getEventData } from '@/lib/hooks/event';

import Layout from '@/components/layout/Layout';
import LoadingPage from '@/components/layout/LoadingPage';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import CheckoutCard from '@/container/ticketing/checkout/CheckoutCard';
import TicketingCard from '@/container/ticketing/TicketingCard';

import { AllEventType, AllPaymentType } from '@/constant/links';

import { PageWithAuth } from '@/types/auth';
import { Event, Payment } from '@/types/event';

const WithssrPage: PageWithAuth = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  React.useEffect(() => {
    if (!data) {
      router.push('/404');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data) {
    return (
      <Layout withDashboard={true} className='bg-cgray' isDark={true}>
        <Seo templateTitle='Checkout' />
        <main className='bg-cgray flex flex-col layout pb-8 pt-4 md:pb-16'>
          <div className='flex flex-col gap-y-8 items-start md:flex-row'>
            <TicketingCard
              type={data.type}
              className='max-w-none w-full md:max-w-xs md:sticky md:top-14'
            >
              <h4 className='font-bold text-cdark text-xl'>Price</h4>
              <h1 className='text-cdark'>
                {data.price / 1000}k
                <span className='font-normal text-2xl text-cdark'>/ticket</span>
              </h1>
            </TicketingCard>
            <div className='rounded-3xl w-full md:pl-4 lg:pl-8'>
              <div className='bg-white drop-shadow-lg grid pb-8 pt-32 relative rounded-3xl'>
                <NextImage
                  src='https://res.cloudinary.com/tedxits/image/upload/v1650805104/images/ticket/image-ticket_a82grw.jpg'
                  width={716}
                  height={345}
                  alt='Ticket'
                  className='absolute max-h-24 overflow-hidden rounded-sm rounded-t-3xl top-0 w-full'
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
    return <LoadingPage />;
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
