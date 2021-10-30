import React from 'react';
import styled from 'styled-components';
import SmileSrc from '../../assets/images/smile-face.png';
import SadSrc from '../../assets/images/sad-face.png';
import Image from 'next/image';
import { MyNextButton } from '../common/Button';

export default function Feedback({ isRejection, endHandler }) {
  return (
    <Container>
      {isRejection ? (
        <NegativeFeedback>
          <Image src={SadSrc} alt="smile-face" width={80} height={80} />
          <h4>
            “Unfortunately, we are unable to prescribe this medication for you.
            This is because finasteride can alter the PSA levels, which maybe
            used to monitor for cancer. You should discuss this further with
            your GP or specialist if you would still like this medication.”
          </h4>
        </NegativeFeedback>
      ) : (
        <PositiveFeedback>
          <Image src={SmileSrc} alt="smile-face" width={80} height={80} />
          <h4>
            “Great news! We have the perfect treatment for your hair loss.
            Proceed to <SpanLink onClick={endHandler}>www.manual.co</SpanLink>,
            and prepare to say hello to your new hair!”
          </h4>
          <ButtonWrapper>
            <MyNextButton handler={endHandler}>Proceed</MyNextButton>
          </ButtonWrapper>
        </PositiveFeedback>
      )}
    </Container>
  );
}
const Container = styled.section`
  max-width: 60rem;
  margin: 0 auto;
  padding-top: 10%;
`;

const PositiveFeedback = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding-top: 10%;
  text-align: center;
`;

const NegativeFeedback = styled.div`
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
