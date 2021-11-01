import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import parse from 'html-react-parser';
import YesSrc from '../../assets/svgs/correct.svg';
import NoSrc from '../../assets/svgs/wrong.svg';
import { MyNextButton, MyPrevButton } from '../common/Button';
import { alphabetsArray } from '../../constants';
import PropTypes from 'prop-types';

export default function Question({
  nextHandler,
  prevHandler,
  quesIndex,
  selectedHandler,
  questionObject,
}) {
  const { question, options, selectedOptionIndex, isRejection } =
    questionObject;
  const showButton = quesIndex != 0;
  const isBtnDisabled = selectedOptionIndex != undefined && !isRejection;
  return (
    <Container>
      <header>
        <h4>{question}</h4>
      </header>
      {isRejection && (
        <ErrorNotification>
          <h5>
            “Unfortunately, we are unable to prescribe this medication for you.
            This is because finasteride can alter the PSA levels, which maybe
            used to monitor for cancer. You should discuss this further with
            your GP or specialist if you would still like this medication.”
          </h5>
        </ErrorNotification>
      )}

      {typeof options[0].value == 'boolean' ? (
        <ChoiceWrapper>
          {options.map((elem, i) => {
            const isSelected = selectedOptionIndex == i ? true : false;
            return (
              <YesNoBox
                key={'id_' + i}
                onClick={() => selectedHandler(i)}
                selected={isSelected}
              >
                <Image
                  src={elem.display == 'Yes' ? YesSrc : NoSrc}
                  alt={elem.display}
                  width={60}
                  height={60}
                />
                <> {elem.display}</>
                <ImageSpan selected={isSelected}>{alphabetsArray[i]}</ImageSpan>
              </YesNoBox>
            );
          })}
        </ChoiceWrapper>
      ) : (
        <ImageGrid>
          {options.map((elem, i) => {
            const isSelected = selectedOptionIndex == i ? true : false;
            return (
              <ImageWrapper
                key={'id_' + i}
                onClick={() => selectedHandler(i)}
                selected={isSelected}
              >
                {parse(elem.display)}
                <ImageTitle>{elem.value}</ImageTitle>
                <ImageSpan selected={isSelected}>{alphabetsArray[i]}</ImageSpan>
              </ImageWrapper>
            );
          })}
        </ImageGrid>
      )}

      <NavButtons showButton={showButton}>
        {showButton && <MyPrevButton handler={prevHandler}>Back</MyPrevButton>}
        <MyNextButton handler={nextHandler} disabled={!isBtnDisabled}>
          Proceed
        </MyNextButton>
      </NavButtons>
    </Container>
  );
}

const Container = styled.section`
  max-width: 60rem;
  margin: 0 auto;
  h4 {
    padding: 2rem 0;
    text-align: center;
  }
`;
const ErrorNotification = styled.section`
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  border: thin solid ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem;
  margin-bottom: 1rem;
`;
const NavButtons = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 5rem 0;
  ${({ showButton }) =>
    !showButton &&
    css`
      justify-content: center;
    `}
`;
const ChoiceWrapper = styled.section`
  display: flex;
  justify-content: center;
  grid-gap: 4rem;
`;
const YesNoBox = styled.button`
  padding: 2rem 4rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  font-size: 3rem;
  position: relative;
  display: grid;
  color: ${({ theme }) => theme.colors.primary};
  border: thin solid ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  ${({ selected }) =>
    selected &&
    css`
      border: thin solid ${({ theme }) => theme.colors.primary};
    `}
`;
const ImageTitle = styled.p`
  font-size: 1.4rem;
  padding: 1rem 0;
`;
const ImageGrid = styled.section`
  max-width: 50rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-gap: 2rem;
  margin: 0 auto;
`;

const ImageWrapper = styled.figure`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  text-align: center;
  cursor: pointer;
  border: thin solid ${({ theme }) => theme.colors.white};
  &:hover {
    opacity: 0.5;
  }
  ${({ selected }) =>
    selected &&
    css`
      border: thin solid ${({ theme }) => theme.colors.primary};
    `}
`;
const ImageSpan = styled.span`
  padding: 0.2rem 0.5rem;
  border: thin solid ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;
  position: absolute;
  inset: 0.5rem 0.2rem;
  width: 2rem;
  height: 2rem;
  font-weight: 600;
  font-size: 1rem;
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    `}
`;

Question.propTypes = {
  children: PropTypes.node,
  showModal: PropTypes.bool,
  nextHandler: PropTypes.func.isRequired,
  prevHandler: PropTypes.func.isRequired,
  quesIndex: PropTypes.number.isRequired,
  selectedHandler: PropTypes.func.isRequired,
  questionObject: PropTypes.object,
};
