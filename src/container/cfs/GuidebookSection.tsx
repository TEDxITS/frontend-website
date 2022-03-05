/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import ReactPlayer from 'react-player';

import clsxm from '@/lib/clsxm';

import ArrowDownButton from '@/components/buttons/ArrowDownButton';
import UnstyledLink from '@/components/links/UnstyledLink';

import Guidebook8 from '@/assets/book/Guidebook8';
import AboutCircleSecond from '@/assets/svg/AboutCircleSecond';
import TitleCfsRegistration from '@/assets/svg/TitleCfsRegistration';

import ArrowNext from '~/images/cfs/arrow-next.svg';
import ArrowPrevious from '~/images/cfs/arrow-prev.svg';
import BookLogo from '~/svg/book-logo.svg';

type BookStateType = 'user_fold' | 'fold_corner' | 'flipping' | 'read';

//#region  //*=========== Constant ===========
const GUIDEBOOK_PAGES = [
  'guidebook-01.jpg',
  'guidebook-03.jpg',
  'guidebook-04.jpg',
  'guidebook-05.jpg',
  'guidebook-06.jpg',
  'guidebook-07.jpg',
  'guidebook-08.jpg',
  'guidebook-09.jpg',
  'guidebook-10.jpg',
  'guidebook-11.jpg',
  'guidebook-12.jpg',
  'guidebook-13.jpg',
  'guidebook-14.jpg',
  'guidebook-02.jpg',
];

const GUIDEBOOK_TOPIC = [
  <>
    Calling for <span className='font-sympath'>S</span>peakers
  </>,
  <>
    What y<span className='font-sympath'>o</span>u have to expect
  </>,
  <>
    Require<span className='font-sympath'>M</span>ents
  </>,
  <>
    Tim<span className='font-sympath'>E</span>line
  </>,
  <>
    Re<span className='font-sympath'>S</span>ources for you
  </>,
  <>
    The <span className='font-bold'>TED</span> Commandments
  </>,
  <>
    The <span className='font-sympath'>E</span>nd
  </>,
];

//#endregion  //*======== Constant ===========

