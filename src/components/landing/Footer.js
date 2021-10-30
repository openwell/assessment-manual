import styled from 'styled-components';
import Image from 'next/image';
import LogoSrc from '../../assets/svgs/logo.svg';
import FacebookSrc from '../../assets/svgs/social-facebook.svg';
import GoogleSrc from '../../assets/svgs/social-google.svg';
import TwitterSrc from '../../assets/svgs/social-twitter.svg';

export default function Footer() {
  return (
    <Container>
      <LayerOne>
        <figure>
          <Image src={LogoSrc} alt="manual logo" width={60} height={60} />
        </figure>

        <div>
          <h6>Product</h6>
          <p>Popular</p>
          <p>Trending</p>
          <p>Guided</p>
          <p>Products</p>
        </div>
        <div>
          <h6>Company</h6>
          <p>Press</p>
          <p>Mission</p>
          <p>Strategy</p>
          <p>About</p>
        </div>
        <div>
          <h6>Info</h6>
          <p>Support</p>
          <p>Customer Service</p>
          <p>Get started</p>
        </div>
        <div>
          <h6>Follow us</h6>
          <div>
            <Image src={FacebookSrc} alt="manual logo" width={24} height={24} />
            <Image src={GoogleSrc} alt="manual logo" width={24} height={24} />
            <Image src={TwitterSrc} alt="manual logo" width={24} height={24} />
          </div>
        </div>
      </LayerOne>
      <LayerTwo>
        <p>© 2021 Manual. All rights reserved</p>
      </LayerTwo>
    </Container>
  );
}

const Container = styled.footer`
  padding: 0 13rem;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  @media ${({ theme }) => theme.media.mobile} {
    padding: 0;
  }
`;

const LayerOne = styled.section`
  width: 100%;
  grid-template-columns: 2fr 0.5fr 0.5fr 1.5fr 1.5fr;
  display: grid;
  padding: 7rem 1rem;
  @media ${({ theme }) => theme.media.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-row-gap: 2rem;
    & > figure {
      grid-column: 1 / 3;
      text-align: center;
    }
  }
  p {
    font-size: 1.6rem;
    padding: 1.2rem 0;
  }

  h6 {
    font-weight: 500;
    padding-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  img {
    padding: 0rem 1.5rem 0 0 !important;
  }
  div:nth-of-type(3) {
    justify-self: center;
    @media ${({ theme }) => theme.media.mobile} {
      justify-self: start;
    }
  }
`;
const LayerTwo = styled.section`
  border-top: thin solid ${({ theme }) => theme.colors.border1};
  text-align: center;
  padding: 2rem 0;
  p {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 1.6rem;
  }
`;
