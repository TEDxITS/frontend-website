import { Disclosure } from '@headlessui/react';
import * as React from 'react';
import { HiChevronDown } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

import { eventLinks, LinkType } from '@/data/links';

import HeaderLink from './HeaderLink';

export default function MultipleMobileLinks({
  linksData,
  title,
}: {
  linksData: LinkType[];
  title: string;
}) {
  return (
    <li>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex'>
              <HeaderLink href='#' className='flex-col items-start text-2xl'>
                <span>{title}</span>
              </HeaderLink>
              <HiChevronDown
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150  content-center my-auto`}
                aria-hidden='true'
              />
            </Disclosure.Button>
            <Disclosure.Panel className='flex flex-col gap-5 mx-5'>
              <p className='text-left'></p>
              {linksData.map((item, index) => (
                <HeaderLink
                  href={item.href}
                  className={clsxm('font-fivo text-2xl', {
                    'border-b-[3px] border-white border-dashed ':
                      index !== eventLinks.length,
                  })}
                  key={index}
                >
                  <span className='pb-2 ml-2'>{item.label}</span>
                </HeaderLink>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </li>
  );
}
