import React from 'react';
import { Reveal, Tween } from 'react-gsap';
import { useSwipeable } from 'react-swipeable';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

//#region  //*=========== Data ===========
type CarouselDataType = {
  name: string;
  title: string;
  position: string;
  image: string;
  title_1: React.ReactChild;
  title_2: React.ReactChild;
  arrowClassName: string;
};

const CAROUSEL_DATA: CarouselDataType[] = [
  {
    name: 'Dea Safira',
    title: 'Women’s Right Fighter',
    position:
      "Women's Rights Activist, Author of the books 'Membunuh Hantu-Hantu Patriarki” and 'Sebelum Perempuan Bercinta",
    image:
      'https://res.cloudinary.com/tedxits/image/upload/v1657025815/merch/main-event/speaker-face/speaker-dea-01_eykylw_pygl1f.png',
    title_1: (
      <>
        Singing <b>harmony</b> to break the blockages of
      </>
    ),
    title_2: (
      <>
        <b>uncomfortable</b> matter yet important
      </>
    ),
    arrowClassName: 'md:left-[80%] md:top-[55%]',
  },
  {
    name: 'Aryo Seno Bagoskoro',
    title: 'Young Activist Pioneer',
    position:
      'Young Activist Pioneer of the Surabaya Student Movement and Founder of the Surabaya Student Alliance, UNAIR Political Science Student',
    image:
      'https://res.cloudinary.com/tedxits/image/upload/v1657025816/merch/main-event/speaker-face/speaker-aryo-01_dymakp_vz8ada.png',
    title_1: (
      <>
        Singing <b>harmony</b> to break the blockages of
      </>
    ),
    title_2: (
      <>
        <b>uncomfortable</b> matter yet important
      </>
    ),
    arrowClassName: 'md:left-[80%] md:top-[50%]',
  },
  {
    name: 'Permata Adinda',
    title: 'News Harbinger',
    position: 'Journalist at Project Multatuli',
    image:
      'https://res.cloudinary.com/tedxits/image/upload/v1657025811/merch/main-event/speaker-face/speaker-permata-01_mk5idr_xa00ay.png',
    title_1: (
      <>
        <b>Listening</b> to the <b>silent</b> words
      </>
    ),
    title_2: (
      <>
        so no messeges are left <b>undelivered</b>
      </>
    ),
    arrowClassName: 'md:left-[80%] md:top-[55%]',
  },
  {
    name: 'Lady Noor Chita',
    title: 'Social Impact Soldier',
    position: 'Co-Founder of Ibunda.id',
    image:
      'https://res.cloudinary.com/tedxits/image/upload/v1657025816/merch/main-event/speaker-face/speaker-lady-01_lgxjfw_kmjqpt.png',
    title_1: (
      <>
        <b>Listening</b> to the <b>silent</b> words
      </>
    ),
    title_2: (
      <>
        so no messeges are left <b>undelivered</b>
      </>
    ),
    arrowClassName: 'md:left-[80%] md:top-[40%]',
  },
  {
    name: 'Gandhi Surya Buana',
    title: 'Home of The Heart Outpouring',
    position: 'Founder @rumahsandyakala',
    image:
      'https://res.cloudinary.com/tedxits/image/upload/v1657025812/merch/main-event/speaker-face/speaker-gandhi-01_z4ydqg_bu2ka4.png',
    title_1: (
      <>
        <b>Listening</b> to the <b>silent</b> words
      </>
    ),
    title_2: (
      <>
        so no messeges are left <b>undelivered</b>
      </>
    ),
    arrowClassName: 'md:left-[80%] md:top-[45%]',
  },
  {
    name: 'Syifa Alina',
    title: 'Digital Devotee',
    position: 'Digital Enthusiast, ITS Information Systems Student',
    image:
      'https://res.cloudinary.com/tedxits/image/upload/v1657025810/merch/main-event/speaker-face/speaker-syifa-01_lsm8ny_plouwf.png',
    title_1: (
      <>
        Avoiding the danger of <b>ignorance</b>
      </>
    ),
    title_2: (
      <>
        on the <b>apparent</b> problems
      </>
    ),
    arrowClassName: 'md:left-[80%] md:top-[50%]',
  },
  {
    name: 'Dedhy Trunoyudho',
    title: 'Food Guardian',
    position: 'Founder Garda Pangan',
    image:
      'https://res.cloudinary.com/tedxits/image/upload/v1657025813/merch/main-event/speaker-face/speaker-dedhy-01_evrmga_tkbd4m.png',
    title_1: (
      <>
        Avoiding the danger of <b>ignorance</b>
      </>
    ),
    title_2: (
      <>
        on the <b>apparent</b> problems
      </>
    ),
    arrowClassName: 'md:left-[80%] md:top-[55%]',
  },
  {
    name: 'Herdayanto Sulistyo Putro',
    title: 'Sustainable Eco Sorcerer',
    position:
      'Social Engineering Coordinator of ITS Smart Eco Campus Development Unit, ITS Lecturer ',
    image:
      'https://res.cloudinary.com/tedxits/image/upload/v1657025816/merch/main-event/speaker-face/speaker-herdayanto-01_rr8b0n_hipjmi.png',
    title_1: (
      <>
        Avoiding the danger of <b>ignorance</b>
      </>
    ),
    title_2: (
      <>
        on the <b>apparent</b> problems
      </>
    ),
    arrowClassName: 'md:left-[80%] md:top-[50%]',
  },
];
//#endregion  //*======== Data ===========

