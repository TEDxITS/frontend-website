import { motion } from 'framer-motion';
import * as React from 'react';

import Footer from './Footer';

export default function Layout({
  children,
  showFooter = true,
}: {
  children: React.ReactNode;
  showFooter?: boolean;
}) {
  return (
    <div className='bg-cdark flex relative flex-col'>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 1 }}
        animate='animate'
        className='z-10'
      >
        {children}
      </motion.div>
      {showFooter && <Footer />}
    </div>
  );
}
