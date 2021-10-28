import styled from 'styled-components';
import Image from 'next/image';
import LogoSrc from '../../assets/svgs/logo.svg';
import BgSrc from '../../assets/images/hero-bg.png';

export default function HeroSection() {
  return (
    <Styled>
      <figure>
        <Image src={LogoSrc} alt="Manaul Logo" width={100} height={30} />
      </figure>
      <section>
        <h1>Be good to yourself</h1>
        <p>
          We’re working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </p>
        <button>TAKE THE QUIZ</button>
      </section>
    </Styled>
  );
}

const Styled = styled.header`
  background-image: url('${BgSrc.src}');
  height: 75rem;
`;
