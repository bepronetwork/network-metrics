import '@styles/styles.scss'
import type { AppProps } from 'next/app'
import NavBar from '@components/nav-bar';
import PageHeader from '@components/page-header';
import Container from '@components/container';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <NavBar />
    <PageHeader />
    <Container background="body">
      <Component {...pageProps} />
    </Container>
  </>
}

export default MyApp
