import * as React from 'react';

import styles from '@/styles/book.module.css';

import clsxm from '@/lib/clsxm';

import { BookDataType } from '@/data/book';

import NextImage from '@/components/NextImage';

export default function Book({ data }: { data: BookDataType }) {
  //#region  //*=========== Book State ===========
  const [isFlip, setIsFlip] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  //#endregion  //*======== Book State ===========

  //#region  //*=========== Button Functions ===========
  const flipBook = () => {
    setIsOpen(false);
    setIsFlip(!isFlip);
  };

  const openBook = () => {
    setIsFlip(false);
    setIsOpen(!isOpen);
  };
  //#endregion  //*======== Button Functions ===========

  return (
    <div
      className={clsxm('relative mt-10', styles.campaignBkContainer)}
      style={{
        width: 'calc(var(--book-width) * 1px)',
        float: 'left',
        zIndex: 1,
        perspective: '1800px',
      }}
    >
      <div
        className={clsxm(
          'book-1 campaign-bk-book absolute ',
          !isFlip && !isOpen && styles.campaignBkBookdefault,
          isOpen && styles.campaignBkViewinside,
          isFlip && styles.campaignBkViewback
        )}
        style={{
          width: '100%',
          height: 'calc(var(--book-height) * 1px)',
          transformStyle: 'preserve-3d',
          transition: 'transform 1s',
        }}
      >
        <BookCover isOpen={isOpen} data={data} />
        <BookContent data={data} />
        <BookBack data={data} />
        <BookLeft data={data} />
      </div>
      <div
        className='flex relative gap-2 justify-end items-center'
        style={{ marginTop: 'calc((var(--book-height) * 1px) + 40px)' }}
      >
        <button
          onClick={flipBook}
          className='bg-cdark border-cdark font-fivo px-4 py-1 text-lg rounded-lg border-2'
        >
          Flip
        </button>
        <button
          onClick={openBook}
          className='bg-clight border-cdark font-fivo text-cdark px-4 py-1 text-lg rounded-lg border-2'
        >
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>
    </div>
  );
}

//#region  //*=========== Book Components ===========
function BookCover({ isOpen, data }: { isOpen: boolean; data: BookDataType }) {
  return (
    <div
      className={clsxm(
        'block absolute z-10',
        styles.campaignBkFront,
        isOpen && styles.campaignBkFrontViewInside
      )}
      style={{
        width: 'calc(var(--book-width) * 1px)',
        height: 'calc(var(--book-height) * 1px)',
        transformStyle: 'preserve-3d',
        transformOrigin: '0% 50%',
        transition: 'transform 0.5s',
      }}
    >
      <div
        className={clsxm(
          'bg-clight pl-[13px] flex absolute inset-0 rounded-r-lg shadow-lg',
          styles.campaignBkCover
        )}
        style={{
          width: 'calc(var(--book-width) * 1px)campaign-bk-back',
          height: 'calc(var(--book-height) * 1px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className={clsxm(
            'text-cdark flex z-10 flex-col p-8 opacity-100 transition-all duration-200',
            {
              'opacity-0 delay-75': isOpen,
            }
          )}
        >
          <NextImage
            width={287.63}
            height={275.9}
            src={data.logo}
            alt={`${data.elephant} logo`}
            className='w-full'
          />
          <small className='font-fivo mt-2 ml-auto'>{data.elephant}</small>
          <h2 className='font text-cdark mb-4 text-lg font-bold xl:text-xl 2xl:text-3xl'>
            {data.heading}
          </h2>
          <p className='mt-auto'>{data.subTitle}</p>
        </div>
      </div>
    </div>
  );
}

function BookContent({ data }: { data: BookDataType }) {
  return (
    <div
      className='bg-clight bg-texture campaign-bk-page block absolute bg-repeat rounded-r-lg'
      style={{
        transform: 'translate3d(0, 0, 19px)',
        width: 'calc((var(--book-width) * 1px) - 5px)',
        height: 'calc((var(--book-height) * 1px) - 10px)',
        top: '5px',
        backfaceVisibility: 'hidden',
        zIndex: 9,
      }}
    >
      <div
        className='flex absolute inset-0 flex-col gap-8 p-8'
        style={{ transition: 'opacity 0.3s ease-in-out' }}
      >
        <div className='text-cdark flex justify-between'>
          <p>Subtheme</p>
          <p className='font-medium'>{data.elephant}</p>
        </div>

        <svg viewBox='0 0 105.66 104.83' className='mt-auto w-1/2'>
          <path
            fill='none'
            stroke='#212121'
            d='m.33.36 104 104M105.16 25.17v79.17H24.4'
          />
        </svg>
        <p className='text-cdark text-justify'>{data.content}</p>
      </div>
    </div>
  );
}

function BookBack({ data }: { data: BookDataType }) {
  return (
    <div
      className={clsxm(
        'bg-clight campaign-bk-back campaign-bk-cover-back flex overflow-hidden absolute rounded-l-lg shadow-lg',
        styles.campaignBkBack
      )}
      style={{
        transform: 'rotate3d(0, 1, 0, -180deg) translate3d(0, 0, 20px)',
        width: 'calc(var(--book-width) * 1px)',
        height: 'calc(var(--book-height) * 1px)',
      }}
    >
      <div className='flex items-center w-full h-full'>
        <NextImage
          src={data.backCover}
          alt='The Unspoken'
          className='w-full'
          width={417}
          height={626}
        />
      </div>
    </div>
  );
}

function BookLeft({ data }: { data: BookDataType }) {
  return (
    <div
      className='bg-clight campaign-bk-left block absolute'
      style={{
        width: '40px',
        left: '-20px',
        height: 'calc(var(--book-height) * 1px)',
        transform: 'rotate3d(0, 1, 0, -90deg)',
      }}
    >
      <p
        className='leading-[40px] px-[10px] text-cdark flex justify-between'
        style={{
          width: 'calc(var(--book-height) * 1px)',
          height: '40px',
          transformOrigin: '0 0',
          transform: 'rotate(90deg) translateY(-40px)',
        }}
      >
        <span className='mr-4'>
          <span className='font-semibold'>TED</span>xITS
        </span>
        <span className='uppercase'>{data.title}</span>
      </p>
    </div>
  );
}

//#endregion  //*======== Book Components ===========
