import { RecoilRoot } from 'recoil';
import { Global } from '@emotion/react';
import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import global from 'styles/GlobalStyle';

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Global styles={global} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