export default function GuidebookSection() {
  const [pageState, setPageState] = React.useState<number>(0);
  const [bookState, setBookState] = React.useState<BookStateType>('read');
  const bookRef = React.useRef(null) as any;

  //#region  //*=========== Navigate pages ===========
  const previousPage = () => {
    bookRef?.current?.pageFlip().flipPrev();
  };
  const nextPage = () => {
    bookRef?.current?.pageFlip().flipNext();
  };

  const gotoPage = (page: number) => {
    bookRef?.current?.pageFlip().turnToPage(page);
  };
  //#endregion  //*======== Navigate pages ===========

  // minus one becasue last page used as register prompt
  const totalPage = GUIDEBOOK_PAGES.length;

  //boolean true determined if the book is in first cover wothout interaction
  const isCover = pageState === 0 && bookState !== 'flipping';
  return (
    <div className='flex overflow-visible flex-col items-center'>
      <div className='flex relative justify-between items-center w-full lg:gap-x-16'>
        <button
          onClick={previousPage}
          className={clsxm(
            'z-20 opacity-0 transition-all duration-200 pointer-events-none hover:scale-105',
            {
              'opacity-1 hover:opacity-90 pointer-events-auto': pageState > 0,
            }
          )}
        >
          <ArrowPrevious className='text-4xl md:text-6xl' />
        </button>
        <div className='flex flex-col gap-8 py-16 w-full md:py-0'>
          <div
            className={clsxm(
              'flex relative flex-col items-center w-full -rotate-2',
              'ease z-10 transition-all duration-1000 translate-x-0',
              {
                'sm:-translate-x-1/4': isCover,
              }
            )}
          >
            <HTMLFlipBook
              ref={bookRef}
              width={691}
              height={979}
              size='stretch'
              showCover={true}
              maxShadowOpacity={0.5}
              minWidth={141.3}
              maxWidth={691}
              minHeight={200}
              maxHeight={979}
              onFlip={(page) => setPageState(page.data)}
              onChangeState={(state) => setBookState(state.data)}
              className=''
              style={{ backgroundColor: 'transparent' }}
              startPage={0}
              drawShadow={true}
              flippingTime={750}
              usePortrait={true}
              startZIndex={0}
              autoSize={true}
              mobileScrollSupport={true}
              clickEventForward={true}
              useMouseEvents={true}
              swipeDistance={0}
              showPageCorners={false}
              disableFlipByClick={false}
            >
              <img
                src={`/images/cfs/guidebook/guidebook-01.jpg`}
                alt={`Guidebook page 1`}
                className='w-full shadow-inner drop-shadow-2xl'
              />
              <img
                src={`/images/cfs/guidebook/guidebook-03.jpg`}
                alt={`Guidebook page 1`}
                className='w-full shadow-inner drop-shadow-2xl'
              />
              <img
                src={`/images/cfs/guidebook/guidebook-04.jpg`}
                alt={`Guidebook page 1`}
                className='w-full shadow-inner drop-shadow-2xl'
              />
              <img
                src={`/images/cfs/guidebook/guidebook-05.jpg`}
                alt={`Guidebook page 1`}
                className='w-full shadow-inner drop-shadow-2xl'
              />
              <img
                src={`/images/cfs/guidebook/guidebook-06.jpg`}
                alt={`Guidebook page 1`}
                className='w-full shadow-inner drop-shadow-2xl'
              />
              <img
                src={`/images/cfs/guidebook/guidebook-07.jpg`}
                alt={`Guidebook page 1`}
                className='w-full shadow-inner drop-shadow-2xl'
              />
              <div>
                <Guidebook8 />
              </div>
              <img
                src={`/images/cfs/guidebook/guidebook-09.jpg`}
                alt={`Guidebook page 1`}
                className='w-full shadow-inner drop-shadow-2xl'
              />
              <img
                src={`/images/cfs/guidebook/guidebook-10.jpg`}
                alt={`Guidebook page 1`}
                className='w-full shadow-inner drop-shadow-2xl'
              />
              <div className='relative'>
                <div className='aspect-h-9 aspect-w-16 bg-cdark bottom-[18%] absolute left-1/2 z-10 w-11/12 rotate-2 -translate-x-1/2'>
                  <ReactPlayer
                    url='https://youtu.be/-FOCpMAww28'
                    width={'100%'}
                    height={'100%'}
                    muted={true}
                    controls={true}
                  />
                </div>
                <img
                  src={`/images/cfs/guidebook/guidebook-11.jpg`}
                  alt={`Guidebook page 1`}
                  className='absolute inset-0 shadow-inner drop-shadow-2xl'
                />
              </div>
              <img
                src={`/images/cfs/guidebook/guidebook-12.jpg`}
                alt={`Guidebook page 1`}
                className='w-full shadow-inner drop-shadow-2xl'
              />
              <img
                src={`/images/cfs/guidebook/guidebook-13.jpg`}
                alt={`Guidebook page 1`}
                className='w-full shadow-inner drop-shadow-2xl'
              />
              <img
                src={`/images/cfs/guidebook/guidebook-14.jpg`}
                alt={`Guidebook page 1`}
                className='w-full shadow-inner drop-shadow-2xl'
              />
              <img
                src={`/images/cfs/guidebook/guidebook-02.jpg`}
                alt={`Guidebook page 1`}
                className='w-full shadow-inner drop-shadow-2xl'
              />

              {/* Last Page */}
              <div className='bg-[#E6E6E6] bg-texture pl-[1%] z-30'>
                <div className='flex flex-col gap-8 justify-center items-center p-4 h-full rotate-2 lg:p-16'>
                  <p className='text-cblue flex gap-2 justify-between w-full'>
                    <span>Then </span>
                    <span>what </span>
                    <span>you’re </span>
                    <span>waiting </span>
                    <span>for? </span>
                  </p>
                  <img
                    src='/images/sticker/sticker-scroll.png'
                    alt=''
                    className='w-1/2'
                  />
                  <ArrowDownButton
                    href='#registration'
                    iconClassName='text-cdark hover:border-cdark'
                  />
                  <div className='flex flex-col w-full'>
                    <p className='text-cdark relative'>
                      to see
                      <img
                        src='/images/cfs/draw-eye.png'
                        alt=''
                        className='animate-[float_4s_ease-in-out_infinite] absolute left-8 bottom-1/3 w-20'
                      />
                    </p>
                    <TitleCfsRegistration />
                  </div>
                </div>
              </div>
            </HTMLFlipBook>
          </div>
          <div className='flex relative z-20 flex-col justify-center items-center h-16'>
            {isCover ? (
              <button className='flex relative' onClick={nextPage}>
                <span className='text-cdark flex z-10 gap-2 items-center transition-all duration-300 hover:drop-shadow-xl hover:scale-110'>
                  Open Guidebook
                  <BookLogo className='text-3xl' />
                </span>
                <AboutCircleSecond className='absolute -top-1/2' />
              </button>
            ) : (
              <>
                <p className='text-cblue'>
                  {
                    GUIDEBOOK_TOPIC[
                      Math.floor(
                        pageState % 2 === 0
                          ? (pageState - 1) / 2
                          : pageState / 2
                      )
                    ]
                  }
                </p>
                <div className='hidden h-8 md:block'>
                  <div className='flex gap-4 items-center h-8'>
                    {[...Array(totalPage / 2)].map((_, index) => (
                      <React.Fragment key={index}>
                        {pageState === 2 * index + 1 ||
                        pageState === 2 * index + 2 ? (
                          <div
                            className='border-cblue w-6 h-6 rounded-full border-2 transition-all duration-200'
                            key={index}
                          ></div>
                        ) : (
                          <div
                            onClick={() => gotoPage(2 * index + 1)}
                            className='border-cblue w-3 h-3 rounded-full border-2 transition-all duration-200'
                            key={index}
                          ></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <p className='text-cdark block md:hidden'>
                  {pageState === totalPage
                    ? 'Done!'
                    : `Page ${pageState}/${totalPage}`}
                </p>
              </>
            )}

            <UnstyledLink
              href='/call-for-local-speaker/guidebook'
              className='font-fivo text-cdark mt-8'
            >
              <span className='text-cblue'>or</span> View Guidebook in full
              screen
            </UnstyledLink>
          </div>
        </div>
        <button
          onClick={nextPage}
          className={clsxm(
            'z-20 opacity-0 transition-all duration-200 pointer-events-none hover:scale-105',
            {
              'opacity-1 hover:opacity-90 pointer-events-auto':
                pageState > 0 && pageState < totalPage,
            }
          )}
        >
          <ArrowNext className='text-4xl lg:text-6xl' />
        </button>
        {/* Background */}
        <div
          className={clsxm(
            'opacity-1 flex absolute inset-0 transition-all duration-300 ease-out',
            {
              'opacity-0': !isCover,
            }
          )}
        >
          {/* Left Text */}
          <p className='text-cblue absolute top-0 left-0 w-64 text-justify md:relative'>
            Calling for speakers! Elephant in the room. TEDxITS @2022
          </p>
          {/* Image Section */}
          <div className='relative w-full'>
            <img
              src='/images/cfs/draw-eye.png'
              alt=''
              className='animate-[float_4s_ease-in-out_infinite] absolute top-0 left-0 w-1/4'
            />
            <img
              src='/images/cfs/draw-lips.png'
              alt=''
              className='6s animate-[float_3s_ease-in-out_infinite] absolute right-0 bottom-1/3 w-1/4'
            />
            <img
              src='/images/cfs/draw-ear.png'
              alt=''
              className='animate-[float_2s_ease-in-out_infinite] absolute bottom-0 left-0 w-1/4'
            />
          </div>
          {/* RIght Text */}
          <div className='text text-cblue flex absolute right-0 bottom-0 flex-col gap-1 mt-auto w-64 text-right opacity-30 md:relative md:text-left md:opacity-100'>
            <p>A guidebook, to guide you.</p>
            <p className='text-4xl'>@2022</p>
            <p>The Unseen of Great Importance.</p>
            <p>The Unspoken Taboo Words.</p>
            <p>The Unheard Voices.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
