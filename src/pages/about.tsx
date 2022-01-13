import Image from 'next/image';
import * as React from 'react';
import { MouseEvent } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

import Button from '@/components/buttons/Button';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function AboutPage() {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert('Button clicked!');
  };

  return (
    <Layout>
      <Seo templateTitle='About' />
      <main className='bg-1 bg-[length:100vw_40rem] bg-cdark text-clight pt-8 bg-top bg-no-repeat md:pt-16'>
        <Header />
        <section>
          <div className='layout flex flex-col justify-center items-center min-h-screen text-center'>
            <div className='mt-8 w-full'>
              <ul className='font-fivo flex flex-col gap-8'>
                <section className='bg-cdark'></section>
                <li>
                  <div className='mt-2'>
                    <div className='bg-[length:200px_100px] bg-[url("/images/tedxits.png")] bg-cdark border-clight p-40 w-full bg-local bg-center bg-no-repeat rounded-3xl border shadow-xl cursor-pointer md:p-64'></div>
                  </div>
                </li>
                <li>
                  <span className='flex flex-col gap-x-24 mt-20 mb-28 text-left md:flex-row'>
                    <div className='basis-1/2 mb-28 md:mb-0'>
                      <div className='absolute z-10 translate-x-4 -translate-y-4 md:translate-x-12 md:-translate-y-6'>
                        <Image
                          src='/images/Asset 3.svg'
                          alt=''
                          width={154}
                          height={69}
                        />
                      </div>
                      <h2 className='font-outline-900-sm pb-1 font-bold md:font-outline-900-md'>
                        <span className='font-normal'>About</span> TED
                      </h2>
                      <p className='content mt-14 text-justify'>
                        TED is a nonprofit devoted to spreading ideas, usually
                        in the form of short, powerful talks (18 minutes or
                        less). TED began in 1984 as a conference where
                        Technology, Entertainment and Design converged, and
                        today covers almost all topics — from science to
                        business to global issues — in more than 100 languages.
                        Meanwhile, independently run TEDx events help share
                        ideas in communities around the world.
                      </p>
                      <div className='flex flex-row pt-5'>
                        <p className='content pt-2'>
                          For more information, visit
                        </p>
                        <Button
                          className={
                            'px-4 py-1.5 mx-2 rounded-full h-min bg-gradient-to-r from-cgreen to-cblue border-0'
                          }
                          onClick={handleClick}
                        >
                          www.ted.com
                        </Button>
                      </div>
                    </div>
                    <div className='basis-1/2'>
                      <div className='absolute z-10 translate-x-4 -translate-y-4 md:translate-x-12 md:-translate-y-4'>
                        <Image
                          src='/images/Asset 1.svg'
                          alt=''
                          width={161}
                          height={61}
                        />
                      </div>
                      <h2 className='font-outl ine-900-sm font-extrabold md:font-outline-900-md'>
                        <span className='font-normal'>About</span> TED
                        <span className='ordinal'>x</span>
                      </h2>
                      <h4 className='text-sm'>
                        x = independently organized TED event
                      </h4>
                      <p className='content mt-9 text-justify'>
                        In the spirit of ideas worth spreading, TEDx is a
                        program of local, self-organized events that bring
                        people together to share a TED-like experience. At a
                        TEDx event, TEDTalks video and live speakers combine to
                        spark deep discussion and connection in a small group.
                        These local, self-organized events are branded TEDx,
                        where x=independently organized TED event. The TED
                        Conference provides general guidance for the TEDx
                        program, but individual TEDx events are self-organized.
                      </p>
                      <div className='flex flex-row pt-5'>
                        <p className='content pt-2'>
                          Find out more about TEDx at
                        </p>
                        <Button
                          className={
                            'px-4 py-1.5 mx-2 rounded-full h-min bg-gradient-to-r from-cgreen to-cblue border-0'
                          }
                          onClick={handleClick}
                        >
                          www.ted.com/tedx
                        </Button>
                      </div>
                    </div>
                  </span>
                  <div className='text-left'>
                    <div className='absolute z-10 translate-x-4 -translate-y-4 md:translate-x-16'>
                      <Image
                        src='/images/Asset 2.svg'
                        alt=''
                        width={200}
                        height={64}
                      />
                    </div>
                    <h2 className='font-outline-900-sm mb-1 font-extrabold md:font-outline-900-md'>
                      <span className='font-normal'>About</span> TED
                      <span className='ordinal'>x</span>
                      <span className='font-normal'>ITS</span>
                    </h2>
                    <p className='content mt-14 text-justify'>
                      In the spirit of ideas worth spreading, TEDx is a program
                      of local, self-organized events that bring people together
                      to share a TED-like experience. At a TEDx event, TEDTalks
                      video and live speakers combine to spark deep discussion
                      and connection in a small group. These local,
                      self-organized events are branded TEDx, where
                      x=independently organized TED event. The TED Conference
                      provides general guidance for the TEDx program, but
                      individual TEDx events are self-organized.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='mt-28'>
                    <div className='bg-clight p-20 mb-32 w-full rounded-3xl border border-primary-100 shadow-xl md:p-64'>
                      <h1 className='font-fivo font-outline-900-sm text-cdark md:font-outline-900-md'>
                        Carousel
                      </h1>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='bg-2 bg-[length:100vw_8rem] bg-clight text-cdark overflow-hidden relative pb-32 bg-top bg-no-repeat md:bg-[length:100vw_15rem]'>
          <div className='layout flex flex-col justify-center items-center min-h-screen text-center'>
            <div className='w-full'>
              <div className='flex place-content-center'>
                <Button
                  className='bg-clear p-0 border-0 hover:bg-clear'
                  onClick={handleClick}
                >
                  <AiOutlineArrowDown
                    className={'h-10 w-10 fill-clight hover:fill-primary-500'}
                  />
                </Button>
              </div>
              <ul className='font-fivo flex relative z-10 flex-col gap-8'>
                <li>
                  <div className='mt-80 mb-8'>
                    <h1 className='font-fivo font-outline-900-sm text-cdark tracking-wide md:font-outline-900-md'>
                      PA<span className='font-sympath'>S</span>T{' '}
                      <span className='font-sympath'>E</span>VE
                      <span className='font-sympath'>NT</span>S
                    </h1>
                    <div className='absolute left-1/2 z-10 transform -translate-x-1/2 translate-y-4 sm:translate-y-2'>
                      <Image
                        src='/images/Asset 4.svg'
                        alt=''
                        width={285}
                        height={71}
                      />
                    </div>
                    <h4 className='font-fivo text-cdark pt-8 mb-3'>
                      “Castle of Your Own”
                    </h4>
                  </div>
                </li>
                <li>
                  <div className='bg-3 h-[47rem] rotate-[120deg] w-[50rem] z-[-1] absolute -left-80 bg-no-repeat transform -translate-y-32'></div>
                  <div className='flex flex-col gap-8 justify-between my-12 mb-16 md:flex-row'>
                    <div className='h-fit overflow-hidden mx-auto w-96 rounded-2xl sm:w-96 md:mx-0'>
                      <Image
                        src='/images/socialExperiment.jpg'
                        alt=''
                        width='100%'
                        height={102}
                        layout='responsive'
                        objectFit='cover'
                      ></Image>
                    </div>
                    <div className='basis-7/12 mb-10 text-left md:mb-0'>
                      <h2 className='font-outline-900-sm mb-3.5 font-bold text-primary-500 md:font-outline-900-md'>
                        Social Experiment
                      </h2>
                      <p className='content mt-8md:mt-16 text-justify'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullam- corper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis at vero eros et ac.
                      </p>
                      <Button
                        className={
                          'flex px-6 py-4 mt-auto ml-auto rounded-full h-min bg-gradient-to-r from-cgreen to-cblue translate-y-6 lg:translate-y-20 drop-shadow-xl font-bold text-clight border-0'
                        }
                        onClick={handleClick}
                      >
                        Watch Recap
                      </Button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='-rotate-[140deg] bg-3 h-[47rem] w-[50rem] z-[-1] absolute -right-80 bg-no-repeat transform -translate-y-56'></div>
                  <div className='flex flex-col-reverse gap-8 justify-between my-12 mb-16 md:flex-row'>
                    <div className='basis-7/12 mb-10 text-left md:mb-0'>
                      <h2 className='font-outline-900-sm mb-2.5 font-bold text-primary-500 md:font-outline-900-md'>
                        “Guiding Your Passion to Find Yor True Self”
                      </h2>
                      <h4 className='font-normal text-primary-500'>
                        with Tita Oxa A.
                      </h4>
                      <p className='content mt-7 text-justify'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullam- corper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis at vero eros et ac.
                      </p>
                      <Button
                        className={
                          'flex px-6 py-4 mt-auto ml-auto rounded-full h-min bg-gradient-to-r from-cgreen to-cblue translate-y-6 lg:translate-y-20 drop-shadow-xl font-bold text-clight border-0'
                        }
                        onClick={handleClick}
                      >
                        Watch Recap
                      </Button>
                    </div>
                    <div className='h-fit overflow-hidden mx-auto w-96 rounded-2xl sm:w-96 md:mx-0'>
                      <Image
                        src='/images/guidingYourPassion.jpg'
                        alt=''
                        width='100%'
                        height={102}
                        layout='responsive'
                        objectFit='cover'
                      ></Image>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='bg-3 h-[47rem] rotate-[40deg] w-[50rem] z-[-1] absolute -left-48 bg-no-repeat transform -translate-y-20'></div>
                  <div className='flex flex-col gap-8 justify-between my-12 md:flex-row'>
                    <div className='h-fit overflow-hidden mx-auto w-96 rounded-2xl sm:w-96 md:mx-0'>
                      <Image
                        src='/images/spaceOfMind.jpg'
                        alt=''
                        width='100%'
                        height={102}
                        layout='responsive'
                        objectFit='cover'
                      ></Image>
                    </div>
                    <div className='basis-7/12 mb-10 text-left md:mb-0'>
                      <h2 className='font-outline-900-sm mb-2.5 font-bold text-primary-500 md:font-outline-900-md'>
                        Space of Mind : “Designing Your Castle”
                      </h2>
                      <h4 className='font-normal text-primary-500'>
                        with Ibrahim Arsy, Florence Fedora, Radifan Athallah
                      </h4>
                      <p className='content mt-7 text-justify'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullam- corper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis at vero eros et ac.
                      </p>
                      <Button
                        className={
                          'flex px-6 py-4 mt-auto ml-auto rounded-full h-min bg-gradient-to-r from-cgreen to-cblue translate-y-6 lg:translate-y-20 drop-shadow-xl font-bold text-clight border-0'
                        }
                        onClick={handleClick}
                      >
                        Watch Recap
                      </Button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='mt-36'>
                    <div className='-rotate-[45deg] bg-3 h-[47rem] w-[50rem] z-[-1] absolute -right-96 bg-no-repeat transform -translate-y-72'></div>
                    <h1 className='font-fivo font-outline-900-sm text-cdark tracking-wide md:font-outline-900-md'>
                      “Castle of Your Own”
                    </h1>
                    <div className='mt-9 mb-16'>
                      <div className='bg-[length:200px_100px] bg-[url("/images/tedxits.png")] border-clight p-40 w-full bg-local bg-primary-800 bg-center bg-no-repeat rounded-3xl border shadow-xl cursor-pointer md:p-64'></div>
                      <div className='bg-3 h-[47rem] w-[50rem] z-[-1] absolute -left-48 bg-no-repeat transform translate-y-72 xl:-translate-y-64'></div>
                      <p className='content mt-16 text-justify'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis at vero eros et
                        accumsan et iusto odio dignissim qui blandit praesent
                        luptatum zzril delenit augue duis dolore te feugait
                        nulla facilisi.Lorem ipsum dolor sit amet, cons ectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                        enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
