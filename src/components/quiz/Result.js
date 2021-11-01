import React from 'react';
import styled from 'styled-components';
import SmileSrc from '../../assets/images/smile-face.png';
import Image from 'next/image';
import { MyNextButton } from '../common/Button';
import PropTypes from 'prop-types';

export default function Result({ endHandler }) {
  return (
    <Container>
      <Image src={SmileSrc} alt="smile-face" width={80} height={80} />
      <h4>
        “Great news! We have the perfect treatment for your hair loss. Proceed
        to <SpanLink onClick={endHandler}>www.manual.co</SpanLink>, and prepare
        to say hello to your new hair!”
      </h4>
      <ButtonWrapper>
        <MyNextButton handler={endHandler}>Proceed</MyNextButton>
      </ButtonWrapper>
    </Container>
  );
}
const Container = styled.section`
  max-width: 60rem;
  margin: 0 auto;
  padding-top: 10%;
  text-align: center;
`;

const SpanLink = styled.span`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

Result.propTypes = {
  endHandler: PropTypes.func.isRequired,
};
