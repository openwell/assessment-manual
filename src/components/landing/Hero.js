import styled from 'styled-components';
import Image from 'next/image';
import LogoSrc from '../../assets/svgs/logo.svg';
import BgSrc from '../../assets/images/hero-bg.png';

export default function HeroSection() {
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
        <Button>TAKE THE QUIZ</Button>
      </Content>
    </Container>
  );
}

const Container = styled.header`
  background: url('${BgSrc.src}') no-repeat;
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
const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem 3rem;
  font-size: 1rem;
  border: thin solid transparent;
  margin-top: 2rem;
`;
