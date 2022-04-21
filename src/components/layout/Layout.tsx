import clsx from 'clsx';
import { motion } from 'framer-motion';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import DashboardHeader from './DashboardHeader';
import Footer from './Footer';
import Sidebar from './Sidebar';

type LayoutProps = {
  wrapperClassName?: string;
  withDashboard?: boolean;
  showFooter?: boolean;
  isDark?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

export default function Layout({
  children,
  wrapperClassName,
  className,
  showFooter = true,
  withDashboard = false,
  isDark = false,
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);

  if (withDashboard) {
    return (
      <div className={clsxm('bg-cdark', wrapperClassName)}>
        <Sidebar
          isDark={isDark}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div
          className={clsx(
            'bg-cdark flex flex-1 flex-col min-h-screen pt-8 lg:pl-64 lg:pt-16',
            className
          )}
        >
          <DashboardHeader
            isDark={isDark}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          {children}
          {showFooter && <Footer />}
        </div>
      </div>
    );
  } else {
    return (
      <div className={clsx('bg-cdark flex flex-col relative', className)}>
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
}
