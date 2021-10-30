import React, { useState } from 'react';
import Hero from '../components/landing/Hero';
import Main from '../components/landing/Main';
import Footer from '../components/landing/Footer';
import Quiz from './Quiz';

export default function Landing({ questionsArray, alphabetsArray }) {
  const [showModal, setModal] = useState(false);
  const showModalHandler = () => {
    setModal(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <Hero showModalHandler={showModalHandler} />
      <Main />
      <Footer />
      <Quiz
        questionsArray={questionsArray}
        alphabetsArray={alphabetsArray}
        showModal={showModal}
        setModal={setModal}
      />
    </>
  );
}
