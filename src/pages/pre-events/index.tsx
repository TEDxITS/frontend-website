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
        <section className='flex flex-col gap-8 pt-8 relative z-30 md:pt-16'>
          <Header />
          <div className='flex flex-wrap gap-y-8 items-center layout min-h-[calc(100vh-64px-64px)] relative md:min-h-[calc(100vh-64px-96px)]'>
            <div
              className={clsxm(
                'min-h-[calc(100vh-64px-64px)] pr-0 md:min-h-0 md:translate-y-0',
                'duration-200 flex flex-col gap-y-10 justify-center transition-all w-full'
              )}
            >
              <div className='flex flex-col gap-4 items-center w-full 2xl:gap-8'>
                <NextImage
                  alt=''
                  width={648}
                  height={333.11}
                  src='/images/pre-events/pre-events-text.svg'
                  className='max-w-lg w-full md:w-1/3 2xl:w-2/5'
                />
                <hr className='border-clight w-full' />
                <div className='flex flex-col gap-4 items-center mt-0 2xl:mt-8'>
                  <h4 className='font-bold'>Find out more!</h4>
                  <ArrowDownButton href='#explore' />
                </div>
              </div>
            </div>
            <div className='absolute bottom-8 flex gap-4 justify-center layout w-full 2xl:bottom-16'>
              {pre_event_cover_data.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setActiveBackgroundState(i)}
                  className={clsxm(
                    'h-3 w-3',
                    'bg-clight cursor-pointer duration-100 ease-in rounded-full transition-all hover:bg-clight/70',
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
        className='bg-clight bg-cover bg-no-repeat bg-paper pb-16 pt-16 relative md:pt-32'
        id='explore'
      >
        <div className='flex flex-col gap-16 items-start layout pt-32 lg:flex-row'>
          <div className='flex flex-col gap-8 text-cdark top-32 lg:sticky lg:w-1/3'>
            <h1 className='block font-bold font-fivo text-cdark lg:hidden'>
              Our Curated List of Pre-events
            </h1>
            <h2 className='font-bold font-fivo hidden text-cdark lg:block'>
              Our Curated List of Pre-events
            </h2>
            <p className='leading-tight text-justify'>
              Wouldn’t we attract the right things to our lives if we had the
              eagerness to see, the will to listen, and the courage to speak
              about them? <br />
              The 3 series of Pre-Event each represent their unique elephant
              with each mission.
            </p>
            <ul className='leading-tight text-justify'>
              <li>
                <p>
                  1. <b>Black Elephant:</b> Speak the unspoken taboo words
                </p>
              </li>
              <li>
                <p>
                  2. <b>Red Elephant:</b> See the unseen of great importance
                </p>
              </li>
              <li>
                <p>
                  3. <b>White Elephant:</b> Listen to the unheard voices
                </p>
              </li>
            </ul>
            <hr className='border-cdark block w-full md:hidden' />
            <p className='leading-tight text-justify'>
              Take a look at the series of Pre-Events and let&apos;s perceive
              the elephant in the room!
            </p>
          </div>

          <div className='border-cdark flex flex-col min-h-screen w-full'>
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
    <section className='-mb-32 flex flex-col gap-2 relative z-30'>
      <div className='flex gap-8 justify-between layout left-0 pt-8 relative stickt z-20 md:pt-16'>
        <h2 className='font-bold font-fivo'>Popular</h2>
        <div className='gap-4 hidden lg:block'>
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
        className='hidden-scrollbar mt-2 overflow-x-scroll snap-x md:mt-6 md:snap-none'
        ref={popularRef as React.MutableRefObject<HTMLDivElement>}
      >
        <div className='flex gap-8 layout relative'>
          {get_pre_event_thumbnail_data().map((thumbnail, i) => (
            <UnstyledLink
              href={thumbnail.url}
              key={i}
              className='duration-200 ease flex min-w-[calc(100%-1rem)] origin-top relative shadow-xl snap-center transition-all w-full md:min-w-[calc((100%/2))] lg:min-w-[calc((100%/4))] hover:brightness-50'
            >
              <NextImage
                width={328}
                height={189}
                src={thumbnail.backgroundImage}
                alt={`Elephant logo`}
                className='overflow-hidden rounded-md w-full'
                useSkeleton
              />
              <div className='absolute bottom-0 flex gap-4 items-end p-4 w-full'>
                <div className='select-none user w-full'>
                  <p className='text-sm'>{thumbnail.subTitle}</p>
                  <p className='font-bold leading-none mt-4 text-base'>
                    {thumbnail.title}
                  </p>
                  <p className='leading-none mt-1 text-xs'>
                    {thumbnail.description}
                  </p>
                </div>
                <GoPlay size={'10%'} />
              </div>
            </UnstyledLink>
          ))}
          <div className='min-w-[calc(100%-1rem)] opacity-0 pointer-events-none snap-center w-full md:min-w-[calc(100%/2)] lg:min-w-[calc((100%/4))]'></div>
        </div>
      </div>
    </section>
  );
}

function BackgroundSection({ active }: { active: number }) {
  return (
    <>
      {' '}
      <div className='absolute bg-cover bg-gradient-red bg-no-repeat drop-shadow-md inset-0 pointer-events-none z-20'></div>
      <div
        className={clsxm(
          `absolute bg-fixed inset-0 bg-cover opacity-40 bg-no-repeat bg-center transition-all duration-500 ease-in pointer-events-none z-10`
        )}
        style={{
          backgroundImage: `url(${pre_event_cover_data[active]})`,
        }}
      />
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <NextImage
          src='https://res.cloudinary.com/tedxits/image/upload/v1653998320/event/lup_qzefqt.png'
          width={1080}
          height={688}
          alt='lup'
          className='-right-1/3 absolute bottom-1/4 rotate-12 w-full md:bottom-32 md:right-0 md:translate-x-32 md:w-1/2'
        />
      </div>
    </>
  );
}

function PreEventCard({ data }: { data: PreEventCuratedDataType }) {
  return (
    <div className='flex flex-col relative text-cdark'>
      <div className='flex gap-4 items-center max-w-[80%] md:max-w-[30%]'>
        <NextImage
          width={287.63}
          height={275.9}
          src={data.logo}
          alt={`Elephant logo`}
          className='drop-shadow-md flex-shrink-0 w-16 md:w-20'
        />
        <p className='text-justify text-sm'>{data.logoText}</p>
      </div>
      <div className='border-cdark border-l ml-8 my-8 pl-8 relative'>
        <div
          className='aspect-h-16 aspect-w-16 bg-center bg-cover bg-no-repeat drop-shadow-md h-full overflow-hidden relative rounded-md md:aspect-h-4'
          style={{
            backgroundImage: `url(${data.backgroundImage})`,
          }}
        >
          <UnstyledLink
            href={data.url}
            className={clsxm(
              'backdrop-blur-sm bg-bottom bg-cdark/30 bg-cover bg-gradient-red bg-no-repeat md:backdrop-blur-none',
              'absolute h-full inset-0 w-full z-10',
              'flex justify-between',
              'cursor-pointer duration-300 ease transition-all',
              'p-8 hover:backdrop-blur-sm hover:bg-cdark/50'
            )}
          >
            <div className='flex flex-col justify-center'>
              <h3 className='font-fivo'>{data.subTitle}</h3>
              <h2 className='font-bold font-fivo mt-2'>{data.title}</h2>
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
