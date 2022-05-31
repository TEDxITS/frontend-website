import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import * as React from 'react';
import { GoPlay } from 'react-icons/go';
import ReactPlayer from 'react-player';

import { setApiContext } from '@/lib/axios';
import clsxm from '@/lib/clsxm';

import {
  EventType,
  get_active_pre_event_1_data,
  get_pre_event_1_thumbnail_data,
  pre_event_1_part,
} from '@/data/event';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function PreEventsPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [eventState, setEventState] = React.useState<keyof typeof EventType>(
    pre_event_1_part[parseInt(data as unknown as string)]
  );

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
          className='flex flex-col gap-8 pt-8 relative z-20 md:pt-16'
        >
          <Header />

          <div className='grid overflow-hidden'>
            <div className='flex flex-wrap gap-y-8 items-center layout min-h-[calc(100vh-64px-64px)] pb-16 md:min-h-[calc(100vh-64px-96px)]'>
              <div
                className={clsxm(
                  ' min-h-[calc(100vh-64px-64px)] pr-0 md:min-h-0 md:pr-8 md:translate-y-0',
                  'duration-200 flex flex-col gap-y-10 justify-center transition-all w-full md:w-2/3',
                  animationTrigger ? 'opacity-0' : ' opacity-1'
                )}
              >
                <div className='flex gap-4 max-w-[80%] md:max-w-xs'>
                  <NextImage
                    width={287.63}
                    height={275.9}
                    src={get_active_pre_event_1_data(eventState).logo}
                    alt={`Elephant logo`}
                    className='drop-shadow-lg flex-shrink-0 w-16 md:w-20'
                  />
                  <p className='text-justify text-sm'>
                    {get_active_pre_event_1_data(eventState).logoText}
                  </p>
                </div>
                <div>
                  <h2 className='font-fivo'>
                    {get_active_pre_event_1_data(eventState).subTitle}
                  </h2>
                  <h1 className='font-bold font-fivo mt-2'>
                    {get_active_pre_event_1_data(eventState).title}
                  </h1>
                </div>
                <ArrowDown className='w-16' />
                <p className='text-lg'>
                  {get_active_pre_event_1_data(eventState).description}
                </p>
                <UnstyledLink
                  href='#watch'
                  className='cursor-pointer duration-200 ease flex gap-4 items-center origin-left select-none transition-all hover:animate-flicker hover:scale-105'
                >
                  <GoPlay size={40} />
                  <h2 className='font-fivo'>Watch Now</h2>
                </UnstyledLink>
              </div>
              {/* Thumbnail */}
              <div
                className={clsxm(
                  'duration-200 ease flex flex-col gap-4 transition-all w-full md:w-1/3 ',
                  animationTrigger
                    ? 'md:translate-x-1/2 opacity-0'
                    : 'md:translate-x-0 opacity-1'
                )}
              >
                <h2 className='block font-fivo mt-16 md:hidden'>
                  Explore another pre-events
                </h2>
                {get_pre_event_1_thumbnail_data(eventState).map(
                  ({ type, thumbnail }, key) => (
                    <UnstyledLink
                      href={thumbnail.url}
                      key={key}
                      className='duration-200 ease flex origin-top relative shadow-xl transition-all hover:-translate-y-2 hover:scale-105'
                      onClick={() => viewVideo(type)}
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
                        <GoPlay size={'16%'} />
                      </div>
                    </UnstyledLink>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
        <div className='absolute bg-cover bg-gradient-red bg-no-repeat drop-shadow-md inset-0 z-10'></div>
        <div
          className={clsxm(
            `absolute bg-fixed inset-0 bg-cover bg-no-repeat bg-center transition-all duration-200 ease`,
            animationTrigger ? 'opacity-0' : 'opacity-40'
          )}
          style={{
            backgroundImage: `url(${
              get_active_pre_event_1_data(eventState).backgroundImage
            })`,
          }}
        />
      </main>

      <main className='bg-clight bg-cover bg-no-repeat bg-paper flex flex-col items-center justify-center min-h-screen py-16 relative'>
        <div id='watch' className='border flex flex-col layout text-cdark z-10'>
          <div className='flex gap-4'>
            <NextImage
              width={287.63}
              height={275.9}
              src={get_active_pre_event_1_data(eventState).logo}
              alt={`Elephant logo`}
              className='flex-shrink-0 hidden w-16 md:block md:w-20'
            />
            <div className='border-cdark border-l pl-4'>
              <p className='text-lg'>
                {get_active_pre_event_1_data(eventState).thumbnail.subTitle}
              </p>
              <p className='font-bold leading-none mt-4 text-xl'>
                {get_active_pre_event_1_data(eventState).thumbnail.title}
              </p>
              <p className='leading-none mt-1'>
                {get_active_pre_event_1_data(eventState).thumbnail.description}
              </p>
            </div>
          </div>

          <div className='aspect-h-9 aspect-w-16 bg-cdark mt-8 overflow-hidden rounded-2xl z-10 md:rounded-3xl'>
            <ReactPlayer
              url={get_active_pre_event_1_data(eventState).video}
              width={'100%'}
              height={'100%'}
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
          className='absolute bottom-0 right-0'
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

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  setApiContext(context);
  let part = context.query.part as unknown as number;

  if (!part || part > pre_event_1_part.length || part <= 0) {
    part = 1;
  }

  return {
    props: { data: part - 1 },
  };
};
