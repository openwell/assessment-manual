import React, { useState } from 'react';
import Hero from '../components/landing/Hero';
import Main from '../components/landing/Main';
import Footer from '../components/landing/Footer';
import Quiz from './Quiz';

export default function Landing({ questionsList, LETTERS }) {
  const [showModal, setModal] = useState(false);
  const showModalHandler = () => {
    setModal(true);
  };

  return (
    <>
      <Hero showModalHandler={showModalHandler} />
      <Main />
      <Footer />
      <Quiz
        questionsList={questionsList}
        LETTERS={LETTERS}
        showModal={showModal}
        setModal={setModal}
      />
    </>
  );
}
