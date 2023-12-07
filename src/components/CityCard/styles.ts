import styled, { css } from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme['gray-700']};
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme['gray-500']};
  }
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const TextName = styled.p`
  ${({ theme }) => css`
    font-size: 1.125rem;
    color: ${theme['gray-100']};
    font-weight: bold;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme['gray-300']};
  `}
`;
