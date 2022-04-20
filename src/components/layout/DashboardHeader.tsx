/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

// import addition from headless ui examples
import { Menu, Transition } from '@headlessui/react';
import { Sling as Hamburger } from 'hamburger-react';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import useAuthStore from '@/store/useAuthStore';

import HeaderLink from '../links/HeaderLink';
import UnstyledLink from '../links/UnstyledLink';
import NextImage from '../NextImage';

//#region  //*=========== Type ===========
type HeaderProps = {
  topBreakpoint?: number;
  // (tulisan warna hitam)
  isDark?: boolean;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
//#endregion  //*======== Type ===========

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'History', href: '#' },
];

export default function DashboardHeader({
  topBreakpoint,
  isDark = false,
  sidebarOpen,
  setSidebarOpen,
}: HeaderProps) {
  //#region  //*=========== Store ===========
  const isAuthenticated = useAuthStore().isAuthenticated;
  //#endregion  //*======== Store ===========
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
              {isAuthenticated && <ProfilePopover sidebarOpen={sidebarOpen} />}
            </div>
          </div>
          {/* Mobile View Navbar */}
          <div className='block relative items-center h-16 lg:hidden'>
            <div className='flex absolute inset-0 z-30 justify-between items-center'>
              {isAuthenticated ? (
                <ProfilePopover sidebarOpen={sidebarOpen} />
              ) : (
                <NavigationLogo isDark={isDark} isNavOpen={isNavOpen} />
              )}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={clsxm('ml-auto cursor-pointer', {
                  'text-cdark': isDark,
                  hidden: sidebarOpen,
                })}
              >
                <Hamburger toggled={false} />
              </button>
            </div>
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

function ProfilePopover({ sidebarOpen }: { sidebarOpen: boolean }) {
  return (
    <Menu as='div' className={clsxm('relative', { hidden: sidebarOpen })}>
      <Menu.Button
        as='button'
        className='flex items-center max-w-xs text-sm bg-white rounded-full focus:ring-clight focus:ring-2 focus:outline-none'
      >
        <span className='sr-only'>Open user menu</span>
        <NextImage
          className='aspect-h-1 aspect-w-1 overflow-hidden w-10 h-10 rounded-full'
          imgClassName={clsxm(
            ' object-cover w-full transition-all ease-in-out'
          )}
          layout='fill'
          objectFit='cover'
          alt='Melissa Gloria'
          src='https://res.cloudinary.com/tedxits/image/upload/v1646040060/team/Melissa_Gloria_Executive_Producer-Co-Lead_Organizer_jkhs8s.jpg'
        />
      </Menu.Button>

      <Transition
        as={React.Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute left-0 mt-2 w-48 drop-shadow-lg origin-top-left lg:right-0 lg:left-auto lg:origin-top-right focus:outline-none'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 559.97 50'
          >
            <defs>
              <clipPath id='a'>
                <path
                  style={{
                    fill: 'none',
                  }}
                  d='M0 0h559.97v50H0z'
                />
              </clipPath>
            </defs>
            <g
              style={{
                clipPath: 'url(#a)',
              }}
            >
              <path
                d='M560 .5V.01h-.49A17.51 17.51 0 0 0 542 17.5v.49a18.74 18.74 0 0 1-35 0v-.49A17.5 17.5 0 0 0 490 0v.49V0h-.49A17.51 17.51 0 0 0 472 17.5v.49a18.73 18.73 0 0 1-35 0v-.49A17.5 17.5 0 0 0 420 0v.49V0h-.49A17.51 17.51 0 0 0 402 17.5v.49a18.74 18.74 0 0 1-35 0v-.49A17.5 17.5 0 0 0 350 0v.49V0h-.49A17.51 17.51 0 0 0 332 17.5v.49a18.74 18.74 0 0 1-35 0v-.49A17.5 17.5 0 0 0 280 0v.49V0h-.49A17.5 17.5 0 0 0 262 17.5v.49a18.74 18.74 0 0 1-35 0v-.49A17.5 17.5 0 0 0 210 0h-.51A17.51 17.51 0 0 0 192 17.5v.49a18.74 18.74 0 0 1-35 0v-.49A17.5 17.5 0 0 0 140 0v.49V0h-.49A17.51 17.51 0 0 0 122 17.5v.49a18.74 18.74 0 0 1-35 0v-.49A17.49 17.49 0 0 0 70 0v.49V0h-.5A17.51 17.51 0 0 0 52 17.5v.49a18.74 18.74 0 0 1-35 0v-.49A17.5 17.5 0 0 0 0 0v691.99a17.5 17.5 0 0 0 17-17.49v-.49a18.74 18.74 0 0 1 35 0v.49A17.51 17.51 0 0 0 69.5 692h.5v-.49.49a17.49 17.49 0 0 0 17-17.5v-.49a18.74 18.74 0 0 1 35 0v.49a17.51 17.51 0 0 0 17.5 17.5h.5v-.49.49a17.5 17.5 0 0 0 17-17.49v-.49a18.74 18.74 0 0 1 35 0v.49a17.51 17.51 0 0 0 17.5 17.5h.5a17.5 17.5 0 0 0 17-17.49v-.49a18.74 18.74 0 0 1 35 0v.49A17.5 17.5 0 0 0 279.48 692h.52v-.49.49a17.5 17.5 0 0 0 17-17.49v-.49a18.74 18.74 0 0 1 35 0v.49a17.51 17.51 0 0 0 17.5 17.5h.5v-.49.49a17.5 17.5 0 0 0 17-17.49v-.49a18.74 18.74 0 0 1 35 0v.49a17.51 17.51 0 0 0 17.5 17.5h.5v-.49.49a17.5 17.5 0 0 0 17-17.49v-.49a18.73 18.73 0 0 1 35 0v.49a17.51 17.51 0 0 0 17.5 17.5h.5v-.49.49a17.5 17.5 0 0 0 17-17.49v-.49a18.74 18.74 0 0 1 35 0v.49a17.51 17.51 0 0 0 17.5 17.5h.5V.5Z'
                className='fill-[#333333] first-letter:'
              />
            </g>
          </svg>
          <div className='bg-[#333333]'>
            {userNavigation.map((item, i) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <HeaderLink
                    animated={false}
                    href={item.href}
                    className={clsxm(
                      'text-clight block px-4 py-2 mx-2 text-sm rounded-sm',
                      {
                        'bg-cred': active,
                      }
                    )}
                  >
                    {item.name}
                  </HeaderLink>
                )}
              </Menu.Item>
            ))}
            <hr className='my-2 border-dashed' />
            <Menu.Item>
              {({ active }) => (
                <HeaderLink
                  animated={false}
                  href={'/logout'}
                  className={clsxm(
                    'text-clight block px-4 py-2 mx-2 text-sm rounded-sm',
                    {
                      'bg-cdark first-letter:': active,
                    }
                  )}
                >
                  Log Out
                </HeaderLink>
              )}
            </Menu.Item>
          </div>
          <svg
            className='w-full'
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 559.97 50'
          >
            <defs>
              <clipPath id='a'>
                <path
                  style={{
                    fill: 'none',
                  }}
                  d='M-.02 0h560v50h-560z'
                />
              </clipPath>
            </defs>
            <g
              style={{
                clipPath: 'url(#a)',
              }}
            >
              <path
                d='M560-641.5v-.5h-.5a17.46 17.46 0 0 0-17.5 17.5v.5a18.86 18.86 0 0 1-17 12 19 19 0 0 1-18-12v-.5a17.55 17.55 0 0 0-17-17.5h-.5a17.46 17.46 0 0 0-17.5 17.5v.5a18.85 18.85 0 0 1-18 12 18.86 18.86 0 0 1-17-12v-.5a17.55 17.55 0 0 0-17-17.5h-.5a17.46 17.46 0 0 0-17.5 17.5v.5a18.85 18.85 0 0 1-18 12 18.86 18.86 0 0 1-17-12v-.5a17.55 17.55 0 0 0-17-17.5h-.5a17.46 17.46 0 0 0-17.5 17.5v.5a18.85 18.85 0 0 1-18 12 18.86 18.86 0 0 1-17-12v-.5a17.55 17.55 0 0 0-17-17.5h-.5a17.46 17.46 0 0 0-17.5 17.5v.5a18.85 18.85 0 0 1-18 12 18.86 18.86 0 0 1-17-12v-.5a17.55 17.55 0 0 0-17-17.5h-.5a17.46 17.46 0 0 0-17.5 17.5v.5a18.85 18.85 0 0 1-18 12 18.86 18.86 0 0 1-17-12v-.5a17.55 17.55 0 0 0-17-17.5h-.5a17.46 17.46 0 0 0-17.5 17.5v.5a18.86 18.86 0 0 1-17 12 19 19 0 0 1-18-12v-.5A17.55 17.55 0 0 0 70-642h-.5A17.46 17.46 0 0 0 52-624.5v.5a18.86 18.86 0 0 1-17 12 19 19 0 0 1-18-12v-.5A17.55 17.55 0 0 0 0-642V50a17.55 17.55 0 0 0 17-17.5V32a18.76 18.76 0 0 1 35 0v.5A17.46 17.46 0 0 0 69.48 50H70a17.55 17.55 0 0 0 17-17.5V32a18.76 18.76 0 0 1 35 0v.5A17.46 17.46 0 0 0 139.48 50h.5a17.55 17.55 0 0 0 17-17.5V32a18.76 18.76 0 0 1 35 0v.5a17.46 17.46 0 0 0 17.5 17.5h.5a17.55 17.55 0 0 0 17-17.5V32a18.76 18.76 0 0 1 35 0v.5a17.46 17.46 0 0 0 17.5 17.5h.5a17.55 17.55 0 0 0 17-17.5V32a18.76 18.76 0 0 1 35 0v.5a17.46 17.46 0 0 0 17.5 17.5h.5a17.55 17.55 0 0 0 17-17.5V32a18.76 18.76 0 0 1 35 0v.5a17.46 17.46 0 0 0 17.5 17.5h.5a17.55 17.55 0 0 0 17-17.5V32a18.76 18.76 0 0 1 35 0v.5a17.46 17.46 0 0 0 17.5 17.5h.5a17.55 17.55 0 0 0 17-17.5V32a18.76 18.76 0 0 1 35 0v.5a17.46 17.46 0 0 0 17.5 17.5h.5v-691.5Z'
                className='fill-[#333333]'
              />
            </g>
          </svg>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
