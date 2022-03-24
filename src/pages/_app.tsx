import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import * as React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import '@/styles/globals.css';
import 'react-quill/dist/quill.snow.css';

import * as gtag from '@/lib/gtag';

import DismissableToast from '@/components/DismissableToast';

function MyApp({ Component, pageProps, router }: AppProps) {
  const gtagRouter = useRouter();
  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    gtagRouter.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      gtagRouter.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [gtagRouter.events]);
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ParallaxProvider>
        <AnimatePresence exitBeforeEnter>
          <DismissableToast />
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
