import * as React from 'react';
import { GoPlay } from 'react-icons/go';
import ReactPlayer from 'react-player';

import clsxm from '@/lib/clsxm';

import { EventType, getEventData, getThumbnailData } from '@/data/event';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function PreEventsPage() {
  const [eventState, setEventState] =
    React.useState<keyof typeof EventType>('pre-event-2');

  const [animationTrigger, setAnimationTrigger] =
    React.useState<boolean>(false);

  const viewVideo = (type: keyof typeof EventType) => {
    setAnimationTrigger(true);
    setTimeout(() => {
      setEventState(type);
    }, 200);
    setTimeout(() => {
      setAnimationTrigger(false);
    }, 500);
  };
  return (
    <Layout>
      <Seo templateTitle='Pre-events' />

      <main className={clsxm(` relative flex flex-col`)}>
        <section
          id='explore'
          className='flex relative z-20 flex-col gap-8 pt-8 md:pt-16'
        >
          <Header />
          <div className='grid overflow-hidden'>
            <div className='layout min-h-[calc(100vh-64px-64px)] flex flex-wrap gap-y-8 items-center pb-16 md:min-h-[calc(100vh-64px-96px)]'>
              <div
                className={clsxm(
                  ' min-h-[calc(100vh-64px-64px)] pr-0 md:pr-8 md:min-h-0 md:translate-y-0',
                  'flex flex-col gap-y-10 justify-center w-full transition-all duration-200 md:w-2/3',
                  animationTrigger ? 'opacity-0' : ' opacity-1'
                )}
              >
                <div className='max-w-[80%] flex gap-4 md:max-w-xs'>
                  <NextImage
                    width={287.63}
                    height={275.9}
                    src={getEventData(eventState).logo}
                    alt={`Elephant logo`}
                    className='flex-shrink-0 w-16 drop-shadow-lg md:w-20'
                  />
                  <p className='text-sm text-justify'>
                    {getEventData(eventState).logoText}
                  </p>
                </div>
                <div>
                  <h2 className='font-fivo'>
                    {getEventData(eventState).subTitle}
                  </h2>
                  <h1 className='font-fivo mt-2 font-bold'>
                    {getEventData(eventState).title}
                  </h1>
                </div>
                <ArrowDown className='w-16' />
                <p className='text-lg'>
                  {getEventData(eventState).description}
                </p>
                <UnstyledLink
                  href='#watch'
                  className='ease flex gap-4 items-center transition-all duration-200 origin-left cursor-pointer select-none hover:animate-flicker hover:scale-105'
                >
                  <GoPlay size={40} />
                  <h2 className='font-fivo'>Watch Now</h2>
                </UnstyledLink>
              </div>
              {/* Thumbnail */}
              <div
                className={clsxm(
                  'ease flex flex-col gap-4 w-full transition-all duration-200 md:w-1/3 ',
                  animationTrigger
                    ? 'md:translate-x-1/2 opacity-0'
                    : 'md:translate-x-0 opacity-1'
                )}
              >
                <h2 className='font-fivo block mt-16 md:hidden'>
                  Explore another pre-events
                </h2>
                {getThumbnailData(eventState).map(
                  ({ type, thumbnail }, key) => (
                    <UnstyledLink
                      href='#explore'
                      key={key}
                      className='ease flex relative shadow-xl transition-all duration-200 origin-top hover:scale-105 hover:-translate-y-2'
                      onClick={() => viewVideo(type)}
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
                        <GoPlay size={'16%'} />
                      </div>
                    </UnstyledLink>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
        <div className='bg-gradient-red absolute inset-0 z-10 bg-no-repeat bg-cover drop-shadow-md'></div>
        <div
          className={clsxm(
            `absolute bg-fixed inset-0 bg-cover bg-no-repeat bg-center transition-all duration-200 ease`,
            animationTrigger ? 'opacity-0' : 'opacity-40'
          )}
          style={{
            backgroundImage: `url(${getEventData(eventState).backgroundImage})`,
          }}
        />
      </main>

      <main className='bg-clight bg-paper flex relative flex-col justify-center items-center py-16 min-h-screen bg-no-repeat bg-cover'>
        <div id='watch' className='layout text-cdark flex z-10 flex-col border'>
          <div className='flex gap-4'>
            <NextImage
              width={287.63}
              height={275.9}
              src={getEventData(eventState).logo}
              alt={`Elephant logo`}
              className='hidden flex-shrink-0 w-16 md:block md:w-20'
            />
            <div className='border-cdark pl-4 border-l'>
              <p className='text-lg'>
                {getEventData(eventState).thumbnail.subTitle}
              </p>
              <p className='mt-4 text-xl font-bold leading-none'>
                {getEventData(eventState).thumbnail.title}
              </p>
              <p className='mt-1 leading-none'>
                {getEventData(eventState).thumbnail.description}
              </p>
            </div>
          </div>

          <div className='aspect-h-9 aspect-w-16 bg-cdark overflow-hidden z-10 mt-8 rounded-2xl md:rounded-3xl'>
            <ReactPlayer
              url={getEventData(eventState).video}
              width={'100%'}
              height={'100%'}
              muted={true}
              controls={true}
            />
          </div>
        </div>
        <NextImage
          src='/images/meet-the-team/foot-transparent.png'
          width={489}
          height={489}
          alt='bg'
          priority={true}
          className='absolute right-0 bottom-0'
        />
      </main>
    </Layout>
  );
}

function ArrowDown({ ...rest }: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 33.71 33.64'
      {...rest}
    >
      <path
        d='m943.33 525.86 3.16-3.16 26.35 26.36-.06-21.72H977l-.06 29H948v-4.13h21.78Z'
        transform='translate(-943.33 -522.7)'
        style={{
          fill: '#f0eeeb',
        }}
      />
    </svg>
  );
}
