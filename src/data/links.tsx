import InstagramLogoIllustration from '@/assets/svg/InstagramLogoIllustration';
import LinkedinLogoIllustration from '@/assets/svg/LinkedinLogoIllustration';
import TwitterLogoIllustration from '@/assets/svg/TwitterLogoIllustration';
import YoutubeLogoIllustration from '@/assets/svg/YoutubeLogoIllustration';

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
  { href: '/committee', label: 'Our Committee' },
];

export const socialMediaLinks: SoialMediaLinkType[] = [
  {
    href: '/',
    label: 'Instagram',
    logo: (
      <InstagramLogoIllustration
        className='/ h-10 md:h-7 hover:cursor-pointer'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
  {
    href: '/',
    label: 'Twitter',
    logo: (
      <TwitterLogoIllustration
        className='/ h-10 md:h-7 hover:cursor-pointer'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
  {
    href: '/',
    label: 'LinkedIn',
    logo: (
      <LinkedinLogoIllustration
        className='/ h-10 md:h-7 hover:cursor-pointer'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
  {
    href: '/',
    label: 'Youtube',
    logo: (
      <YoutubeLogoIllustration
        className='/ h-10 md:h-7 hover:cursor-pointer'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
];
//#endregion  //*======== Link Data ===========
