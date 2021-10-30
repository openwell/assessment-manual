import React, { useEffect, useState, useCallback } from 'react';
import Overlay from '../components/quiz/Overlay';
import Question from '../components/quiz/Question';
import cloneDeep from 'lodash.clonedeep';
import Result from '../components/quiz/Result';

export default function Quiz({
  alphabetsArray,
  questionsArray,
  showModal,
  setModal,
}) {
  const [questions, setQuestions] = useState([]);
  const [quesIndex, setQuesIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [disableNextBtn, setDisableNextBtn] = useState(true);

  const cloneArrayHandler = (questionsArray) => {
    const clonedQues = questionsArray?.map((question) => {
      return {
        ...question,
        selectedOptionIndex: undefined,
        isRejection: false,
      };
    });
    setQuestions(clonedQues);
  };

  const memoizedQuestionCallback = useCallback(() => {
    cloneArrayHandler(questionsArray);
  }, [questionsArray]);

  useEffect(() => {
    memoizedQuestionCallback();
    return () => {};
  }, [memoizedQuestionCallback]);

  const questionLength = questions?.length;

  const nextHandler = () => {
    if (quesIndex < questionLength - 1) {
      setQuesIndex((prev) => prev + 1);
      setDisableNextBtn(true);
    } else {
      setShowResult(true);
    }
  };
  const prevHandler = () => {
    if (quesIndex > 0) {
      setQuesIndex((prev) => prev - 1);
    }
  };
  const selectedHandler = (optionIndex) => {
    const cloneState = cloneDeep(questions);
    const isRejection = cloneState[quesIndex].options[optionIndex].isRejection;

    cloneState[quesIndex].selectedOptionIndex = optionIndex;
    cloneState[quesIndex].isRejection = isRejection;

    setQuestions(cloneState);

    if (!isRejection) {
      setDisableNextBtn(false);
      nextHandler();
    } else {
      setDisableNextBtn(true);
    }
  };
  const endHandler = () => {
    setModal(false);
    setQuesIndex(0);
    setShowResult(false);
    cloneArrayHandler(questionsArray);
    document.body.style.overflow = 'unset';
  };

  return (
    <Overlay showModal={showModal}>
      {showResult ? (
        <Result endHandler={endHandler} />
      ) : (
        <Question
          disableNextBtn={disableNextBtn}
          alphabetsArray={alphabetsArray}
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
