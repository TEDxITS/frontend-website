import * as React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { GoPlay } from 'react-icons/go';

import clsxm from '@/lib/clsxm';

import {
  get_pre_event_thumbnail_data,
  pre_event_cover_data,
  pre_event_curated_data,
  PreEventCuratedDataType,
} from '@/data/event';

import ArrowDownButton from '@/components/buttons/ArrowDownButton';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function IndexPage() {
  const [activeBackgroundState, setActiveBackgroundState] =
    React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveBackgroundState((active) =>
        active === pre_event_cover_data.length - 1 ? 0 : active + 1
      );
    }, 6000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Seo templateTitle='Pre-events' />

      <main className={clsxm(`relative flex flex-col`)}>
        <section className='flex relative z-30 flex-col gap-8 pt-8 md:pt-16'>
          <Header />
          <div className='layout min-h-[calc(100vh-64px-64px)] flex relative flex-wrap gap-y-8 items-center md:min-h-[calc(100vh-64px-96px)]'>
            <div
              className={clsxm(
                'min-h-[calc(100vh-64px-64px)] pr-0 md:min-h-0 md:translate-y-0',
                'flex flex-col gap-y-10 justify-center w-full transition-all duration-200'
              )}
            >
              <div className='flex flex-col gap-4 items-center w-full 2xl:gap-8'>
                <NextImage
                  alt=''
                  width={648}
                  height={333.11}
                  src='/images/pre-events/pre-events-text.svg'
                  className='w-full max-w-lg md:w-1/3 2xl:w-2/5'
                />
                <hr className='border-clight w-full' />
                <div className='flex flex-col gap-4 items-center mt-0 2xl:mt-8'>
                  <h4 className='font-bold'>Find out more!</h4>
                  <ArrowDownButton href='#explore' />
                </div>
              </div>
            </div>
            <div className='layout flex absolute bottom-8 gap-4 justify-center w-full 2xl:bottom-16'>
              {pre_event_cover_data.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setActiveBackgroundState(i)}
                  className={clsxm(
                    'w-3 h-3',
                    'bg-clight rounded-full transition-all duration-100 ease-in cursor-pointer hover:bg-clight/70',
                    i === activeBackgroundState ? 'opacity-100' : 'opacity-40'
                  )}
                ></div>
              ))}
            </div>
          </div>
        </section>
        <PopularSection />
        <BackgroundSection active={activeBackgroundState} />
      </main>
      <main
        className='bg-clight bg-paper relative pt-16 pb-16 bg-no-repeat bg-cover md:pt-32'
        id='explore'
      >
        <div className='layout flex flex-col gap-16 items-start pt-32 lg:flex-row'>
          <div className='text-cdark flex top-32 flex-col gap-8 lg:sticky lg:w-1/3'>
            <h1 className='font-fivo text-cdark block font-bold lg:hidden'>
              Our Curated List of Pre-events
            </h1>
            <h2 className='font-fivo text-cdark hidden font-bold lg:block'>
              Our Curated List of Pre-events
            </h2>
            <p className='leading-tight text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              fermentum efficitur tellus, interdum dapibus diam viverra
              scelerisque. Nullam ultrices, augue vitae feugiat pellentesque,
              dolor neque dictum quam, in blandit justo massa ut quam. Sed sit
              amet nisi ac sem maximus eleifend vel at velit. Integer vestibulum
              nibh nec tellus accumsan, blandit pellentesque sapien elementum.
            </p>
          </div>

          <div className='border-cdark flex flex-col w-full min-h-screen'>
            {pre_event_curated_data.map((data, i) => (
              <PreEventCard data={data} key={i} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

function PopularSection() {
  const popularRef = React.useRef<HTMLDivElement>();

  const scrollRight = () => {
    const element = popularRef?.current;
    const current = element?.getBoundingClientRect().right;
    element?.scrollTo({
      left: current as number,
      behavior: 'smooth',
    });
  };

  const scrollLeft = () => {
    const element = popularRef?.current;
    const current = element?.getBoundingClientRect().left;
    element?.scrollTo({
      left: current as number,
      behavior: 'smooth',
    });
  };

  return (
    <section className='flex relative z-30 flex-col gap-2 -mb-32'>
      <div className='layout stickt flex relative left-0 z-20 gap-8 justify-between pt-8 md:pt-16'>
        <h2 className='font-fivo font-bold'>Popular</h2>
        <div className='hidden gap-4 lg:block'>
          <button onClick={scrollLeft}>
            <AiOutlineArrowLeft
              className={clsxm('text-clight hover:text-clight/70')}
              size={32}
            />
          </button>
          <button onClick={scrollRight}>
            <AiOutlineArrowRight
              className={clsxm('text-clight hover:text-clight/70')}
              size={32}
            />
          </button>
        </div>
      </div>
      <div
        className='hidden-scrollbar snap-x overflow-x-scroll mt-2 md:snap-none md:mt-6'
        ref={popularRef as React.MutableRefObject<HTMLDivElement>}
      >
        <div className='layout flex relative gap-8'>
          {get_pre_event_thumbnail_data().map((thumbnail, i) => (
            <UnstyledLink
              href={thumbnail.url}
              key={i}
              className='ease min-w-[calc(100%-1rem)] snap-center flex relative w-full shadow-xl transition-all duration-200 origin-top md:min-w-[calc((100%/2))] lg:min-w-[calc((100%/4))] hover:brightness-50'
            >
              <NextImage
                width={328}
                height={189}
                src={thumbnail.backgroundImage}
                alt={`Elephant logo`}
                className='overflow-hidden w-full rounded-md'
                useSkeleton
              />
              <div className='flex absolute bottom-0 gap-4 items-end p-4 w-full'>
                <div className='user w-full select-none'>
                  <p className='text-sm'>{thumbnail.subTitle}</p>
                  <p className='mt-4 text-base font-bold leading-none'>
                    {thumbnail.title}
                  </p>
                  <p className='mt-1 text-xs leading-none'>
                    {thumbnail.description}
                  </p>
                </div>
                <GoPlay size={'10%'} />
              </div>
            </UnstyledLink>
          ))}
          <div className='min-w-[calc(100%-1rem)] snap-center w-full opacity-0 pointer-events-none md:min-w-[calc(100%/2)] lg:min-w-[calc((100%/4))]'></div>
        </div>
      </div>
    </section>
  );
}

function BackgroundSection({ active }: { active: number }) {
  return (
    <>
      {' '}
      <div className='bg-gradient-red absolute inset-0 z-20 bg-no-repeat bg-cover drop-shadow-md pointer-events-none'></div>
      <div
        className={clsxm(
          `absolute bg-fixed inset-0 bg-cover opacity-40 bg-no-repeat bg-center transition-all duration-500 ease-in pointer-events-none z-10`
        )}
        style={{
          backgroundImage: `url(${pre_event_cover_data[active]})`,
        }}
      />
      <div className='overflow-hidden absolute inset-0 pointer-events-none'>
        <NextImage
          src='https://res.cloudinary.com/tedxits/image/upload/v1653998320/event/lup_qzefqt.png'
          width={1080}
          height={688}
          alt='lup'
          className='absolute -right-1/3 bottom-1/4 w-full rotate-12 md:right-0 md:bottom-32 md:w-1/2 md:translate-x-32'
        />
      </div>
    </>
  );
}

function PreEventCard({ data }: { data: PreEventCuratedDataType }) {
  return (
    <div className='text-cdark flex relative flex-col'>
      <div className='max-w-[80%] flex gap-4 items-center md:max-w-[30%]'>
        <NextImage
          width={287.63}
          height={275.9}
          src={data.logo}
          alt={`Elephant logo`}
          className='flex-shrink-0 w-16 drop-shadow-md md:w-20'
        />
        <p className='text-sm text-justify'>{data.logoText}</p>
      </div>
      <div className='border-cdark relative pl-8 my-8 ml-8 border-l'>
        <div
          className='aspect-h-16 aspect-w-16 overflow-hidden relative h-full bg-center bg-no-repeat bg-cover rounded-md drop-shadow-md md:aspect-h-4'
          style={{
            backgroundImage: `url(${data.backgroundImage})`,
          }}
        >
          <UnstyledLink
            href={data.url}
            className={clsxm(
              'bg-cdark/30 bg-gradient-red bg-bottom bg-no-repeat bg-cover backdrop-blur-sm md:backdrop-blur-none',
              'absolute inset-0 z-10 w-full h-full',
              'flex justify-between',
              'ease transition-all duration-300 cursor-pointer',
              'p-8 hover:bg-cdark/50 hover:backdrop-blur-sm'
            )}
          >
            <div className='flex flex-col justify-center'>
              <h3 className='font-fivo'>{data.subTitle}</h3>
              <h2 className='font-fivo mt-2 font-bold'>{data.title}</h2>
            </div>
            <div className='flex items-end'>
              <ArrowLink className='font-fivo text-clight' href={data.url}>
                More
              </ArrowLink>
            </div>
          </UnstyledLink>
        </div>
      </div>
    </div>
  );
}
