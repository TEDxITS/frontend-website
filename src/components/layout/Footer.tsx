import React from 'react';

import { socialMediaLinks } from '@/data/links';

import UnderlineLink from '../links/UnderlineLink';

export default function Footer() {
  return (
    <div className='/ bg-footer z-10 bg-no-repeat bg-cover'>
      <footer className='flex flex-col gap-8 justify-center items-center py-16'>
        <ul className='flex gap-4 items-center'>
          {socialMediaLinks.map(({ href, label, logo }) => (
            <li key={`${href}${label}`}>{logo}</li>
          ))}
        </ul>
        <p>
          © 2022 All Rights Reserved · This independent{' '}
          <span className='text-primary-500'>
            <UnderlineLink href='https://www.ted.com/about/programs-initiatives/tedx-program'>
              TEDx
            </UnderlineLink>
          </span>{' '}
          event is operated under license from TED.
        </p>
      </footer>
    </div>
  );
}
