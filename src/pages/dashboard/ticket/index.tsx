import * as React from 'react';

import ArrowDownButton from '@/components/buttons/ArrowDownButton';
import Button from '@/components/buttons/Button';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import CoverSection from '@/container/ticket/CoverSection';
import TicketingCard from '@/container/ticketing/TicketingCard';

import DrawTopRight from '@/assets/svg/DrawTopRight';

export default function TicketPage() {
  return (
    <Layout className='bg-[#EAEAE2]'>
      <Seo templateTitle='Ticket' />

      <main className='bg-blob-blue flex flex-col gap-16 bg-top bg-no-repeat bg-cover'>
        <section className='flex relative z-10 flex-col gap-8 pt-8 md:pt-16'>
          <Header isDark={true} />
          <div className='overflow-hidden w-full'>
            <div className='layout flex relative flex-col items-center'>
              <NextImage
                width={690}
                height={566}
                src='/images/ticket/blue-blob.png'
                alt='Blue Blob'
                className='absolute top-0 bottom-0'
              />
              <div className='layout flex z-20 flex-col justify-center items-center w-full md:mt-32'>
                <CoverSection />
              </div>
              <div className='max-w-[50%] flex relative z-10 justify-center my-16 w-full md:max-w-[18%] md:my-0'>
                <BookNowText className='w-full' />
                <DrawTopRight
                  className='absolute top-0 right-0 w-16 translate-x-full -translate-y-1/2'
                  drawStroke='#2F65E7'
                />
                <DrawTopRight
                  className='-scale-100 absolute bottom-0 left-0 w-16 -translate-x-full translate-y-1/2'
                  drawStroke='#2F65E7'
                />
              </div>
              <div className='flex z-10 flex-col items-center w-full'>
                <div className='relative'>
                  <ScrollDownText className='absolute -right-full -left-full' />
                  <ArrowDownButton
                    href='#book'
                    iconClassName='mt-[150%] text-cblue hover:border-cblue'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='flex overflow-hidden relative flex-col py-16'>
          <div className='layout flex z-10 flex-col items-center max-w-md'>
            <GrabTicketText className='w-1/2' />
            <p className='text-[#808080] flex flex-wrap mt-4'>
              Ready to spread the ideas of{' '}
              <span className='text-cblue mx-1'>visibility </span> and
              <span className='text-cblue mx-1'>vulnerability? </span> Join us,
              feel the impact and be the witness of
              <NextImage
                width={78.97}
                height={14.85}
                src='/images/logo/tedxits-text.svg'
                alt='TedXITS 2022'
                className='ml-1 h-3'
              />{' '}
              <span className='text-cdark font-bold'>2022</span>
            </p>
          </div>
          <div className='flex relative flex-col'>
            <div className='layout flex z-10 flex-col mt-16'>
              <div
                className='grid gap-y-8 gap-x-16 mx-auto md:grid-cols-2'
                id='book'
              >
                <TicketingCard
                  type='offline-no-kit'
                  className='ease transition-all duration-300 hover:-translate-y-2'
                >
                  <div className='flex flex-col items-center my-auto'>
                    <div>
                      <p className='font-semibold'>Price</p>
                      <h1 className='text-cblue'>
                        65k
                        <span className='text-2xl font-normal'>/ticket</span>
                      </h1>
                      <Button className='py-1 my-4 text-lg font-bold shadow-lg'>
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </TicketingCard>
                <TicketingCard
                  type='offline-with-kit'
                  className='ease transition-all duration-300 hover:-translate-y-2'
                >
                  <div className='flex flex-col items-center my-auto'>
                    <div>
                      <p className='font-semibold'>Price</p>
                      <h1 className='text-cblue'>
                        110k
                        <span className='text-2xl font-normal'>/ticket</span>
                      </h1>
                      <Button className='py-1 my-4 text-lg font-bold shadow-lg'>
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </TicketingCard>
              </div>
            </div>
            <div className='absolute inset-0'>
              <NextImage
                src='/images/checkout-page/sticker-ticket-1.png'
                width={441}
                height={220}
                alt='Ticket'
                className='absolute -left-16 top-1/2 -rotate-12'
                imgClassName='drop-shadow-lg'
              />
              <NextImage
                src='/images/checkout-page/sticker-ticket-2.png'
                width={488}
                height={259}
                alt='Ticket'
                className='absolute top-0 -right-16 rotate-6'
                imgClassName='drop-shadow-lg'
              />
              <NextImage
                src='/images/checkout-page/sticker-ticket-3.png'
                width={401}
                height={189}
                alt='Ticket'
                className='absolute left-0 bottom-1/2 rotate-3'
                imgClassName='drop-shadow-lg'
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

//#region  //*=========== Text ===========
const GrabTicketText = ({ ...rest }: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg
    id='a0e8c0d6-a5a7-4c00-a9a2-3386990f255b'
    data-name='Layer 1'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 148.32 132'
    {...rest}
  >
    <defs>
      <style>
        {
          '.b2b84a33-66a4-4278-af44-c39f22bd7093,.e526beb5-77c0-475b-be8e-7e88415787b5{fill:#212121}.b2b84a33-66a4-4278-af44-c39f22bd7093{font-size:49.16px;font-family:FivoSansModern-Regular,Fivo Sans Modern;letter-spacing:-.1em}.e47a369e-9632-45b5-ab34-b208cb917205{fill:#fd4100}'
        }
      </style>
    </defs>
    <path
      className='e526beb5-77c0-475b-be8e-7e88415787b5'
      d='M-78.67-36.83h15.34V-35c0 12.74-4.57 18.19-15.34 18.19C-90.12-16.83-95-22.28-95-35s4.88-18.2 16.33-18.2c8.75 0 13.23 3.54 14.85 11.79h-4.13c-1.33-5.7-4.47-8.06-10.72-8.06-8.4 0-11.84 4.23-11.84 14.45S-87-20.56-78.67-20.56c7.92 0 11.21-3.79 11.21-13h-11.21ZM-45.43-30.89H-56v13.13h-4.33v-34.41h14.7c8.41 0 11.9 4.08 11.9 10.76 0 5.46-2.27 8.9-7.48 10l7.57 13.57h-4.62Zm-.45-3.34c5.46 0 7.77-2.41 7.77-7.22s-2.26-7.28-7.77-7.28H-56v14.5Z'
      transform='translate(102.91 53.2)'
    />
    <path
      className='e526beb5-77c0-475b-be8e-7e88415787b5'
      d='m-33.68-17.81 11.3-34.41h8l10.83 34.41h-4.52l-2.66-8.36h-15.88l-2.7 8.36Zm15-33-6.93 21.38h13.76ZM40.43-27.59c0 6.83-19.89 9.78-28.44 9.78H-1.58v-34.41h13.42c7.62 0 27.12 2.65 27.12 8.8C39-36.64 33.21-36 33.21-36a8 8 0 0 1 7.22 8.41ZM2.74-37.33h8.51c4.91 0 23.18-1.76 23.18-5.89s-18.22-5.71-23.18-5.71H2.74Zm33.17 9.74c0-4.67-18.66-6.64-24.46-6.64H2.74v13.13h8.71c5.89 0 24.46-1.9 24.46-6.49Z'
      transform='translate(102.91 53.2)'
    />
    <text
      className='b2b84a33-66a4-4278-af44-c39f22bd7093'
      transform='translate(0 119.66)'
    >
      {'TICKET'}
    </text>
    <text
      className='b2b84a33-66a4-4278-af44-c39f22bd7093'
      transform='translate(4.92 76.72)'
    >
      <tspan xmlSpace='preserve'>{'Y     UR'}</tspan>
    </text>
    <rect
      className='e47a369e-9632-45b5-ab34-b208cb917205'
      x={27.41}
      y={55.31}
      width={59.15}
      height={9.35}
      rx={4.01}
    />
    <rect
      className='e47a369e-9632-45b5-ab34-b208cb917205'
      x={-75.5}
      y={2.11}
      width={59.15}
      height={9.35}
      rx={4.01}
      transform='rotate(90 -21.075 84.835)'
    />
    <rect
      className='e47a369e-9632-45b5-ab34-b208cb917205'
      x={-75.5}
      y={2.11}
      width={59.15}
      height={9.35}
      rx={4.01}
      transform='rotate(-45 69.755 -90.834)'
    />
    <rect
      className='e47a369e-9632-45b5-ab34-b208cb917205'
      x={-75.5}
      y={2.11}
      width={59.15}
      height={9.35}
      rx={4.01}
      transform='rotate(45 -58.69 157.6)'
    />
  </svg>
);

const BookNowText = ({ ...rest }: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      id='b6602049-e67c-49b3-a0b7-6d05bb1ce570'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 137 59.68'
      {...rest}
    >
      <defs>
        <style>
          {
            '.b2e30d72-c479-42b2-a7bf-58eaf793a3d5{font-family:FivoSansModern-Oblique,Fivo Sans Modern;font-style:oblique}.fb257e8c-5c73-4ab0-8010-94b23a41dfc3{font-style:oblique;fill:#165de4;font-family:FivoSansModern-BoldOblique,Fivo Sans Modern;font-weight:700}'
          }
        </style>
      </defs>
      <text
        transform='translate(0 23.76)'
        style={{
          fontSize: '24.44px',
          fill: '#212121',
          fontFamily: 'FivoSansModern-Regular,Fivo Sans Modern',
          letterSpacing: '-.05em',
        }}
      >
        {'BOOK'}
        <tspan
          x={66.2}
          y={0}
          xmlSpace='preserve'
          style={{
            letterSpacing: '-.05em',
            fontStyle: 'oblique',
            fontFamily: 'FivoSansModern-Oblique,Fivo Sans Modern',
          }}
        >
          {' Y'}
        </tspan>
        <tspan
          x={86.94}
          y={0}
          style={{
            fontFamily: 'Sympathizing',
          }}
        >
          {'O'}
        </tspan>
        <tspan
          className='b2e30d72-c479-42b2-a7bf-58eaf793a3d5'
          x={100.32}
          y={0}
        >
          {'UR'}
        </tspan>
        <tspan x={1.16} y={29.32}>
          {'S'}
        </tspan>
        <tspan
          x={15.7}
          y={29.32}
          style={{
            letterSpacing: '-.03em',
          }}
        >
          {'E'}
        </tspan>
        <tspan
          x={30.11}
          y={29.32}
          style={{
            letterSpacing: '-.05em',
          }}
        >
          {'AT'}
        </tspan>
        <tspan
          className='b2e30d72-c479-42b2-a7bf-58eaf793a3d5'
          x={59.87}
          y={29.32}
        />
        <tspan
          className='fb257e8c-5c73-4ab0-8010-94b23a41dfc3'
          x={65.98}
          y={29.32}
        >
          {'N'}
        </tspan>
        <tspan
          x={84.43}
          y={29.32}
          style={{
            letterSpacing: '-.07em',
            fill: '#165de4',
            fontFamily: 'FivoSansModern-BoldOblique,Fivo Sans Modern',
            fontWeight: 700,
            fontStyle: 'oblique',
          }}
        >
          {'O'}
        </tspan>
        <tspan
          className='fb257e8c-5c73-4ab0-8010-94b23a41dfc3'
          x={102.17}
          y={29.32}
        >
          {'W!'}
        </tspan>
      </text>
      <path
        fill='none'
        stroke='#fd4100'
        strokeWidth='3'
        strokeDasharray='1600'
        strokeLinecap='square'
        strokeLinejoin='round'
        d='M64.07 58.18h68.54'
      />
    </svg>
  );
};

const ScrollDownText = ({ ...rest }: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      id='a092762c-d548-4ff1-97d3-308f19bc21e0'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 89.16 78.02'
      {...rest}
    >
      <defs>
        <style>
          {
            '.a89db357-2618-41a0-bbea-b73cabaced2e{font-size:18px;fill:#165de4;font-family:FivoSansModern-Regular,Fivo Sans Modern}'
          }
        </style>
      </defs>
      <text
        className='a89db357-2618-41a0-bbea-b73cabaced2e'
        transform='rotate(-68.44 44.752 8.394)'
      >
        {'S'}
      </text>
      <text
        className='a89db357-2618-41a0-bbea-b73cabaced2e'
        transform='rotate(-51 51.868 -5.412)'
      >
        {'c'}
      </text>
      <text
        className='a89db357-2618-41a0-bbea-b73cabaced2e'
        transform='rotate(-37.99 61.178 -24.999)'
      >
        {'r'}
      </text>
      <text
        className='a89db357-2618-41a0-bbea-b73cabaced2e'
        transform='rotate(-24.66 82.678 -57.521)'
      >
        {'o'}
      </text>
      <text
        className='a89db357-2618-41a0-bbea-b73cabaced2e'
        transform='rotate(-14 126.251 -146.677)'
      >
        {'l'}
      </text>
      <text
        className='a89db357-2618-41a0-bbea-b73cabaced2e'
        transform='rotate(-9.09 179.537 -246.385)'
      >
        {'l'}
      </text>
      <text
        className='a89db357-2618-41a0-bbea-b73cabaced2e'
        transform='rotate(-3.15 472.298 -776.274)'
      />
      <text
        className='a89db357-2618-41a0-bbea-b73cabaced2e'
        transform='matrix(.99 .16 -.16 .99 46.36 24.09)'
      >
        {'d'}
      </text>
      <text
        className='a89db357-2618-41a0-bbea-b73cabaced2e'
        transform='rotate(25.92 -27.053 130.77)'
      >
        {'o'}
      </text>
      <text
        className='a89db357-2618-41a0-bbea-b73cabaced2e'
        transform='rotate(46.94 -.765 84.957)'
      >
        {'w'}
      </text>
      <text
        className='a89db357-2618-41a0-bbea-b73cabaced2e'
        transform='rotate(68.31 8.224 70.195)'
      >
        {'n'}
      </text>
      <text
        className='a89db357-2618-41a0-bbea-b73cabaced2e'
        transform='rotate(79.41 10.153 66.17)'
      >
        {'!'}
      </text>
    </svg>
  );
};
//#endregion  //*======== Text ===========
