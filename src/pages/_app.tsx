import Head from 'next/head';
import type { AppProps } from 'next/app';
import { PageWithLayout } from 'types/PageWithLayout';

import 'styles/globals.scss';
import 'swiper/css/bundle';

// FIXME Переделать db на фейковый на https://fakerjs.dev/guide/usage.html

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>Айболит</title>
        <meta name="description" content="Айболит круглосуточная ветклиника" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
