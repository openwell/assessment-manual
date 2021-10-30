import Head from 'next/head';
import Landing from '../containers/Landing';
import { questionsArray, alphabetsArray } from '../constants';

export default function Home({ questionsArray, alphabetsArray }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing
        questionsArray={questionsArray}
        alphabetsArray={alphabetsArray}
      />
    </>
  );
}
export async function getStaticProps(context) {
  return {
    props: { questionsArray, alphabetsArray },
  };
}
