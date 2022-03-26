import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { HiChevronDown } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

import { LinkType } from '@/data/links';

import HeaderLink from './HeaderLink';

export default function MultipleHeaderLink({
  isDark = false,
  linksData,
  title,
}: {
  isDark?: boolean;
  linksData: LinkType[];
  title: string;
}) {
  return (
    <li>
      <HeaderLink href='#' className='/ font-fivo text-lg'>
        <Popover className='relative'>
          {({ open }) => (
            <>
              <Popover.Button
                className={clsxm(
                  'font-light group inline-flex items-center px-1 text-base text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white',
                  {
                    'text-black': isDark,
                  }
                )}
              >
                <span className='font-fivo text-lg'>{title}</span>
                <HiChevronDown
                  className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-primary-500 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                  aria-hidden='true'
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-1'
              >
                <Popover.Panel className='-translate-x-1/2 absolute drop-shadow-xl left-1/2 max-w-sm mt-3 px-4 transform w-72 z-10 sm:px-0 lg:max-w-3xl'>
                  <div className='g overflow-hidden'>
                    <div className='bg-[#efedea] bg-bottom bg-no-repeat border-0 gap-4 grid pb-2 pt-5 px-5 relative'>
                      {linksData.map((item, index) => (
                        <HeaderLink
                          href={item.href}
                          className={clsxm(' font-fivo text-black text-lg ', {
                            'border-b-[3px] border-black divide-y-2 space-y-2 border-dashed ':
                              index !== linksData.length - 1,
                          })}
                          key={index}
                        >
                          <span className='ml-2 pb-1'>{item.label}</span>
                        </HeaderLink>
                      ))}
                    </div>
                    <div className='bg-no-repeat bg-ticketbottom h-48 w-full'></div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </HeaderLink>
    </li>
  );
}
