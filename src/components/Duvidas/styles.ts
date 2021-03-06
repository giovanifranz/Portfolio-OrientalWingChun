import styled, { css } from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  max-width: 1920px;
`;

export const Content = styled.article`
  width: 80%;
  margin: 55px auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 54px;
  text-transform: uppercase;
  margin-bottom: 25px;

  mark {
    background-color: transparent;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Text = styled.p`
  margin-top: 50px;
  font-size: 30px;
  line-height: 47px;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

type ButtonProps = {
  opacity: boolean;
};

export const Button = styled.button<ButtonProps>`
  margin-bottom: 15px;
  background-color: transparent;
  border: none;
  font-size: 30px;
  display: flex;
  align-items: center;
  ${({ opacity }) =>
    opacity
      ? css`
          opacity: 0.6;
        `
      : css`
          opacity: 1;
        `}

  svg {
    color: var(--purple);
  }

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Box = styled.div`
  padding: 30px;
  background-color: var(--white);
  border: 2px solid var(--black);
  max-width: 660px;

  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

export const CardTitle = styled.h4`
  font-size: 30px;
  text-transform: uppercase;
`;

export const Contato = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  line-height: 47px;
  color: var(--white);
  background-color: var(--purple);
  width: 290px;
  padding: 0 10px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  svg {
    color: var(--green);
  }

  @media (max-width: 1200px) {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    width: 240px;
    width: 215px;
  }
`;
