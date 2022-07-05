import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import store from '../store/store';
import {MainHeader} from '../containers/mainHeader';
import Head from 'next/head';
import {useRouter} from 'next/router';

function MyApp({Component, pageProps}: AppProps) {
  const route =useRouter();


  return (
    <>
      <Head>
        <title>ServerLess</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/serverFav.png" />
      </Head>
      <Provider store={store}>
        {route.asPath=='/' &&<MainHeader/>}
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
