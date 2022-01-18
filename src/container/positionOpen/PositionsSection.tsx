/* eslint-disable @next/next/no-img-element */
import React from 'react';

import clsxm from '@/lib/clsxm';

import { menuSection, positionData } from '@/data/position';
import { googleFormUrl } from '@/data/url';

import ButtonLink from '@/components/links/ButtonLink';

import MobileDropdown from './MobileDropdown';
import PositionTypeCard from './PositionTypeCard';

export default function MissionSection() {
  const [active, setActive] = React.useState<string>(menuSection[0].href);

  return (
    <div className='flex flex-wrap justify-start items-start'>
      {/* Sidebar Desktop */}
      <div
        className={clsxm(
          'from-cgray to-cdark/20 via-cgray relative bg-gradient-to-r',
          'transition-all duration-150',
          'sticky top-0 w-3/12',
          'hidden md:block md:w-3/12'
        )}
      >
        <div className='layout flex justify-center items-center min-h-screen'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-cdark px-4 mr-auto md:text-2xl lg:text-4xl'>
              POSITION OPEN
            </h1>
            <div className='flex flex-col gap-2 mt-8'>
              {menuSection.map(({ title, href }) => (
                <a
                  onClick={() => setActive(href)}
                  key={href}
                  href={`#${href}`}
                  className={clsxm(
                    'bg-cdark ease font-fivo py-2 text-lg text-left transition-all duration-500',
                    {
                      'px-4': href === active,
                      'text-cdark  bg-opacity-0 px-4': href !== active,
                    }
                  )}
                >
                  {title}
                </a>
              ))}
            </div>
            <div className='hidden mx-auto mt-4 lg:block'>
              <ButtonLink className='shadow-2xl' href={googleFormUrl}>
                Register Now
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
      {/* Dropdown Mobile */}
      <MobileDropdown
        setActive={setActive}
        linkActive={active}
        className='block mt-32 md:hidden'
      />
      {/* Content */}
      <div
        className={clsxm(
          'bg-cgray mt-16 w-full transition-all duration-150 md:mt-40 md:w-9/12'
        )}
      >
        <div className='flex flex-col gap-32'>
          {positionData.map((item, i) => (
            <PositionTypeCard
              setActive={setActive}
              dataClassName={item.dataClassName}
              title={item.title}
              description={item.description}
              href={item.href}
              image={item.image}
              data={item.data}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
