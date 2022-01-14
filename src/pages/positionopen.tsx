import Image from 'next/image';
import * as React from 'react';
import { MouseEvent } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

import Button from '@/components/buttons/Button';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Tab from '@/components/tabs/Tab';
import Tabs from '@/components/tabs/Tabs';

export default function PositionOpenPage() {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert('Button clicked!');
  };

  return (
    <Layout>
      <Seo templateTitle='PositionOpen' />
      <main className='bg-1 bg-[length:100vw_100vh] bg-cdark text-clight pt-8 bg-top bg-no-repeat md:pt-16'>
        <Header />
        <section className=''>
          <div className='h-[calc(100vh-6rem)] layout flex flex-col justify-center items-center text-center md:h-[calc(100vh-8rem)]'>
            <div className='absolute z-10 -translate-y-24'>
              <Image
                src='/images/Asset 7.svg'
                alt=''
                width={605}
                height={159}
              />
            </div>
            <div>
              <h1>
                <span className='font-sympath'>P</span>O
                <span className='font-sympath'>S</span>ITI
                <span className='font-sympath'>O</span>N{' '}
                <span className='font-sympath'>O</span>P
                <span className='font-sympath'>E</span>N
              </h1>
              <p className='content mt-20 text-center md:w-[36rem]'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volut.
              </p>
            </div>
            <div className='flex justify-between items-center w-full translate-y-56'>
              <div>
                <h1 className='text-base'>
                  TEDx<span className='font-bold'>ITS</span>
                </h1>
              </div>
              <div>
                <Button
                  className='bg-clear border-clight p-0 rounded-full border-2 hover:bg-clear hover:border-primary-500'
                  onClick={handleClick}
                >
                  <AiOutlineArrowDown
                    className={'h-10 w-10 fill-clight hover:fill-primary-500'}
                  />
                </Button>
              </div>
              <div>
                <h1 className='text-base font-normal'>&copy;2022</h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className=''>
            <Tabs className='flex flex-row' ulClassName='w-1/5'>
              <Tab title='Event Volunteers' className='bg-cred w-4/5'>
                <div className=''>Event</div>
              </Tab>
              <Tab title='Marketing & Branding Volunteers'>Marketing</Tab>
              <Tab title='Human Resources & Administrative (HRA) Volunteers'>
                HRA
              </Tab>
              <Tab title='Curating Volunteers'>Curating</Tab>
            </Tabs>
          </div>
        </section>
      </main>
    </Layout>
  );
}
