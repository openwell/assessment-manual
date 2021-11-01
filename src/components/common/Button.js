import styled, { css } from 'styled-components';
import Image from 'next/image';
import ArrowRight from '../../assets/svgs/arrow-right.svg';
import ArrowLeft from '../../assets/svgs/arrow-left.svg';
import PropTypes from 'prop-types';

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
MyButton.propTypes = {
  handler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export function MyNextButton({ children, handler, disabled }) {
  return (
    <ButtonIcon onClick={handler} disabled={disabled}>
      {children}
      <Image src={ArrowRight} alt="arrow-right" width={15} height={15} />
    </ButtonIcon>
  );
}
MyNextButton.propTypes = {
  handler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export function MyPrevButton({ children, handler }) {
  return (
    <ButtonIcon onClick={handler}>
      <Image src={ArrowLeft} alt="arrow-left" width={15} height={15} />
      {children}
    </ButtonIcon>
  );
}
MyPrevButton.propTypes = {
  handler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const ButtonIcon = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  font-size: 1.4rem;
  border: thin solid transparent;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover:enabled {
    opacity: 0.8;
  }
  span {
    padding: 0 0.4rem !important;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;
const ImageWrapper = styled.figure`
  padding: 0 0.5rem;
  align-self: center;
`;
