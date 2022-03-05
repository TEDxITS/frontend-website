/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import { Sling as Hamburger } from 'hamburger-react';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import {
  pageLinks,
  socialMediaLinks,
  socialMediaLinksDark,
} from '@/data/links';

import HeaderLink from '../links/HeaderLink';
import UnstyledLink from '../links/UnstyledLink';

//#region  //*=========== Type ===========
type HeaderProps = {
  topBreakpoint?: number;
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
        'sticky top-0 z-50 bg-gradient-to-b from-transparent to-transparent transition-all duration-700 ease-in',
        {
          'from-cdark/60 backdrop-blur-sm ': isNavbarScrolled && !isDark,
          ' backdrop-blur-sm ': isNavbarScrolled && isDark,
        }
      )}
    >
      <div className='layout flex items-center h-16'>
        <nav className='w-full'>
          {/* Desktop View Navbar */}
          <div className='hidden w-full lg:block'>
            <div className='flex justify-between items-center w-full h-full'>
              <UnstyledLink href='/'>
                <NavigationLogo isDark={isDark} isNavOpen={isNavOpen} />
              </UnstyledLink>
              <ul
                className={clsxm('flex gap-8 items-center lg:gap-16', {
                  'text-cdark': isDark,
                })}
              >
                {pageLinks.map(({ href, label }) => (
                  <li key={`${href}${label}`}>
                    <HeaderLink href={href} className='/ font-fivo text-lg'>
                      {label}
                    </HeaderLink>
                  </li>
                ))}
              </ul>
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
          <div className='block relative items-center h-16 lg:hidden'>
            <div className='flex absolute inset-0 z-40 justify-between items-center w-full'>
              <UnstyledLink href='/'>
                <NavigationLogo isDark={isDark} isNavOpen={isNavOpen} />
              </UnstyledLink>
              <ul className='flex justify-between items-center space-x-4'>
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
                className='/ bg-cdark/90 fixed inset-0 z-30 h-screen transition-all'
              >
                <div className='/ layout min-h-main flex flex-col justify-center items-end pt-16'>
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
