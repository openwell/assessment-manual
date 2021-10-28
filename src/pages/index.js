import Head from 'next/head';
import Landing from '../containers/Landing';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  );
}
