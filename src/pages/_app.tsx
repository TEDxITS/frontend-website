import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';

import '@/styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ParallaxProvider>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ParallaxProvider>
  );
}

export default MyApp;
