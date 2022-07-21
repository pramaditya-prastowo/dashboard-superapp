import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta name="description" content="Dashboard SuperApp" />
        <link rel="icon" href="/IJTB.ico" />
        <title>Dashboard SuperApp</title>
      </Head>
      <body>
        <Component {...pageProps} />
      </body>
    </div>
  );
}

export default MyApp;
