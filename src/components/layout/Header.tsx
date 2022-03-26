/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

// import addition from headless ui examples
import { motion } from 'framer-motion';
import { Sling as Hamburger } from 'hamburger-react';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import {
  aboutLinks,
  eventLinks,
  merchLinks,
  pageLinks,
  socialMediaLinks,
  socialMediaLinksDark,
} from '@/data/links';

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
                {merchLinks.map(({ href, label }) => (
                  <li key={`${href}${label}`}>
                    {/* header link here */}
                    <HeaderLink href={href} className='/ font-fivo px text-lg'>
                      {label}
                    </HeaderLink>
                  </li>
                ))}
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
                className='/ bg-cdark/90 fixed h-screen inset-0 pl-3 transition-all z-30'
              >
                <div className='/ flex flex-col justify-center layout min-h-main pt-16'>
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
                    {merchLinks.map(({ href, label }) => (
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
