/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import BackgroundSection from '@/container/black-elephant-mail/BackgroundSection';
import CompleteSection from '@/container/black-elephant-mail/CompleteSection';
import CoverSection from '@/container/black-elephant-mail/CoverSection';
import { MailDataType } from '@/container/black-elephant-mail/FormCard';
import MailCard from '@/container/black-elephant-mail/MailCard';

import LoaderIllustration from '@/assets/svg/LoaderIllustration';

export enum CardState {
  'BEFORE',
  'FILL',
  'DONE',
}

export default function MailPage() {
  const [state, setState] = React.useState<keyof typeof CardState>('BEFORE');
  const [data, setData] = React.useState<MailDataType[]>([]);

  const fetchData = async () => {
    const res = await fetch('/api/mail/getMailData');
    const resData = await res.json();
    if (!resData.success) {
      return;
    }
    setData(resData.content);
  };

  React.useEffect(() => {
    fetchData();
  }, [state]);

  return (
    <Layout>
      <Seo templateTitle='Black Elephant Mail' />

      <main className='bg-clight flex flex-col'>
        <section className='flex relative z-10 flex-col gap-8 pt-8 md:pt-16'>
          <Header isDark={true} />

          <div className='min-h-[calc(100vh-64px-64px)] flex z-30 flex-col justify-center items-center lg:min-h-[calc(100vh-64px-96px)]'>
            {(state === 'BEFORE' || state === 'FILL') && (
              <CoverSection state={state} setState={setState} />
            )}
            {state === 'DONE' && (
              <>
                <CompleteSection />
                <img
                  src='/images/cfs/draw-eye.png'
                  alt=''
                  className='animate-[float_7s_ease-in-out_infinite] absolute top-1/2 left-1/2 w-1/4 opacity-40'
                />
              </>
            )}
            <BackgroundSection />
          </div>
        </section>
        <section className='min-h-main flex relative flex-col items-center py-8 md:py-16'>
          {data.length <= 0 ? (
            <>
              <LoaderIllustration className='mt-4 w-16' />
              <p className='text-cdark'>Loading mails...</p>
            </>
          ) : (
            <div
              id='mail'
              className='layout text-cdark grid z-10 grid-cols-1 gap-8 md:gap-16 lg:grid-cols-2'
            >
              {data.map((item, i) => (
                <MailCard data={item} key={i} />
              ))}
            </div>
          )}
          <BackgroundSection />
          <img
            src='/images/cfs/draw-eye.png'
            alt=''
            className='animate-[float_7s_ease-in-out_infinite] absolute left-0 top-1/2 w-1/4 opacity-40'
          />
        </section>
      </main>
    </Layout>
  );
}
