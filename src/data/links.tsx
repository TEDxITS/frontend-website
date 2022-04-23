import InstagramLogoIllustration from '@/assets/svg/InstagramLogoIllustration';
import LinkedinLogoIllustration from '@/assets/svg/LinkedinLogoIllustration';
import TwitterLogoIllustration from '@/assets/svg/TwitterLogoIllustration';

//#region  //*=========== Type ===========
export type LinkType = {
  href: string;
  label: React.ReactNode;
};

type SoialMediaLinkType = LinkType & {
  logo: React.ReactNode;
};
//#endregion  //*======== Type ===========

//#region  //*=========== Link Data ===========
export const pageLinks: LinkType[] = [{ href: '/', label: 'Home' }];

// event links
export const eventLinks: LinkType[] = [
  { href: '/call-for-local-speaker', label: 'Call for Local Speakers' },
  { href: '/black-elephant-mail', label: 'Black Elephant Mail' },
  { href: '/pre-events', label: 'Pre Events' },
];

export const aboutLinks: LinkType[] = [
  {
    href: '/about',
    label: 'TEDxITS Journey',
  },
  {
    href: '/grand-theme',
    label: 'Grand Theme',
  },
  {
    href: '/meet-the-team',
    label: 'Meet The Team',
  },
];

export const merchLinks: LinkType[] = [
  {
    href: '/merch',
    label: 'Order Now!',
  },
];

export const socialMediaLinks: SoialMediaLinkType[] = [
  {
    href: 'https://www.instagram.com/tedxits/',
    label: 'Instagram',
    logo: (
      <InstagramLogoIllustration
        className='h-10 md:h-7 hover:cursor-pointer'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
  {
    href: 'https://twitter.com/TEDxITS',
    label: 'Twitter',
    logo: (
      <TwitterLogoIllustration
        className='h-10 md:h-7 hover:cursor-pointer'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
  {
    href: 'https://www.linkedin.com/company/tedxits/',
    label: 'LinkedIn',
    logo: (
      <LinkedinLogoIllustration
        className='h-10 md:h-7 hover:cursor-pointer'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
];

export const socialMediaLinksDark: SoialMediaLinkType[] = [
  {
    href: 'https://www.instagram.com/tedxits/',
    label: 'Instagram',
    logo: (
      <InstagramLogoIllustration
        className='h-10 md:h-7 hover:cursor-pointer'
        pathClassName='fill-cdark duration-150 transition-all'
      />
    ),
  },
  {
    href: 'https://twitter.com/TEDxITS',
    label: 'Twitter',
    logo: (
      <TwitterLogoIllustration
        className='h-10 md:h-7 hover:cursor-pointer'
        pathClassName='fill-cdark duration-150 transition-all'
      />
    ),
  },
  {
    href: 'https://www.linkedin.com/company/tedxits/',
    label: 'LinkedIn',
    logo: (
      <LinkedinLogoIllustration
        className='h-10 md:h-7 hover:cursor-pointer'
        pathClassName='fill-cdark duration-150 transition-all'
      />
    ),
  },
];
//#endregion  //*======== Link Data ===========
