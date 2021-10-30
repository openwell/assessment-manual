import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import parse from 'html-react-parser';
import YesSrc from '../../assets/svgs/correct.svg';
import NoSrc from '../../assets/svgs/wrong.svg';
import { MyNextButton, MyPrevButton } from '../common/Button';

export default function Question({
  nextHandler,
  alphabetsArray,
  prevHandler,
  quesIndex,
  selectedHandler,
  questionObject,
  disableNextBtn,
}) {
  const { question, options, selectedOptionIndex } = questionObject;
  const showButton = quesIndex != 0;

  return (
    <Container>
      <header>
        <h4>{question}</h4>
      </header>

      {typeof options[0].value == 'boolean' ? (
        <ChoiceWrapper>
          {options.map((elem, i) => {
            return (
              <YesNoBox
                key={'id_' + i}
                onClick={() => selectedHandler(i)}
                selected={selectedOptionIndex == i ? true : false}
              >
                <Image
                  src={elem.display == 'Yes' ? YesSrc : NoSrc}
                  alt={elem.display}
                  width={60}
                  height={60}
                />
                {elem.display} <ImageSpan>{alphabetsArray[i]}</ImageSpan>
              </YesNoBox>
            );
          })}
        </ChoiceWrapper>
      ) : (
        <ImageGrid>
          {options.map((elem, i) => {
            return (
              <ImageWrapper
                key={'id_' + i}
                onClick={() => selectedHandler(i)}
                selected={selectedOptionIndex == i ? true : false}
              >
                <div>{parse(elem.display)}</div>
                <ImageTitle>{elem.value}</ImageTitle>
                <ImageSpan>{alphabetsArray[i]}</ImageSpan>
              </ImageWrapper>
            );
          })}
        </ImageGrid>
      )}

      <NavButtons showButton={showButton}>
        {showButton && <MyPrevButton handler={prevHandler}>Back</MyPrevButton>}
        <MyNextButton disabled={disableNextBtn}>Proceed</MyNextButton>
      </NavButtons>
    </Container>
  );
}

const Container = styled.section`
  max-width: 60rem;
  margin: 0 auto;
  h4 {
    padding: 4rem 0;
    text-align: center;
  }
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
`;
