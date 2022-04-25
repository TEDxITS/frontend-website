/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react';
import Hamburger from 'hamburger-react';
import * as React from 'react';
import { IoTicket } from 'react-icons/io5';
import { RiTShirtFill } from 'react-icons/ri';

import clsxm from '@/lib/clsxm';

import {
  aboutLinks,
  eventLinks,
  merchLinks,
  pageLinks,
  socialMediaLinks,
} from '@/data/links';

import HeaderLink from '../links/HeaderLink';
import MultipleMobileLinks from '../links/MultipleMobileLinks';
import UnstyledLink from '../links/UnstyledLink';

type SidebarProps = {
  sidebarOpen: boolean;
  isDark?: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const navigation = [
  { name: 'Ticket', href: '#', icon: IoTicket, current: true },
  { name: 'Merch', href: '#', icon: RiTShirtFill, current: false },
];
export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  isDark = false,
}: SidebarProps) {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={React.Fragment}>
        <Dialog
          as='div'
          className='z-[100] flex fixed inset-0 lg:hidden'
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={React.Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='bg-clight fixed inset-0 bg-opacity-50' />
          </Transition.Child>
          <Transition.Child
            as={React.Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='bg-[#333333] flex relative flex-col flex-1 pt-5 pb-4 w-full max-w-xs'>
              <Transition.Child
                as={React.Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 right-0 pt-2 -mr-12'>
                  <button
                    type='button'
                    className={clsxm(
                      'flex p-2 ml-1 w-10 h-10 rounded-full focus:ring-2 focus:ring-inset focus:outline-none ',
                      isDark
                        ? 'focus:ring-cdark text-cdark'
                        : 'focus:ring-white text-white'
                    )}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <Hamburger toggled={true} size={20} />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex flex-shrink-0 items-center px-4'>
                <NavigationLogo isDark={false} />
              </div>
              <SidebarLinks />
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14' aria-hidden='true'>
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      <div
        className={clsxm(
          'bg-[#333333] hidden relative inset-y-0 flex-col lg:flex lg:fixed lg:w-64'
        )}
      >
        <div className='flex overflow-y-auto flex-col flex-grow py-8 lg:py-16'>
          <SidebarLinks />
        </div>
      </div>
    </>
  );
}

function NavigationLogo({ isDark }: { isDark: boolean }) {
  return (
    <img
      src={
        isDark
          ? '/images/logo/tedxits-black.png'
          : '/images/logo/tedxits-white.png'
      }
      alt='TedxITS logo'
      className='flex-shrink-0 h-12'
    />
  );
}

function SidebarLinks() {
  return (
    <>
      <div className='flex overflow-y-auto flex-col px-4 my-4 h-full'>
        <nav className='space-y-1'>
          {navigation.map((item) => (
            <HeaderLink
              animated={false}
              key={item.name}
              href={item.href}
              className={clsxm(
                item.current
                  ? 'bg-cblue text-clight'
                  : 'text-clight hover:bg-cblue/40',
                'px-2 py-2 w-full text-base font-medium rounded-md border-b-0'
              )}
            >
              <item.icon
                className='text-clight flex-shrink-0 mr-2'
                aria-hidden='true'
                size={25}
              />
              {item.name}
            </HeaderLink>
          ))}
        </nav>

        <div className='flex flex-col gap-2 justify-center mx-2 mt-auto'>
          <ul className='flex flex-col gap-4'>
            {/* home */}
            {pageLinks.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <p className='text-left'>
                  <HeaderLink href={href} className='text-base'>
                    <span className='font-fivo text-base text-right'>
                      {label}
                    </span>
                  </HeaderLink>
                </p>
              </li>
            ))}
            {/* about */}
            <MultipleMobileLinks
              animated={false}
              title='About'
              linksData={aboutLinks}
              titleClassName='text-base'
              linkClassName='text-base border-b-0'
              linkWrapperClassName='mx-0 gap-1 py-2'
            />
            {/* event */}
            <MultipleMobileLinks
              animated={false}
              title='Events'
              linksData={eventLinks}
              titleClassName='text-base'
              linkClassName='text-base border-b-0'
              linkWrapperClassName='mx-0 gap-1 py-2'
            />
            {merchLinks.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <p className='text-left'>
                  <HeaderLink href={href} className='text-base'>
                    <span className='font-fivo text-base text-right'>
                      {label}
                    </span>
                  </HeaderLink>
                </p>
              </li>
            ))}
            <p className='mt-8 text-xs'>SOCIAL MEDIA</p>
            <div className='flex gap-x-4'>
              {socialMediaLinks.map(({ href, label, logo }) => (
                <UnstyledLink key={`${href}${label}`} href={href}>
                  {logo}
                </UnstyledLink>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
