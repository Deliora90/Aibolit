import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store, wrapper } from 'state/store';
import { PageWithLayout } from 'types/PageWithLayout';
import { NotificationProvider } from 'components/Notification';

import 'styles/globals.scss';
import 'swiper/css/bundle';

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { store: wrappedStore } = wrapper.useWrappedStore(store);
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Provider store={wrappedStore}>
      <Head>
        <title>Айболит</title>
        <meta name="description" content="Айболит круглосуточная ветклиника" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NotificationProvider>
        {getLayout(<Component {...pageProps} />)}
      </NotificationProvider>
      <div id="modal-root" />
    </Provider>
  );
}
