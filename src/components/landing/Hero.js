import styled from 'styled-components';
import Image from 'next/image';
import LogoSrc from '../../assets/svgs/logo.svg';
import BgSrc from '../../assets/images/hero-bg.png';
import { MyButton } from '../common/Button';

export default function HeroSection({ showModalHandler }) {
  return (
    <Container>
      <figure>
        <Image src={LogoSrc} alt="Manaul Logo" width={40} height={40} />
      </figure>
      <Content>
        <h1>
          Be good <br /> to yourself
        </h1>
        <p>
          We’re working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </p>
        <MyButton handler={showModalHandler}>TAKE THE QUIZ</MyButton>
      </Content>
    </Container>
  );
}

const Container = styled.header`
  background: no-repeat url('${BgSrc.src}');
  /* background-size: cover; */
  /* background-origin: left 5% / 15%; */
  height: 75rem;
  padding-top: 3rem;
  padding-left: 10%;
  @media ${({ theme }) => theme.media.mobile} {
    padding-left: 4%;
  }
`;

const Content = styled.section`
  max-width: 45rem;
  padding-top: 10rem;
  h1 {
    margin-bottom: 2rem;
  }
  @media ${({ theme }) => theme.media.mobile} {
    padding-right: 5rem;
    h1 {
      font-size: 6rem;
    }
  }
`;
