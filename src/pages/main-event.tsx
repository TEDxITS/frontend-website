import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import ElephantFlocksSection from '@/container/main-event/ElephantFlocksSection';
import EndSection from '@/container/main-event/EndSection';
import GallerySection from '@/container/main-event/GallerySection';
import InteractionSection from '@/container/main-event/InteractionSection';
import SpeakerCarouselSection from '@/container/main-event/SpeakersCarouselSection';
import SpeakersTalkSection from '@/container/main-event/SpeakersTalkSection';
import SponsorSection from '@/container/main-event/SponsorSection';

export default function MainEventPage() {
  return (
    <Layout>
      <Seo templateTitle='TEDxITS 2022 Main Event' />

      <main>
        <section
          className='flex relative z-10 flex-col pt-8 bg-center bg-no-repeat bg-cover md:pt-16'
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/tedxits/image/upload/v1656931121/merch/main-event/end/Asset_46-100_cifdkr.jpg)',
          }}
        >
          <Header />

          <div className='layout min-h-[calc(100vh-64px-32px)] flex z-10 flex-col gap-2 justify-between pt-4 pb-8 lg:min-h-[calc(100vh-64px-64px)]'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col justify-between w-full md:flex-row'>
                <p className='text-[10px] leading-none'>Listen.See.Speak</p>
                <div className='flex gap-8 mt-4 md:mt-0'>
                  <p className='text-[10px] leading-none'>
                    The unheard <br /> Voices
                  </p>
                  <p className='text-[10px] leading-none'>
                    The Unseen of Great
                    <br /> Importance
                  </p>
                  <p className='text-[10px] leading-none'>
                    The Unspoken Taboo <br />
                    Words
                  </p>
                </div>
              </div>
              <div className='flex justify-between mt-8 w-full md:mt-0'>
                <NextImage
                  width={48}
                  height={52}
                  alt='flower'
                  className='w-6'
                  src='https://res.cloudinary.com/tedxits/image/upload/v1656569525/merch/main-event/landing-page/flower_zx5s8d.svg'
                />
                <NextImage
                  width={125}
                  height={100}
                  alt='X'
                  className='w-16'
                  src='https://res.cloudinary.com/tedxits/image/upload/v1656569494/merch/main-event/landing-page/x-letter_he9uam.svg'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='w-full'>
                <NextImage
                  width={184}
                  height={23}
                  alt='TEDxITS logo'
                  className='w-32'
                  src='https://res.cloudinary.com/tedxits/image/upload/v1656569570/merch/main-event/landing-page/tedx-logo_ecq0qo.svg'
                />
              </div>
              <div className='flex flex-col gap-4 w-full'>
                <NextImage
                  width={439}
                  height={228}
                  alt='Main Event Text'
                  className='w-[70%] md:max-w-xs'
                  src='https://res.cloudinary.com/tedxits/image/upload/v1656570975/merch/main-event/landing-page/main-event-text_wsiyh5.svg'
                />
                <div className='mt-auto'>
                  <p className='leading-none'>
                    <span className='font-pilow'>19</span> of
                  </p>
                  <p className='ml-4 leading-none'>
                    June <span className='font-pilow'>2022</span>.
                  </p>
                </div>
                <NextImage
                  src='/images/meet-the-team/arrow-1.png'
                  width={60}
                  height={64}
                  alt='arrow'
                  className='w-8 -rotate-90'
                  priority
                  useSkeleton
                />
                <p className='max-w-sm text-sm'>
                  At Auditorium Research Center ITS Sepuluh Nopember Institute
                  of Technology Surabaya, Indonesia
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-[#F0EEEB] overflow-hidden'>
          <div className='bg-paper'>
            <SpeakerCarouselSection />
          </div>
        </section>

        <section className='bg-cdark'>
          <SpeakersTalkSection />
        </section>

        <section className='bg-[#F0EEEB]'>
          <div className='bg-paper'>
            <InteractionSection />
          </div>
        </section>

        <section className='bg-[#F0EEEB]'>
          <div className='bg-paper'>
            <ElephantFlocksSection />
            <GallerySection />
          </div>
        </section>

        <section className='bg-[#F0EEEB] overflow-hidden'>
          <div className='bg-paper'>
            <EndSection />
          </div>
        </section>

        <section className='bg-[#F0EEEB] overflow-hidden'>
          <div className='bg-paper'>
            <SponsorSection />
          </div>
        </section>
      </main>
    </Layout>
  );
}
