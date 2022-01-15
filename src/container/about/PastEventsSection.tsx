import React from 'react';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';

import AboutDivider1 from '@/assets/svg/AboutDivider1';
import AboutDivider2 from '@/assets/svg/AboutDivider2';

export default function PastEventsSection() {
  return (
    <div className='flex flex-col min-h-screen text-center'>
      <ul className='font-fivo flex relative flex-col gap-8'>
        <li className='layout flex flex-col mt-32 mb-8 md:mt-80'>
          <h1 className='font-fivo text-cdark tracking-wide'>
            PA<span className='font-sympath font-normal'>S</span>T{' '}
            <span className='font-sympath font-normal'>E</span>VE
            <span className='font-sympath font-normal'>NT</span>S
          </h1>
          <h4 className='font-fivo text-cdark relative z-10 pt-8 mb-3'>
            “Castle of Your Own”
            <NextImage
              className='absolute top-0 left-1/2 -translate-x-1/2 translate-y-4 sm:translate-y-2'
              src='/images/Asset 4.svg'
              alt=''
              width={285}
              height={71}
            />
          </h4>
        </li>
        {/* Event 01 */}
        <li className='layout flex flex-col gap-y-8 gap-x-12 md:flex-row'>
          <div className='bg-blob h-[47rem] rotate-[120deg] w-[50rem] absolute -left-80 bg-no-repeat transform -translate-y-32'></div>
          <NextImage
            src='/images/socialExperiment.jpg'
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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullam- corper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et ac.
            </p>
            <div className='mt-auto ml-auto'>
              <Button className='mt-8 ml-auto'>Watch Recap</Button>
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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullam- corper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et ac.
            </p>
            <div className='mt-auto'>
              <Button className='mt-8'>Watch Recap</Button>
            </div>
          </div>
          <NextImage
            src='/images/guidingYourPassion.jpg'
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
            src='/images/spaceOfMind.jpg'
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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullam- corper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et ac.
            </p>
            <div className='mt-auto ml-auto'>
              <Button className='mt-8 ml-auto'>Watch Recap</Button>
            </div>
          </div>
        </li>
        {/* Video */}
        <li className='layout'>
          <div className='mt-36'>
            <div className='-rotate-[45deg] bg-blob h-[47rem] w-[50rem] absolute -right-96 bg-no-repeat transform -translate-y-72'></div>
            <h1 className='font-fivo font-outline-900-sm text-cdark tracking-wide md:font-outline-900-md'>
              “Castle of Your Own”
            </h1>
            <div className='flex flex-col mt-9 mb-16'>
              <p className='bg-cgreen flex z-10 justify-center items-center h-96 rounded-3xl'>
                placeholder for videos
              </p>
              <div className='bg-blob h-[47rem] w-[50rem] absolute -left-48 -bottom-64 bg-no-repeat transform'></div>
              <p className='z-10 mt-16 text-justify'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum
                dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}