import '@styles/styles.scss'
import type { AppProps } from 'next/app'
import NavBar from '@components/nav-bar';
import PageHeader from '@components/page-header';
import Container from '@components/container';
import ApplicationContextProvider from '@contexts/application';

function MyApp({ Component, pageProps }: AppProps) {
  return <ApplicationContextProvider>
    <NavBar />
    <PageHeader />
    <Container background="body">
      <Component {...pageProps} />
    </Container>
  </ApplicationContextProvider>
}

export default MyApp
