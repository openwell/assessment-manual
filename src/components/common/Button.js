import styled, { css } from 'styled-components';
import Image from 'next/image';
import ArrowRight from '../../assets/svgs/arrow-right.svg';
import ArrowLeft from '../../assets/svgs/arrow-left.svg';

export function MyButton(props) {
  const { children, handler } = props;
  return <BaseButton onClick={handler}>{children}</BaseButton>;
}

const BaseButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem 3rem;
  font-size: 1rem;
  border: thin solid transparent;
  margin-top: 2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export function MyNextButton(props) {
  const { children, handler, disabled } = props;
  return (
    <ButtonIcon onClick={handler} disabled={disabled}>
      {children}
      <Image src={ArrowRight} alt="arrow-right" width={15} height={15} />
    </ButtonIcon>
  );
}
export function MyPrevButton(props) {
  const { children, handler } = props;
  return (
    <ButtonIcon onClick={handler}>
      <Image src={ArrowLeft} alt="arrow-left" width={15} height={15} />
      {children}
    </ButtonIcon>
  );
}

const ButtonIcon = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 3rem;
  font-size: 1rem;
  border: thin solid transparent;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 12rem;
  width: 100%;
  cursor: pointer;
  &:hover:enabled {
    opacity: 0.8;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;