export default function SpeakersCarouselSection() {
  const [active, setActive] = React.useState<number>(0);

  const updateActive = async (id: number) => {
    setActive(id);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      updateActive(active >= CAROUSEL_DATA.length - 1 ? 0 : active + 1),
    onSwipedRight: () =>
      updateActive(active <= 0 ? CAROUSEL_DATA.length - 1 : active - 1),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <Reveal trigger={<div className='grid py-8 min-h-screen md:py-16' />}>
      <div
        className='cursor-grab layout text-cdark flex relative justify-center h-full'
        {...handlers}
      >
        <div className='flex z-20 flex-col justify-between w-full'>
          <div className='flex justify-between w-full'>
            <div>
              <NextImage
                width={223}
                height={60}
                alt='Elephant In The Room'
                className='w-[10rem]'
                src='https://res.cloudinary.com/tedxits/image/upload/v1656597109/merch/main-event/speaker-section/elephant-text_xn3fy9.svg'
              />
              <p className='font-fivo text-[10px] mt-8 leading-none select-none md:max-w-[8rem]'>
                A major problem or controversial issue that is obviously present
                but avoided as a subject for discussion because it is more
                comfortable to do so.
              </p>
            </div>
            <div>
              <NextImage
                width={26}
                height={25}
                alt='Elephant'
                className='w-6'
                src='https://res.cloudinary.com/tedxits/image/upload/v1656597179/merch/main-event/speaker-section/elephant-logo_d1jelj.svg'
              />
            </div>
          </div>

          <div className='flex justify-between'>
            <div className='flex gap-4'>
              <Tween
                from={{
                  y: '-50px',
                  opacity: 0,
                }}
                to={{
                  y: 0,
                  opacity: 1,
                }}
                duration={0.5}
                stagger={0.2}
                ease='power2.out'
              >
                <div className='max-w-[7rem]'>
                  <p className='font-fivo text-[10px] leading-none select-none'>
                    {CAROUSEL_DATA[active].title_1}
                  </p>
                </div>
                <div className='max-w-[7rem]'>
                  <p className='font-fivo text-[10px] leading-none select-none'>
                    {CAROUSEL_DATA[active].title_2}
                  </p>
                </div>
              </Tween>
            </div>
            <p className='font-fivo max-w-[8rem] text-[10px] leading-none select-none'>
              Listen.See.Speak{' '}
            </p>
          </div>
        </div>
        <div className='flex absolute inset-0 justify-center items-center'>
          <div className='max-w-[calc(100vh-10rem)] relative w-full'>
            <Tween
              from={{
                opacity: 0,
              }}
              to={{
                opacity: 1,
              }}
              duration={0.2}
              stagger={0}
              ease='power2.out'
            >
              <div>
                {CAROUSEL_DATA.map(({ image, name }, i) => (
                  <NextImage
                    key={i}
                    width={720}
                    height={760}
                    src={image}
                    alt={`Speakers ${name}`}
                    objectFit='contain'
                    className={clsxm(
                      'ease relative drop-shadow-lg transition-all -translate-y-8',
                      i === active ? 'opacity-100' : 'hidden opacity-0'
                    )}
                    useSkeleton
                  />
                ))}
              </div>
              <div
                className={clsxm(
                  'flex absolute gap-2 w-full',
                  'ease transition-all duration-300',
                  'bottom-0 left-0 translate-y-full md:translate-y-0',
                  CAROUSEL_DATA[active].arrowClassName
                )}
              >
                <NextImage
                  width={205}
                  height={21}
                  alt='Arrow'
                  className='hidden flex-shrink-0 md:block'
                  src='https://res.cloudinary.com/tedxits/image/upload/v1656597342/merch/main-event/speaker-section/arrow_rpunz0.svg'
                />
                <div
                  className={clsxm(
                    'w-full',
                    'ease transition-all duration-300'
                  )}
                >
                  <Tween
                    from={{
                      y: '50px',
                      opacity: 0,
                    }}
                    to={{
                      y: 0,
                      opacity: 1,
                    }}
                    duration={1}
                    stagger={0.2}
                    ease='power2.out'
                  >
                    <div>
                      <p className='font-bold leading-none'>
                        {CAROUSEL_DATA[active].name}
                      </p>
                    </div>
                    <div>
                      <p className='text-sm italic font-medium'>
                        {CAROUSEL_DATA[active].title}
                      </p>
                    </div>
                    <div>
                      <NextImage
                        src='https://res.cloudinary.com/tedxits/image/upload/v1656669327/merch/main-event/speaker-section/arrow-down_ex3weg.svg'
                        width={5}
                        height={5}
                        alt='arrow'
                        className='mt-1 w-2'
                      />
                    </div>
                    <div>
                      <p className='text-[10px] mt-1 leading-none md:max-w-[16rem] md:text-xs'>
                        {CAROUSEL_DATA[active].position}
                      </p>
                    </div>
                  </Tween>
                </div>
              </div>
            </Tween>
          </div>
        </div>
        <div className='flex absolute bottom-10 z-30 gap-2 justify-center md:bottom-0'>
          {[...Array(CAROUSEL_DATA.length)].map((_, i) => (
            <button
              key={i}
              onClick={() => updateActive(i)}
              className={clsxm(
                'border-cdark flex-shrink-0 w-3 h-3 rounded-full border cursor-pointer',
                'ease transition-all duration-150 ',

                active === i ? 'bg-cdark' : 'hover:bg-cdark/50'
              )}
            ></button>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
