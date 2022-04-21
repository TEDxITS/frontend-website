import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import React from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

import RedSaleText from '@/assets/svg/RedSaleText';

export type TicketStateType = [boolean, boolean];
export default function CoverSection() {
  const [ticketState, setTicketState] = React.useState<TicketStateType>([
    false,
    false,
  ]);

  useScrollPosition(({ currPos }) => {
    if (!ticketState.every((item) => item === true)) {
      setTicketState((prevState) => [
        prevState[0] ? true : currPos.y < -25 ? true : false,
        prevState[1] ? true : currPos.y < -150 ? true : false,
      ]);
    }
  });
  return (
    <div className='flex flex-wrap w-full'>
      {/* early bird text */}
      <div
        className={clsxm(
          'duration-700 ease-in flex flex-col gap-y-4 origin-top-left transition-all w-full md:w-1/3',
          ticketState[0] ? 'md:scale-100' : 'md:scale-[300%]'
        )}
      >
        <NextImage
          width={346}
          height={107}
          src='/images/ticket/text-early-bird.svg'
          alt='Early Bird'
          className='w-full'
          priority={true}
        />
        <div className='relative w-full'>
          <NextImage
            src='https://res.cloudinary.com/tedxits/image/upload/v1650805104/images/ticket/image-ticket_a82grw.jpg'
            width={716}
            height={345}
            alt='Ticket'
            className='w-full'
            imgClassName='rounded-sm'
            useSkeleton
          />
          <NextImage
            src='/images/ticket/star-blue.svg'
            width={44.05}
            height={62.85}
            alt='Blue Star'
            className='-translate-y-1/2 absolute right-1/4 top-0 w-12'
          />
          <NextImage
            src='/images/ticket/star-red.svg'
            width={81.65}
            height={81.65}
            alt='Red Star'
            className='-left-2 absolute bottom-0 translate-y-1/2 w-1/4'
          />
        </div>
        <div className='grid grid-cols-2'>
          <NextImage
            width={180}
            height={64}
            src='/images/ticket/text-sale-blur.png'
            alt='Sale'
            priority={true}
            className='animate-[float_5s_ease-in-out_infinite] w-full'
          />
          <RedSaleText />
        </div>
      </div>
      {/* ticket photo */}
      <div className={clsxm(' flex flex-col items-center w-full md:w-2/3')}>
        <div className='animate-[float_5s_ease-in-out_infinite] w-full'>
          <NextImage
            src='/images/ticket/ticket.svg'
            width={711.71}
            height={288.83}
            alt='Blue Star'
            className={clsxm(
              'delay-700 duration-500 ease transition-all w-full',
              ticketState[0]
                ? 'opacity-1 translate-y-0 -rotate-3 translate-x-0 '
                : 'opacity-0 translate-y-full -rotate-45 translate-x-full'
            )}
          />
        </div>

        <div className='gap-x-2 grid grid-cols-3 ml-auto mt-4 w-1/3 md:translate-y-16'>
          <PhotoCard
            image='https://res.cloudinary.com/tedxits/image/upload/v1650805104/images/ticket/image-speak_z48qnp.jpg'
            alt='Speak'
            text='Speak your taboo'
            className={clsxm(
              'duration-300 ease transition-all',
              ticketState[1]
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
            )}
          />
          <PhotoCard
            image='https://res.cloudinary.com/tedxits/image/upload/v1650805104/images/ticket/image-listen_yzpr98.jpg'
            alt='Listen'
            text='Widen your ears to the truth'
            className={clsxm(
              'delay-300 duration-300 ease transition-all',
              ticketState[1]
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
            )}
          />
          <PhotoCard
            image='https://res.cloudinary.com/tedxits/image/upload/v1650805104/images/ticket/image-see_oberpd.jpg'
            alt='See'
            text="See what you've ignored"
            className={clsxm(
              'delay-700 duration-300 ease transition-all',
              ticketState[1]
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
            )}
          />
        </div>
      </div>
    </div>
  );
}

function PhotoCard({
  image,
  alt,
  text,
  className,
}: {
  image: string;
  alt: string;
  text: string;
  className?: string;
}) {
  return (
    <div className={clsxm('flex flex-col gap-2', className)}>
      <NextImage
        src={image}
        width={400}
        height={484}
        alt={alt}
        className='w-full'
        useSkeleton
      />
      <p className='text-[#8B8B8B] text-justify text-xs'>{text}</p>
    </div>
  );
}
