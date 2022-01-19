import React from 'react';
import ReactPlayer from 'react-player';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';

import AboutDivider1 from '@/assets/svg/AboutDivider1';
import AboutDivider2 from '@/assets/svg/AboutDivider2';

import VideoModal from '../modal/VideoModal';

export default function PastEventsSection() {
  const [isVideoOpen, setIsVideoOpen] = React.useState<boolean>(false);
  const [videoUrl, setVideoUrl] = React.useState<string>('');
  const openVideo = (url: string) => {
    setVideoUrl(url);
    setIsVideoOpen(true);
  };
  return (
    <div className='flex flex-col min-h-screen text-center'>
      <VideoModal
        url={videoUrl}
        isOpen={isVideoOpen}
        setIsOpen={setIsVideoOpen}
      />
      <ul className='font-fivo flex relative flex-col gap-8'>
        <li className='layout flex flex-col mt-32 mb-8 md:mt-80'>
          <h1 className='font-fivo text-cdark font-bold tracking-wide'>
            PA<span className='font-sympath font-normal'>S</span>T{' '}
            <span className='font-sympath font-normal'>E</span>VE
            <span className='font-sympath font-normal'>NT</span>S
          </h1>
          <div className='flex relative flex-col pt-8 mb-3'>
            <h4 className='font-fivo text-cdark z-10 font-medium'>
              “Castle of Your Own”
            </h4>
            <NextImage
              className='absolute top-0 left-1/2 -translate-x-1/2 translate-y-4 sm:translate-y-2'
              src='/images/Asset 4.svg'
              alt=''
              width={285}
              height={71}
            />
          </div>
          <p className='z-10 mt-8 text-justify md:mt-8'>
            “Castle of your own” as the grand theme of TEDxITS 2021 brought the
            most talked-about issue especially for youth regarding
            self-development. Amid COVID-19 where the information is rushed,
            youth are being easily disrupted. This theme implied being
            successful in reaching the point of having control of your state,
            generating excellence in your space, and hence gaining the ability
            to give a positive impact to others.
          </p>
        </li>
        {/* Event 01 */}
        <li className='layout flex flex-col gap-y-8 gap-x-12 md:flex-row'>
          <div className='bg-blob h-[47rem] rotate-[120deg] w-[50rem] absolute -left-80 bg-no-repeat transform -translate-y-32'></div>
          <NextImage
            src='/images/socialExperiment.png'
            alt=''
            width='100%'
            height={102}
            layout='responsive'
            objectFit='cover'
            useSkeleton={true}
            className='h-fit overflow-hidden mx-auto w-full max-w-sm rounded-2xl md:mx-0'
          />
          <div className='flex z-10 flex-col w-full text-left'>
            <h2 className='font-bold text-primary-500'>Social Experiment</h2>
            <p className='mt-8 text-justify md:mt-8'>
              This is where two strangers met and sat face to face talking about
              how much they are aware of themselves! Not only do they talk deep,
              but games are also played to spark laughter.
            </p>
            <div className='mt-auto ml-auto'>
              <Button
                className='mt-8 ml-auto'
                onClick={() => openVideo('https://youtu.be/fNVcSQ3AR6k')}
              >
                Watch Recap
              </Button>
            </div>
          </div>
        </li>
        <AboutDivider1 className='my-4 w-full' />
        {/* Event 02 */}
        <li className='layout flex flex-col-reverse gap-y-8 gap-x-12 md:flex-row'>
          <div className='-rotate-[140deg] bg-blob h-[47rem] w-[50rem] absolute -right-80 bg-no-repeat transform -translate-y-56'></div>
          <div className='flex z-10 flex-col w-full text-left'>
            <h2 className='font-outline-900-sm mb-2.5 font-bold text-primary-500 md:font-outline-900-md'>
              “Guiding Your Passion to Find Your True Self”
            </h2>
            <h4 className='font-normal text-primary-500'>with Tita Oxa A.</h4>
            <p className='mt-8 text-justify md:mt-8'>
              Tita Oxa Anggrea as the stereotype breaker succeeds in being a
              dashing student, excelling in academics and the catwalk stage.
              Through instagram live, Tita guides the audience and shares tips
              on how to find our true selves.
            </p>
            <div className='mt-auto'>
              <Button
                className='mt-8'
                onClick={() => openVideo('https://youtu.be/BP5XF-Q4edI')}
              >
                Watch Recap
              </Button>
            </div>
          </div>
          <NextImage
            src='/images/guidingYourPassion.png'
            alt=''
            width='100%'
            height={102}
            layout='responsive'
            objectFit='cover'
            useSkeleton={true}
            className='h-fit overflow-hidden mx-auto w-full max-w-sm rounded-2xl md:mx-0'
          />
        </li>
        <AboutDivider2 className='my-4 w-full' />
        {/* Event 03 */}
        <li className='layout flex flex-col gap-y-8 gap-x-12 md:flex-row'>
          <div className='bg-blob h-[47rem] rotate-[40deg] w-[50rem] absolute -left-48 bg-no-repeat transform -translate-y-20'></div>
          <NextImage
            src='/images/spaceOfMind.png'
            alt=''
            width='100%'
            height={102}
            layout='responsive'
            objectFit='cover'
            useSkeleton={true}
            className='h-fit overflow-hidden mx-auto w-full max-w-sm rounded-2xl md:mx-0'
          />
          <div className='flex z-10 flex-col w-full text-left'>
            <h2 className='font-bold text-primary-500'>
              {' '}
              Space of Mind : “Designing Your Castle”
            </h2>
            <h4 className='font-normal text-primary-500'>
              with Ibrahim Arsy, Florence Fedora, Radifan Athallah
            </h4>
            <p className='mt-8 text-justify md:mt-8'>
              After being self-aware, it’s time to step up the game by impacting
              the community. Three insightful speakers, Radifan Athallah Rizky,
              Florence Fedora, and Ibrahim Arsy were invited to share their
              experiences toward the impacts they have made.
            </p>
            <div className='mt-auto ml-auto'>
              <Button
                className='mt-8 ml-auto'
                onClick={() => openVideo('https://youtu.be/df2yfDGUdEI')}
              >
                Watch Recap
              </Button>
            </div>
          </div>
        </li>
        {/* Video */}
        <li className='layout'>
          <div className='flex flex-col mt-36'>
            <div className='-rotate-[45deg] bg-blob h-[47rem] w-[50rem] absolute -right-96 bg-no-repeat transform -translate-y-72'></div>
            <h1 className='font-fivo font-outline-900-sm text-cdark z-10 tracking-wide md:font-outline-900-md'>
              “Castle of Your Own”
            </h1>
            <div className='flex flex-col mt-9 mb-16'>
              <div className='aspect-h-9 aspect-w-16 bg-cdark overflow-hidden z-10 rounded-2xl md:rounded-3xl'>
                <ReactPlayer
                  url='https://youtu.be/uvtHzXPzydU'
                  width={'100%'}
                  height={'100%'}
                  controls={true}
                />
              </div>
              <div className='bg-blob h-[47rem] w-[50rem] absolute -left-48 -bottom-64 bg-no-repeat transform'></div>
              <p className='z-10 mt-16 text-justify'>
                Finally! The main event of TEDxITS 2021. This event successfully
                invited 5 professional passion shapers from various fields and 2
                student speaker to impact 80.000+ audiences and still growing!
                <br />
                <br />
                Now, the world is getting up! So, what’s next
                <span className='font-semibold'>
                  {' '}
                  Stay tuned for more exciting experience on TEDxITS 2022!{' '}
                </span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
