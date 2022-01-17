/* eslint-disable @next/next/no-img-element */
import React from 'react';

import NextImage from '@/components/NextImage';

export default function MissionSection() {
  return (
    /* EVENT VOLUNTEERS */
    <div className='overflow-hidden relative md:min-h-main'>
      <div className='flex overflow-hidden z-20 w-full'>
        <div className='w-[92rem] flex flex-col mx-auto lg:flex-row'>
          <div className='basis-1/4 bg-clight px-12'>
            <div className='pt-48'>
              <h1 className='text-cdark'>POSITION OPEN</h1>
            </div>
          </div>
          <div className='basis-3/4 relative px-12 mb-32'>
            <NextImage
              src='/images/bolder-blob.svg'
              width={546}
              height={546}
              alt='bg'
              priority={true}
              className='z-[-10] absolute top-0 left-1/2 translate-x-32 translate-y-36'
            />
            <NextImage
              src='/images/bg-positionopen.svg'
              width={681}
              height={808}
              alt='bg'
              priority={true}
              className='z-[-10] absolute top-0 right-1/2 translate-x-12 translate-y-10'
            />
            <NextImage
              src='/images/bolder-blob.svg'
              width={546}
              height={546}
              alt='bg'
              priority={true}
              className='z-[-10] absolute bottom-0 left-1/2 rotate-180 -translate-x-72 translate-y-56'
            />
            <div className='pt-16 lg:pt-48'>
              <h1 className='text-cdark'>
                EVENT <span className='text-primary-500'>VOLUNTEERS</span>
              </h1>
              <p className='text-cdark my-7 text-justify'>
                Responsible for the execution of the TEDxITS 2022 program
                (pre-event & main event) and the technicalities that come with
                it. The Event Director ensures effective communication between
                managers in the department and serves as a representative when
                coordinating with other departments.
              </p>
              <div className='flex flex-col gap-6 xl:flex-row xl:gap-12'>
                <div className='basis-4/12 bg-cdark p-6 rounded-2xl drop-shadow-xl'>
                  <h1 className='pb-2 text-lg border-b-2'>
                    Logistics & Accommodation Volunteers
                  </h1>
                  <p className='mt-2'>
                    Accountable for the technical execution of events in
                    alignment with the event structure and format of the whole
                    event by providing the necessary tools or equipment. In
                    terms of accommodation, also responsible for individuals
                    transportation, security, protocol, venue licensing and
                    distribution of food & beverage for all for all activities
                    of TEDxITS 2022.
                  </p>
                </div>
                <div className='basis-4/12 bg-cdark p-6 rounded-2xl drop-shadow-xl'>
                  <h1 className='pb-2 text-lg border-b-2'>
                    Experiential Design Volunteers
                  </h1>
                  <p className='mt-2'>
                    Accountable for the creative execution of “setting the mood”
                    at all TEDxITS events (stage design, decorations, venue
                    vendor plan, interactive booth) in alignment with the whole
                    event.
                  </p>
                </div>
                <div className='basis-4/12 bg-cdark p-6 rounded-2xl drop-shadow-xl'>
                  <h1 className='pb-2 text-lg border-b-2'>
                    Program Volunteers
                  </h1>
                  <p className='mt-2'>
                    Accountable for the concepting and execution of event
                    structure and format in alignment with the theme, topic, and
                    speakers from the Curating Department. Recommended for the
                    formation of sub-divisions: Pre-Event and Main Event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FINANCE VOLUNTEERS */}
      <div className='flex overflow-hidden z-20 w-full'>
        <div className='w-[92rem] flex flex-col mx-auto lg:flex-row'>
          <div className='basis-1/4 bg-clight px-12'>
            <div className='pt-48'>
              <h1 className='text-cdark'>POSITION OPEN</h1>
            </div>
          </div>
          <div className='basis-3/4 relative px-12 mb-32'>
            <NextImage
              src='/images/bolder-blob.svg'
              width={546}
              height={546}
              alt='bg'
              priority={true}
              className='z-[-10] absolute top-0 left-1/2 translate-x-32 translate-y-36'
            />
            <NextImage
              src='/images/bg-positionopen.svg'
              width={681}
              height={808}
              alt='bg'
              priority={true}
              className='z-[-10] absolute top-0 right-1/2 translate-x-12 translate-y-10'
            />
            <NextImage
              src='/images/bolder-blob.svg'
              width={546}
              height={546}
              alt='bg'
              priority={true}
              className='z-[-10] absolute bottom-0 left-1/2 rotate-180 -translate-x-72 translate-y-56'
            />
            <div className='pt-16 lg:pt-48'>
              <h1 className='text-cdark'>
                FINANCE <span className='text-primary-500'>VOLUNTEERS</span>
              </h1>
              <p className='text-cdark my-7 text-justify'>
                Responsible for gathering the fund needed (inflow) to execute
                TEDxITS 2022 smoothly and successfully. The Finance Director
                ensures effective communication between managers in the
                department and serves as a representative when coordinating with
                other departments.
              </p>
              <div className='flex flex-col gap-6 xl:flex-row xl:gap-12'>
                <div className='basis-4/12 bg-cdark p-6 rounded-2xl drop-shadow-xl'>
                  <h1 className='pb-2 text-lg border-b-2'>
                    Fundraising Volunteers
                  </h1>
                  <p className='mt-2'>
                    Accountable for initiating channels (merchandise, service,
                    etc) of income to gather the fund needed for the execution
                    of TEDxITS 2022.
                  </p>
                </div>
                <div className='basis-4/12 bg-cdark p-6 rounded-2xl drop-shadow-xl'>
                  <h1 className='pb-2 text-lg border-b-2'>
                    Partnership Volunteers
                  </h1>
                  <p className='mt-2'>
                    Accountable for initiating and maintaining partnership with
                    external parties with the purpose of gathering funds
                    (sponsorship) and media promotion for publication.
                    Recommended for the formation of sub-divisions: Sponsorship
                    & Public Relation.
                  </p>
                </div>
                <div className='basis-4/12 bg-cdark p-6 rounded-2xl drop-shadow-xl'>
                  <h1 className='pb-2 text-lg border-b-2'>
                    Ticketing Volunteers
                  </h1>
                  <p className='mt-2'>
                    Accountable for ticket salesof events under the TEDxITS
                    program (pre-event & main event). Job duties include group
                    sales representatives, telemarketing, and online sales, in
                    charge of establishing and maintaining an effective and
                    efficient ticketing system. Coordinates closely with the
                    Marketing Strategist to maximize the sales of tickets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MARKETING AND BRANDING VOLUNTEERS */}
      <div className='flex overflow-hidden z-20 w-full'>
        <div className='w-[92rem] flex flex-col mx-auto lg:flex-row'>
          <div className='basis-1/4 bg-clight px-12'>
            <div className='pt-48'>
              <h1 className='text-cdark'>POSITION OPEN</h1>
            </div>
          </div>
          <div className='basis-3/4 relative px-12 mb-32'>
            <NextImage
              src='/images/bolder-blob.svg'
              width={546}
              height={546}
              alt='bg'
              priority={true}
              className='z-[-10] absolute top-0 left-1/2 translate-x-32 translate-y-36'
            />
            <NextImage
              src='/images/bg-positionopen.svg'
              width={681}
              height={808}
              alt='bg'
              priority={true}
              className='z-[-10] absolute top-0 right-1/2 translate-x-12 translate-y-10'
            />
            <NextImage
              src='/images/bolder-blob.svg'
              width={546}
              height={546}
              alt='bg'
              priority={true}
              className='z-[-10] absolute bottom-0 left-1/2 rotate-180 -translate-x-72 translate-y-56'
            />
            <div className='pt-16 lg:pt-48'>
              <h1 className='text-cdark'>
                MARKETING AND BRANDING{' '}
                <span className='text-primary-500'>VOLUNTEERS</span>
              </h1>
              <p className='text-cdark my-7 text-justify'>
                Responsible for the branding (identity) and marketing
                (awareness, promotion, and sales through adjusting with the
                target market) of TEDxITS 2022. Specifically, the Marketing
                Director is expected to implement an effective and efficient
                system of design request-revision-approval-posting -archiving
                between the four divisions. The Marketing Director ensures
                effective communication between managers in the department and
                serves as a representative when coordinating with other
                departments.
              </p>
              <div className='flex flex-col gap-6 xl:gap-12'>
                <div className='flex flex-col gap-6 lg:flex-row xl:gap-12'>
                  <div className='basis-1/2 bg-cdark p-6 rounded-2xl drop-shadow-xl'>
                    <h1 className='pb-2 text-lg border-b-2'>
                      Marketing Strategist Volunteers
                    </h1>
                    <p className='mt-2'>
                      Accountable for the ideation and execution of
                      marketingefforts (social media and content marketing)
                      across all marketing channels (social media, e-mail,
                      word-of-mouth, buzzer), including the content and
                      copywriting.
                    </p>
                  </div>
                  <div className='basis-1/2 bg-cdark p-6 rounded-2xl drop-shadow-xl'>
                    <h1 className='pb-2 text-lg border-b-2'>
                      Graphic Design Volunteers
                    </h1>
                    <p className='mt-2'>
                      Accountable for the graphic design realization of
                      branding,marketing, and operational materials as requested
                      by stakeholders (Marketing Director & Marketing
                      Strategist). Recommended for the formation of
                      sub-divisions based on the category of requests: Marketing
                      (social media posts, etc) & Operational (guidebook,
                      website design, etc).
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-6 lg:flex-row xl:gap-12'>
                  <div className='basis-1/2 bg-cdark p-6 rounded-2xl drop-shadow-xl'>
                    <h1 className='pb-2 text-lg border-b-2'>
                      Videography Volunteers
                    </h1>
                    <p className='mt-2'>
                      Accountable for the videographic realization of branding,
                      marketing, and operational materials as requested by
                      stakeholders (Marketing Director, Marketing Strategist
                      Division). Job duties include taking video documentation,
                      editing video, and creating motion pictures.
                    </p>
                  </div>
                  <div className='basis-1/2 bg-cdark p-6 rounded-2xl drop-shadow-xl'>
                    <h1 className='pb-2 text-lg border-b-2'>
                      Website Volunteers
                    </h1>
                    <p className='mt-2'>
                      Accountable for the construction, management, and
                      development of the TEDxITS official website and receives
                      content approval from the Marketing Director. Coordinates
                      closely with the HRA in using the website as a main
                      platform for recruitment, the Ticketing Division for
                      ticketing orders, and Marketing Director for the branding
                      and marketing materials and navigation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HUMAN RESOURCES AND ADMINISTRATIVE (HRA) VOLUNTEERS */}
      <div className='flex overflow-hidden z-20 w-full'>
        <div className='w-[92rem] flex flex-col mx-auto lg:flex-row'>
          <div className='basis-1/4 bg-clight px-12'>
            <div className='pt-48'>
              <h1 className='text-cdark'>POSITION OPEN</h1>
            </div>
          </div>
          <div className='basis-3/4 relative px-12 mb-32'>
            <NextImage
              src='/images/bolder-blob.svg'
              width={546}
              height={546}
              alt='bg'
              priority={true}
              className='z-[-10] absolute top-0 left-1/2 translate-x-32 translate-y-36'
            />
            <NextImage
              src='/images/bg-positionopen.svg'
              width={681}
              height={808}
              alt='bg'
              priority={true}
              className='z-[-10] absolute top-0 right-1/2 translate-x-12 -translate-y-16 lg:-translate-y-36'
            />
            <NextImage
              src='/images/bolder-blob.svg'
              width={546}
              height={546}
              alt='bg'
              priority={true}
              className='z-[-10] absolute bottom-0 left-1/2 rotate-180 -translate-x-72 translate-y-96 lg:translate-y-56'
            />
            <div className='pt-16 lg:pt-48'>
              <NextImage
                src='/images/hra-volunteers.jpg'
                width={1038}
                height={250}
                alt='bg'
                className='w-full'
              />
              <h1 className='text-cdark mt-16'>
                HUMAN RESOURCES AND ADMINISTRATIVE (HRA){' '}
                <span className='text-primary-500'>VOLUNTEERS</span>
              </h1>
              <p className='text-cdark my-7 text-justify'>
                Responsible for the organization’s knowledge management
                (archiving of files, work platform), secretarial/administrative
                affairs (letters, certificate, etc) and the management of human
                resources (recruitment, maintenance, and development) of TEDxITS
                2022. The HRA Director ensures effective communication between
                managers in the department and serves as a representative when
                coordinating with other departments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* HUMAN RESOURCES AND ADMINISTRATIVE (HRA) VOLUNTEERS */}
      <div className='flex overflow-hidden z-20 w-full'>
        <div className='w-[92rem] flex flex-col mx-auto lg:flex-row'>
          <div className='basis-1/4 bg-clight px-12'>
            <div className='pt-48'>
              <h1 className='text-cdark'>POSITION OPEN</h1>
            </div>
          </div>
          <div className='basis-3/4 relative px-12 mb-32'>
            <NextImage
              src='/images/bolder-blob.svg'
              width={546}
              height={546}
              alt='bg'
              priority={true}
              className='z-[-10] absolute top-0 left-1/2 translate-x-32 translate-y-36'
            />
            <NextImage
              src='/images/bg-positionopen.svg'
              width={681}
              height={808}
              alt='bg'
              priority={true}
              className='z-[-10] absolute top-0 right-1/2 translate-x-12 -translate-y-16 lg:-translate-y-36'
            />
            <NextImage
              src='/images/bolder-blob.svg'
              width={546}
              height={546}
              alt='bg'
              priority={true}
              className='z-[-10] absolute bottom-0 left-1/2 rotate-180 -translate-x-72 translate-y-96 lg:translate-y-56'
            />
            <div className='pt-16 lg:pt-48'>
              <NextImage
                src='/images/curating-volunteers.jpg'
                width={1038}
                height={250}
                alt='bg'
                className='w-full'
              />
              <h1 className='text-cdark mt-16'>
                CURATING <span className='text-primary-500'>VOLUNTEERS</span>
              </h1>
              <p className='text-cdark my-7 text-justify'>
                Responsible for the essence of TEDxITS 2022; oversees the
                process of theme, topic, and speakers ideation for the event and
                marketing. The Curating Director ensures effective communication
                between managers in the department and serves as a
                representative when coordinating with other departments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
