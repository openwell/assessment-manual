import styled from 'styled-components';
import LeftArticle from './LeftArticle';
import RightArticle from './RightArticle';

export default function MainSection() {
  return (
    <Container>
      <header>
        <h3>What we can help with</h3>
      </header>
      <LeftArticle />
      <RightArticle />
    </Container>
  );
}

const Container = styled.section`
  padding: 2rem 0;
  header {
    text-align: center;
    padding-top: 4rem;
  }
`;
