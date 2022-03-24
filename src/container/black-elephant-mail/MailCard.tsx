import dynamic from 'next/dynamic';
import React from 'react';

import 'react-quill/dist/quill.snow.css';

import clsxm from '@/lib/clsxm';

import { MailDataType } from './FormCard';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export default function MailCard({ data }: { data: MailDataType }) {
  return (
    <div className='relative'>
      <div className='bg-paper text-cdark relative z-10 h-full bg-cover rounded-2xl shadow-lg'>
        <div className='flex relative flex-col gap-6 p-8 h-full'>
          <small className={clsxm('font-fivo text-[12px] font-normal')}>
            Black Elephant Mail
          </small>
          <div>
            <div className='flex'>
              <p
                className={clsxm(
                  'font-fivo text-cdark block mb-auto italic font-semibold md:whitespace-nowrap '
                )}
              >
                SUBJECT OF THE UNSPOKEN TABOO WORDS :
              </p>
              <div className='border-cdark hidden w-full border-b md:block'></div>
            </div>
            <div
              className='flex'
              style={{
                backgroundColor: 'transparent',
                backgroundSize: '24px 24px',
                backgroundImage:
                  'repeating-linear-gradient(0deg, #212121, #212121 1px, transparent 1px, transparent)',
              }}
            >
              <p>{data.subject}</p>
            </div>
          </div>
          <div>
            <div className='flex'>
              <p
                className={clsxm(
                  'font-fivo text-cdark block mb-auto italic font-semibold md:whitespace-nowrap '
                )}
              >
                MESSAGES :
              </p>
            </div>
            <div className='relative'>
              <QuillNoSSRWrapper
                value={data.messages}
                readOnly={true}
                modules={{
                  toolbar: false,
                }}
                className='border-cdark border'
              />
              <div
                className='absolute inset-0 opacity-10'
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg, #212121, #212121 1px, transparent 1px, transparent)',
                  backgroundColor: 'transparent',
                  backgroundSize: '24px 24px',
                }}
              ></div>
            </div>
          </div>
          <div className='flex justify-between mt-auto'>
            <small className={clsxm('font-fivo text-[12px] font-normal')}>
              The Unspoken Taboo Words
            </small>
            <small className={clsxm('font-fivo text-[12px] font-normal')}>
              <span className='font-bold'>TED</span>xITS ©2022
            </small>
          </div>
        </div>
      </div>
      <div className={clsxm('bg-clight absolute inset-0', 'rounded-2xl')}></div>
    </div>
  );
}
