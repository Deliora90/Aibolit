import Head from "next/head";
import type { AppProps } from "next/app";
import { Layout } from "components/Layout";
import "styles/globals.scss";
// FIXME Переделать db на фейковый на https://fakerjs.dev/guide/usage.html
function MyApp({ Component, pageProps }: AppProps) {
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
