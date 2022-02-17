import { motion } from 'framer-motion';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Footer from './Footer';

type LayoutProps = {
  showFooter?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

export default function Layout({
  children,
  className,
  showFooter = true,
}: LayoutProps) {
  return (
    <div className={clsxm('bg-cdark flex relative flex-col', className)}>
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
