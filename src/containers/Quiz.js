import React, { useEffect, useState } from 'react';
import Overlay from '../components/quiz/Overlay';
import Question from '../components/quiz/Question';
import cloneDeep from 'lodash.clonedeep';
import Result from '../components/quiz/Result';

export default function Quiz({ LETTERS, questionList }) {
  const [questions, setQuestions] = useState([]);
  const [quesIndex, setQuesIndex] = useState(0);
  const [showModal, setModal] = useState(true);
  const [showResult, setShowResult] = useState({
    show: false,
    isRejection: undefined,
  });
  useEffect(() => {
    const cloneArray = () => {
      const clonedQues = questionList.map((question) => {
        return { ...question, selectedIndex: undefined };
      });
      setQuestions(clonedQues);
    };
    cloneArray();
    return () => {};
  }, [questionList]);
  const questionLength = questions.length;
  const nextHandler = () => {
    if (quesIndex < questionLength - 1) {
      setQuesIndex((prev) => prev + 1);
    } else {
      setShowResult((prev) => ({
        ...prev,
        show: true,
      }));
    }
  };
  const prevHandler = () => {
    if (quesIndex > 0) {
      setQuesIndex((prev) => prev - 1);
    }
  };
  const selectedHandler = (optionIndex) => {
    const cloneState = cloneDeep(questions);
    cloneState[quesIndex].selectedIndex = optionIndex;
    setQuestions(cloneState);

    const isRejection = cloneState[quesIndex].options[optionIndex].isRejection;
    if (isRejection) {
      setShowResult((prev) => ({
        ...prev,
        isRejection: isRejection,
      }));
    }
    nextHandler();
  };
  const endHandler = () => {
    console.log('en');
    setModal(false);
  };

  return (
    <Overlay showModal={showModal}>
      {showResult.show ? (
        <Result {...showResult} endHandler={endHandler} />
      ) : (
        <Question
          LETTERS={LETTERS}
          questionObject={questions[quesIndex]}
          quesIndex={quesIndex}
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          selectedHandler={selectedHandler}
        />
      )}
    </Overlay>
  );
}
