import React, { useState } from 'react';
import Hero from '../components/landing/Hero';
import Main from '../components/landing/Main';
import Footer from '../components/landing/Footer';
import Quiz from './Quiz';
import PropTypes from 'prop-types';

export default function Landing({ questionsArray }) {
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
        showModal={showModal}
        setModal={setModal}
      />
    </>
  );
}
Landing.propTypes = {
  questionsArray: PropTypes.array.isRequired,
};
