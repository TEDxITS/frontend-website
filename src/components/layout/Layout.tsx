import * as React from 'react';

import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='flex flex-col'>
      {children}
      <Footer />
    </div>
  );
}
