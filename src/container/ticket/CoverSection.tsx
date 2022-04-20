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
          'flex flex-col gap-y-4 w-full transition-all duration-700 ease-in origin-top-left md:w-1/3',
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
            src='/images/ticket/image-ticket.jpg'
            width={716}
            height={345}
            alt='Ticket'
            className='w-full'
            imgClassName='rounded-sm'
          />
          <NextImage
            src='/images/ticket/star-blue.svg'
            width={44.05}
            height={62.85}
            alt='Blue Star'
            className='absolute top-0 right-1/4 w-12 -translate-y-1/2'
          />
          <NextImage
            src='/images/ticket/star-red.svg'
            width={81.65}
            height={81.65}
            alt='Red Star'
            className='absolute bottom-0 -left-2 w-1/4 translate-y-1/2'
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
              'ease w-full transition-all duration-500 delay-700',
              ticketState[0]
                ? 'opacity-1 translate-y-0 -rotate-3 translate-x-0 '
                : 'opacity-0 translate-y-full -rotate-45 translate-x-full'
            )}
          />
        </div>

        <div className='grid grid-cols-3 gap-x-2 mt-4 ml-auto w-1/3 md:translate-y-16'>
          <PhotoCard
            image='/images/ticket/image-speak.jpg'
            alt='Speak'
            text='Speak your taboo'
            className={clsxm(
              'ease transition-all duration-300',
              ticketState[1]
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
            )}
          />
          <PhotoCard
            image='/images/ticket/image-listen.jpg'
            alt='Listen'
            text='Widen your ears to the truth'
            className={clsxm(
              'ease transition-all duration-300 delay-300',
              ticketState[1]
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
            )}
          />
          <PhotoCard
            image='/images/ticket/image-see.jpg'
            alt='See'
            text="See what you've ignored"
            className={clsxm(
              'ease transition-all duration-300 delay-700',
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
      />
      <p className='text-[#8B8B8B] text-xs text-justify'>{text}</p>
    </div>
  );
}
