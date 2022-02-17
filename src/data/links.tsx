import InstagramLogoIllustration from '@/assets/svg/InstagramLogoIllustration';
import LinkedinLogoIllustration from '@/assets/svg/LinkedinLogoIllustration';
import TwitterLogoIllustration from '@/assets/svg/TwitterLogoIllustration';

//#region  //*=========== Type ===========
type LinkType = {
  href: string;
  label: string;
};

type SoialMediaLinkType = LinkType & {
  logo: React.ReactNode;
};
//#endregion  //*======== Type ===========

//#region  //*=========== Link Data ===========
export const pageLinks: LinkType[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  // { href: '/join-us', label: 'Be Part of Us!' },
  { href: '/merch', label: 'Merchandise⭐' },
];

export const socialMediaLinks: SoialMediaLinkType[] = [
  {
    href: 'https://www.instagram.com/tedxits/',
    label: 'Instagram',
    logo: (
      <InstagramLogoIllustration
        className='/ h-10 md:h-7 hover:cursor-pointer'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
  {
    href: 'https://twitter.com/TEDxITS',
    label: 'Twitter',
    logo: (
      <TwitterLogoIllustration
        className='/ h-10 md:h-7 hover:cursor-pointer'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
  {
    href: 'https://www.linkedin.com/company/tedxits/',
    label: 'LinkedIn',
    logo: (
      <LinkedinLogoIllustration
        className='/ h-10 md:h-7 hover:cursor-pointer'
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
        className='/ h-10 md:h-7 hover:cursor-pointer'
        pathClassName='fill-cdark duration-150 transition-all'
      />
    ),
  },
  {
    href: 'https://twitter.com/TEDxITS',
    label: 'Twitter',
    logo: (
      <TwitterLogoIllustration
        className='/ h-10 md:h-7 hover:cursor-pointer'
        pathClassName='fill-cdark duration-150 transition-all'
      />
    ),
  },
  {
    href: 'https://www.linkedin.com/company/tedxits/',
    label: 'LinkedIn',
    logo: (
      <LinkedinLogoIllustration
        className='/ h-10 md:h-7 hover:cursor-pointer'
        pathClassName='fill-cdark duration-150 transition-all'
      />
    ),
  },
];
//#endregion  //*======== Link Data ===========
