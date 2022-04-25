/* eslint-disable @next/next/no-img-element */
import { Disclosure } from '@headlessui/react';
import * as React from 'react';
import { HiChevronUp } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

import { FaqData, FaqDataType } from '@/data/event';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function FaqPage() {
  return (
    <Layout>
      <Seo templateTitle='Faq' />

      <main className='bg-blob-blue flex relative flex-col gap-16 pt-8 bg-top bg-no-repeat bg-cover md:pt-16'>
        <Header />
        <section className='min-h-[calc(100vh-64px-32px)] flex relative z-10 flex-col gap-8 md:min-h-[calc(100vh-64px-64px)]'>
          <div className='layout flex flex-col'>
            <NextImage
              src='/images/ticket/faq.svg'
              width={439.32}
              height={137.38}
              alt='faq'
              className='w-full max-w-md'
            />

            <div className='pt-16 w-full'>
              <div className='flex flex-col mx-auto w-full max-w-md drop-shadow-xl'>
                <img src='/svg/ticket-top.svg' alt='' className='z-20 w-full' />
                <div className='bg-cgray flex flex-col gap-4 p-2 w-full'>
                  {FaqData.map(({ question, answer }, i) => (
                    <FaqDisclosure
                      question={question}
                      answer={answer}
                      key={i}
                    />
                  ))}
                </div>

                <img
                  src='/svg/ticket-bottom.svg'
                  alt=''
                  className='z-20 w-full'
                />
                <div className='mt-8'>
                  <p className='font-medium'>Contact Person</p>
                  <div className='grid gap-4 mt-4 md:grid-cols-2'>
                    <p>
                      Ruth
                      <br /> id line: stffnieruth
                      <br /> wa: 081519457059
                    </p>
                    <p>
                      Kalinda
                      <br /> id line: mg_kalinda
                      <br /> no wa: 081514605331
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='overflow-hidden absolute inset-0 blur-sm md:blur-none'>
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

function FaqDisclosure({ question, answer }: FaqDataType) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={clsxm(
              'bg-cblue text-clight flex justify-between px-4 py-2 w-full text-sm font-medium text-left rounded-lg transition-all duration-100 hover:bg-cblue/50 focus:outline-none focus-visible:ring-cdark focus-visible:ring focus-visible:ring-opacity-75',
              open ? 'bg-cpurple' : 'bg-cblue'
            )}
          >
            <span className='font-fivo'>{question}</span>
            <HiChevronUp
              className={`${
                open ? 'transform rotate-180' : ''
              } w-5 h-5 text-clight`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className='font-fivo text-cdark px-4 pt-4 pb-2 text-sm'>
            {answer}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
