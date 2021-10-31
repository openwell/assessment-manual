import Head from 'next/head';
import Landing from '../containers/Landing';
// import { questionsArray } from '../constants';

export default function Home({ questionsArray }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing questionsArray={questionsArray} />
    </>
  );
}
// export async function getStaticProps(context) {
//   return {
//     props: { questionsArray},
//   };
// }
export async function getServerSideProps(context) {
  const res = await fetch(
    'https://manual-case-study.herokuapp.com/questionnaires/972423.json'
  );
  const { questions } = await res.json();

  return {
    props: { questionsArray: questions },
  };
}
