import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import ArticleImgSrc from '../../assets/images/image-1.png';
import BgSrc from '../../assets/images/bg-01.png';

export default function ArticleLeft() {
  return (
    <Article>
      <figure>
        <Image
          src={ArticleImgSrc}
          alt="man with hair loss"
          width={370}
          height={445}
        />
      </figure>
      <Content>
        <h6>Hair loss</h6>
        <h4>
          Hair loss needn’t be <br /> irreversible. We can help!
        </h4>
        <p>
          We’re working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </p>
      </Content>
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5rem 0;
  padding: 0 1rem;
  @media ${({ theme }) => theme.media.mobile} {
    margin: 2rem 0;
  }
`;

const Content = styled.section`
  background: url('${BgSrc.src}') no-repeat;
  background-position: -9rem 8rem;
  background-size: 40rem;
  max-width: 48rem;
  padding-top: 12rem;
  padding-left: 10rem;
  @media ${({ theme }) => theme.media.mobile} {
    padding-left: 0rem;
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
