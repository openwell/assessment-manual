import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import ArticleImgSrc from '../../assets/images/image-2.png';
import BgSrc from '../../assets/images/bg-02.png';
export default function ArticleRight() {
  return (
    <Article>
      <Content>
        <h6>Erecetile dysfunction</h6>
        <h4>
          Erections can be a tricky thing. But no need to feel <br /> down!
        </h4>
        <p>
          We’re working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </p>
      </Content>
      <figure>
        <Image
          src={ArticleImgSrc}
          alt="man with hair loss"
          width={370}
          height={445}
        />
      </figure>
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 18rem 0;
  padding: 0 1rem;
  @media ${({ theme }) => theme.media.mobile} {
    margin: 5rem 0;
    flex-direction: column-reverse;
  }
`;

const Content = styled.section`
  background: url('${BgSrc.src}') no-repeat;
  background-size: 50.1rem;
  background-position: 4rem 8rem;
  max-width: 45rem;
  padding-top: 10rem;
  padding-right: 9rem;
  @media ${({ theme }) => theme.media.mobile} {
    padding-right: 4rem;
    padding-bottom: 5rem;
    background-position: -3rem 8rem;
  }
  p {
    line-height: 1.8;
  }
  h4 {
    line-height: 1.4;
    margin-bottom: 2rem;
  }
`;
