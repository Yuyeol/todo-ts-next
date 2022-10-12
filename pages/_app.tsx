import { RecoilRoot } from 'recoil';
import { Global } from '@emotion/react';
import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import global from 'styles/GlobalStyle';
import Header from 'components/header';
import Menu from 'components/header/Menu';

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Global styles={global} />
      <Layout>
        <Header />
        <Menu />
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
