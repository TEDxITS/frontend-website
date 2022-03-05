/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import ReactPlayer from 'react-player';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

import Guidebook8 from '@/assets/book/Guidebook8';
import TitleCfsRegistration from '@/assets/svg/TitleCfsRegistration';

export default function TestPage() {
  return (
    <Layout>
      <Seo templateTitle='CGuidebook' />
      <main className=''>
        <section className='bg-[#d8d6d3] item-center flex flex-col pt-8 md:pt-16'>
          <div className='flex sticky top-0 flex-col justify-center min-h-screen'>
            <div
              className={
                'absolute duration-300 ease-out flex inset-0 opacity-1 transition-all'
              }
            >
              <div className='text text-cblue flex absolute bottom-16 left-16 flex-col gap-1 mt-auto w-64 text-right opacity-30 md:relative md:text-left md:opacity-100'>
                <p>A guidebook, to guide you.</p>
                <p className='text-4xl'>@2022</p>
                <p>The Unseen of Great Importance.</p>
                <p>The Unspoken Taboo Words.</p>
                <p>The Unheard Voices.</p>
              </div>

              {/* Image Section */}
              <div className='relative w-full'>
                <img
                  src='/images/cfs/draw-eye.png'
                  alt=''
                  className='animate-[float_4s_ease-in-out_infinite] absolute top-0 left-0 w-1/4'
                />
                <img
                  src='/images/cfs/draw-lips.png'
                  alt=''
                  className='6s animate-[float_3s_ease-in-out_infinite] absolute right-0 bottom-1/3 w-1/4'
                />
                <img
                  src='/images/cfs/draw-ear.png'
                  alt=''
                  className='animate-[float_2s_ease-in-out_infinite] absolute bottom-0 left-0 w-1/4'
                />
              </div>
              <p className='text-cblue absolute top-16 right-16 w-64 text-justify md:relative'>
                Calling for speakers! Elephant in the room. TEDxITS @2022
              </p>
            </div>
            <img
              src='/images/cfs/guide-text.png'
              alt=''
              className='absolute top-0 left-0'
            />
            <div className='layout max-h-[70vh] flex justify-center'>
              <img src='/svg/title-cfs.svg' alt='' className='' />
            </div>
            <img
              src='/images/cfs/book-text.png'
              alt=''
              className='absolute right-0 bottom-0'
            />
          </div>
          <div className='bg-texture z-10 backdrop-filter backdrop-blur-md md:py-16'>
            <div className='flex flex-col md:layout'>
              <div className='grid md:grid-cols-2'>
                <img
                  src={`/images/cfs/guidebook/guidebook-03.jpg`}
                  alt={`Guidebook page 1`}
                />
                <img
                  src={`/images/cfs/guidebook/guidebook-04.jpg`}
                  alt={`Guidebook page 1`}
                />
              </div>
              <div className='grid grid-cols-2'>
                <img
                  src={`/images/cfs/guidebook/guidebook-05.jpg`}
                  alt={`Guidebook page 1`}
                />
                <img
                  src={`/images/cfs/guidebook/guidebook-06.jpg`}
                  alt={`Guidebook page 1`}
                />
              </div>
              <div className='grid md:grid-cols-2' id='requirements'>
                <img
                  src={`/images/cfs/guidebook/guidebook-07.jpg`}
                  alt={`Guidebook page 1`}
                />
                <Guidebook8 className='bg-cred w-full' />
              </div>
              <div className='grid grid-cols-2'>
                <img
                  src={`/images/cfs/guidebook/guidebook-09.jpg`}
                  alt={`Guidebook page 1`}
                />
                <img
                  src={`/images/cfs/guidebook/guidebook-10.jpg`}
                  alt={`Guidebook page 1`}
                />
              </div>
              <div className='grid grid-cols-2'>
                <div className='relative'>
                  <div className='aspect-h-9 aspect-w-16 bg-cdark bottom-[18%] absolute left-1/2 z-10 w-11/12 rotate-2 -translate-x-1/2'>
                    <ReactPlayer
                      url='https://youtu.be/-FOCpMAww28'
                      width={'100%'}
                      height={'100%'}
                      muted={true}
                      controls={true}
                    />
                  </div>
                  <img
                    src={`/images/cfs/guidebook/guidebook-11.jpg`}
                    alt={`Guidebook page 1`}
                    className='absolute inset-0'
                  />
                </div>
                <img
                  src={`/images/cfs/guidebook/guidebook-12.jpg`}
                  alt={`Guidebook page 1`}
                />{' '}
              </div>
              <div className='grid md:grid-cols-2'>
                <img
                  src={`/images/cfs/guidebook/guidebook-13.jpg`}
                  alt={`Guidebook page 1`}
                />
                <img
                  src={`/images/cfs/guidebook/guidebook-14.jpg`}
                  alt={`Guidebook page 1`}
                />
              </div>
              <div className='grid md:grid-cols-2'>
                <img
                  src={`/images/cfs/guidebook/guidebook-02.jpg`}
                  alt={`Guidebook page 1`}
                />
                <LastPage />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function LastPage() {
  return (
    <div className='layout min-h-main flex flex-col gap-8 justify-center items-center h-full'>
      <h2 className='font-fivo text-cdark font-semibold'>
        Then what you’re waiting for?
      </h2>
      <div className='flex flex-col w-full'>
        <p className='text-cdark relative'>
          go to
          <img
            src='/images/cfs/draw-eye.png'
            alt=''
            className='animate-[float_4s_ease-in-out_infinite] absolute left-8 bottom-1/3 w-20'
          />
        </p>
        <TitleCfsRegistration />
        <ButtonLink className='z-10' href='/call-for-local-speaker'>
          Register Now
        </ButtonLink>
      </div>
    </div>
  );
}
