import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import * as React from 'react';
import { QueryClient, QueryClientProvider, QueryOptions } from 'react-query';
import { ParallaxProvider } from 'react-scroll-parallax';

import '@/styles/globals.css';
import 'react-quill/dist/quill.snow.css';

import axiosClient from '@/lib/axios';
import * as gtag from '@/lib/gtag';

import DismissableToast from '@/components/DismissableToast';
import PrivateRoute from '@/components/PrivateRoute';

const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
  const { data } = await axiosClient.get(`${queryKey?.[0]}`);
  return data;
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

type AppAuthProps = AppProps & {
  Component: Pick<AppProps, 'Component'> & Partial<{ permission: 'auth' }>;
};

function MyApp({ Component, pageProps, router }: AppAuthProps) {
  //#region  //*=========== Google Analytics ===========
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
  //#endregion  //*======== Google Analytics ===========

  return (
    <QueryClientProvider client={queryClient}>
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
      {/* Gtag -- end */}
      <ParallaxProvider>
        {Component.permission ? (
          <AnimatePresence>
            <PrivateRoute permission={Component.permission} key={1}>
              <React.Fragment>
                <DismissableToast />
                <Component {...pageProps} key={router.route} />
              </React.Fragment>
            </PrivateRoute>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <DismissableToast />
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        )}
      </ParallaxProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
