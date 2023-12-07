import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: max-content;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const VStack = styled.div`
  max-width: 500px;
  justify-content: center;
  flex-direction: row;
  display: flex;
  gap: 45px;
`;

export const LeftContent = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  gap: 8px;

  img {
    width: 80px;
  }

  div {
    display: flex;
    gap: 20px;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const TextName = styled.p`
  ${({ theme }) => css`
    font-size: 1.75rem;
    text-align: center;
    color: ${theme['gray-100']};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme['gray-300']};
  `}
`;
