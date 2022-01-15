import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo templateTitle='Link Shortener' />
      <main className='bg-cdark'>
        <section className=''>
          <div className='layout flex flex-col justify-center items-center py-20 max-w-sm min-h-screen'>
            <h1 className='font-pilow relative z-10 mb-1 font-extrabold'>
              404
            </h1>
            <UnderlineLink href='/' className='mt-4'>
              Back to Home
            </UnderlineLink>
          </div>
        </section>
      </main>
    </>
  );
}
