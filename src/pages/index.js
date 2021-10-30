import Head from 'next/head';
import Landing from '../containers/Landing';
import { QUESTIONS_LIST } from '../constants/sampleQuestions';
import { LETTERS } from '../constants/letters';

export default function Home({ questionsList, LETTERS }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing questionsList={questionsList} LETTERS={LETTERS} />
    </>
  );
}
export async function getStaticProps(context) {
  return {
    props: { questionsList: QUESTIONS_LIST, LETTERS: LETTERS },
  };
}
