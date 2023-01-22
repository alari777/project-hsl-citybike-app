import type { AppProps } from 'next/app';
import Layout from '@/components/Layout/Layout';
import '@/styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default MyApp;
