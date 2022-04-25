/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

// import addition from headless ui examples
import { motion } from 'framer-motion';
import { Sling as Hamburger } from 'hamburger-react';
import * as React from 'react';
import { BsPerson } from 'react-icons/bs';

import clsxm from '@/lib/clsxm';

import {
  aboutLinks,
  eventLinks,
  merchLinks,
  pageLinks,
  socialMediaLinks,
  socialMediaLinksDark,
} from '@/data/links';

import { LOGIN_PAGE } from '@/constant/links';

import HeaderLink from '../links/HeaderLink';
import MultipleHeaderLink from '../links/MultipleHeaderLink';
import MultipleMobileLinks from '../links/MultipleMobileLinks';
import UnstyledLink from '../links/UnstyledLink';

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
              {/* list starting here */}
              <ul
                className={clsxm('flex gap-8 items-center lg:gap-14', {
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

                {/* about */}
                <MultipleHeaderLink
                  isDark={isDark}
                  linksData={aboutLinks}
                  title='About'
                />
                {/* Event */}
                <MultipleHeaderLink
                  isDark={isDark}
                  linksData={eventLinks}
                  title='Events'
                />

                {/* merchandise */}
                <MultipleHeaderLink
                  isDark={isDark}
                  linksData={merchLinks}
                  title='Order Now'
                />
              </ul>
              {/* edit here */}

              <ul className='flex gap-4 items-center'>
                {(isDark ? socialMediaLinksDark : socialMediaLinks).map(
                  ({ href, label, logo }) => (
                    <UnstyledLink key={`${href}${label}`} href={href}>
                      {logo}
                    </UnstyledLink>
                  )
                )}
              </ul>
              <UnstyledLink
                href={LOGIN_PAGE}
                className={clsxm(
                  'font-fivo flex gap-1 items-center px-4 py-1 text-base rounded-full transition-all duration-200 hover:bg-cred hover:text-clight ',
                  isDark ? 'bg-cdark text-clight' : 'bg-clight text-cdark'
                )}
              >
                <BsPerson size={18} />
                Login
              </UnstyledLink>
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
                className='/ bg-cdark/90 fixed inset-0 z-30 pl-3 h-screen transition-all'
              >
                <div className='/ layout min-h-main flex flex-col justify-center pt-16'>
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
                    {/* home */}
                    {pageLinks.map(({ href, label }) => (
                      <li key={`${href}${label}`}>
                        <p className='text-left'>
                          <HeaderLink href={href} className='text-2xl'>
                            <span className='font-fivo text-2xl text-right'>
                              {label}
                            </span>
                          </HeaderLink>
                        </p>
                      </li>
                    ))}
                    {/* about */}
                    <MultipleMobileLinks title='About' linksData={aboutLinks} />
                    {/* event */}
                    <MultipleMobileLinks
                      title='Events'
                      linksData={eventLinks}
                    />
                    <MultipleMobileLinks
                      linksData={merchLinks}
                      title='Order Now'
                    />
                  </motion.ul>
                  <motion.ul
                    className='flex flex-row-reverse gap-4 mt-8'
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
                    <UnstyledLink
                      href={LOGIN_PAGE}
                      className={clsxm(
                        'font-fivo flex gap-1 items-center px-4 py-1 text-base rounded-full transition-all duration-200 hover:bg-cred hover:text-clight ',
                        isDark ? 'bg-cdark text-clight' : 'bg-clight text-cdark'
                      )}
                    >
                      <BsPerson size={18} />
                      Login
                    </UnstyledLink>
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
