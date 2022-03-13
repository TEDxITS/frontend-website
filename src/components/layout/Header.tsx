/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import { Sling as Hamburger } from 'hamburger-react';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import {
  pageLinks,
  socialMediaLinks,
  socialMediaLinksDark,
  eventLinks,
} from '@/data/links';

import HeaderLink from '../links/HeaderLink';
import UnstyledLink from '../links/UnstyledLink';

// import addition from headless ui examples
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';

//#region  //*=========== Type ===========
type HeaderProps = {
  topBreakpoint?: number;
  // (tulisan warna hitam)
  isDark?: boolean;
};
//#endregion  //*======== Type ===========

export default function Header({ topBreakpoint, isDark = false }: HeaderProps) {
  //#region  //*=========== Navigation Mobile State ===========
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);
  //#endregion  //*======== Navigation Mobile State ===========

  //#region  //*=========== Navigation Scrolled State ===========
  const [isNavbarScrolled, setisNavbarScrolled] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      window.scrollY < 64 + (topBreakpoint ? topBreakpoint : 0)
        ? setisNavbarScrolled(false)
        : setisNavbarScrolled(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //#endregion  //*======== Navigation Scrolled State ===========

  return (
    <header
      className={clsxm(
        'bg-gradient-to-b duration-700 ease-in from-transparent sticky to-transparent top-0 transition-all z-50',
        {
          'from-cdark/60 backdrop-blur-sm ': isNavbarScrolled && !isDark,
          ' backdrop-blur-sm ': isNavbarScrolled && isDark,
        }
      )}
    >
      <div className='flex h-16 items-center layout'>
        <nav className='w-full'>
          {/* Desktop View Navbar */}
          <div className='hidden w-full lg:block'>
            <div className='flex h-full items-center justify-between w-full'>
              <UnstyledLink href='/'>
                <NavigationLogo isDark={isDark} isNavOpen={isNavOpen} />
              </UnstyledLink>
              {/* list starting here */}
              <ul
                className={clsxm('flex gap-8 items-center lg:gap-16', {
                  'text-cdark': isDark,
                })}
              >
                {pageLinks.map(({ href, label }) => (
                  <li key={`${href}${label}`}>
                    {/* header link here */}
                    <HeaderLink href={href} className='/ font-fivo text-lg'>
                      {label}
                    </HeaderLink>
                  </li>
                ))}
                {/* Pop Over starting here */}
                <li>
                  <HeaderLink href='#' className='/ font-fivo text-lg'>
                    <Popover className='relative'>
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={`
                ${open ? '' : 'text-opacity-90'}
                text-black dark:text-white group  px-3 inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                          >
                            <span className='font-fivo text-lg'>Event</span>
                            <ChevronDownIcon
                              className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
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
                            <Popover.Panel className='-translate-x-1/2 absolute left-1/2 max-w-sm mt-3 px-4 transform w-72 z-10 sm:px-0 lg:max-w-3xl'>
                              <div className='g overflow-hidden ring-opacity-5'>
                                <div className='bg-[#efedea] bg-bottom bg-no-repeat border-0 gap-4 grid pb-2 pt-5 px-5 relative'>
                                  {eventLinks.map((item, index) => (
                                    <HeaderLink
                                      href={item.href}
                                      className={clsxm(
                                        'font-fivo text-black text-lg',
                                        {
                                          'border-b-[3px] border-black divide-y-2 space-y-2 border-dashed':
                                            index !== eventLinks.length - 1,
                                        }
                                      )}
                                      key={index}
                                    >
                                      {item.label}
                                    </HeaderLink>
                                    // <a
                                    //   key={index}
                                    //   href={item.href}
                                    //   className='-m-3 duration-150 ease-in-out flex items-center p-2 rounded-lg transition hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50 focus-visible:ring-orange-500'
                                    // >
                                    //   {/* <div className='flex flex-shrink-0 h-10 items-center justify-center text-white w-10 sm:h-12 sm:w-12'>
                                    //     <item.icon aria-hidden='true' />
                                    //   </div> */}
                                    //   <div className='ml-4'>
                                    //     <p className='font-medium text-gray-900 text-sm'>
                                    //       {item.label}
                                    //     </p>
                                    //     {/* <p className='text-gray-500 text-sm'>
                                    //       {item.description}
                                    //     </p> */}
                                    //   </div>
                                    // </a>
                                  ))}
                                </div>
                                <div className='bg-no-repeat bg-ticketbottom h-48 w-full'></div>
                                {/* <div className='bg-gray-50 p-4'>
                                  <a
                                    href='##'
                                    className='duration-150 ease-in-out flow-root px-2 py-2 rounded-md transition hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50 focus-visible:ring-orange-500'
                                  >
                                    <span className='flex items-center'>
                                      <span className='font-medium text-gray-900 text-sm'>
                                        Documentation
                                      </span>
                                    </span>
                                    <span className='block text-gray-500 text-sm'>
                                      Start integrating products and tools
                                    </span>
                                  </a>
                                </div> */}
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </HeaderLink>
                </li>
              </ul>
              {/* edit here */}
              {/* <ul
                className={clsxm('flex gap-8 items-center lg:gap-16', {
                  'text-cdark': isDark,
                })}
              >
                {eventLinks.map(({ href, label }) => (
                  <li key={`${href}${label}`}>
                    <HeaderLink href={href} className='/ font-fivo text-lg'>
                      {label}
                    </HeaderLink>
                  </li>
                ))}
              </ul> */}

              <ul className='flex gap-4 items-center'>
                {(isDark ? socialMediaLinksDark : socialMediaLinks).map(
                  ({ href, label, logo }) => (
                    <UnstyledLink key={`${href}${label}`} href={href}>
                      {logo}
                    </UnstyledLink>
                  )
                )}
              </ul>
            </div>
          </div>
          {/* Mobile View Navbar */}
          <div className='block h-16 items-center relative lg:hidden'>
            <div className='absolute flex inset-0 items-center justify-between w-full z-40'>
              <UnstyledLink href='/'>
                <NavigationLogo isDark={isDark} isNavOpen={isNavOpen} />
              </UnstyledLink>
              <ul className='flex items-center justify-between space-x-4'>
                <button
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  className={clsxm('cursor-pointer', {
                    'text-cdark': isDark && !isNavOpen,
                  })}
                >
                  <Hamburger />
                </button>
              </ul>
            </div>
            {isNavOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className='/ bg-cdark/90 fixed h-screen inset-0 transition-all z-30'
              >
                <div className='/ flex flex-col items-end justify-center layout min-h-main pt-16'>
                  {/* anchor link */}
                  <motion.ul
                    className='flex flex-col gap-8'
                    initial={{
                      y: 60,
                    }}
                    animate={{
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.6, -0.05, 0.01, 0.99],
                      },
                    }}
                  >
                    {pageLinks.map(({ href, label }) => (
                      <li key={`${href}${label}`}>
                        <p className='text-right'>
                          <HeaderLink href={href} className='text-2xl'>
                            <span className='font-fivo text-2xl text-right'>
                              {label}
                            </span>
                          </HeaderLink>
                        </p>
                      </li>
                    ))}
                  </motion.ul>
                  {/* <motion.ul
                    className='flex flex-col pt-8'
                    initial={{
                      y: 60,
                    }}  
                    animate={{
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.6, -0.05, 0.01, 0.99],
                      },
                    }}
                  >
                    <li>
                      <p className='text-right'>
                        <HeaderLink href={'#'} className='text-2xl'>
                          <span className='font-fivo text-2xl text-right'>
                            dua
                          </span>
                        </HeaderLink>
                      </p>
                    </li>
                  </motion.ul> */}
                  <motion.ul
                    className='flex gap-4 items-center mt-8'
                    initial={{
                      y: 60,
                    }}
                    animate={{
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.6, -0.05, 0.01, 0.99],
                        delay: 0.5,
                      },
                    }}
                  >
                    {socialMediaLinks.map(({ href, label, logo }) => (
                      <UnstyledLink key={`${href}${label}`} href={href}>
                        {logo}
                      </UnstyledLink>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavigationLogo({
  isDark,
  isNavOpen,
}: {
  isDark: boolean;
  isNavOpen: boolean;
}) {
  return (
    <img
      src={
        isDark && !isNavOpen
          ? '/images/logo/tedxits-black.png'
          : '/images/logo/tedxits-white.png'
      }
      alt='TedxITS logo'
      className='h-12'
    />
  );
}

// adding function from examples pop over headless ui
function IconOne() {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' rx='8' fill='#FFEDD5' />
      <path
        d='M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z'
        stroke='#FB923C'
        strokeWidth='2'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z'
        stroke='#FDBA74'
        strokeWidth='2'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z'
        stroke='#FDBA74'
        strokeWidth='2'
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' rx='8' fill='#FFEDD5' />
      <path
        d='M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27'
        stroke='#FB923C'
        strokeWidth='2'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.804 30H29.1963L24.0001 21L18.804 30Z'
        stroke='#FDBA74'
        strokeWidth='2'
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' rx='8' fill='#FFEDD5' />
      <rect x='13' y='32' width='2' height='4' fill='#FDBA74' />
      <rect x='17' y='28' width='2' height='8' fill='#FDBA74' />
      <rect x='21' y='24' width='2' height='12' fill='#FDBA74' />
      <rect x='25' y='20' width='2' height='16' fill='#FDBA74' />
      <rect x='29' y='16' width='2' height='20' fill='#FB923C' />
      <rect x='33' y='12' width='2' height='24' fill='#FB923C' />
    </svg>
  );
}
