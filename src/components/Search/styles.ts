import styled from 'styled-components';

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme['gray-600']};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme['gray-600']};
  padding: 8px;
  height: 40px;
  color: ${({ theme }) => theme['gray-100']};
`;

export const SearchInput = styled.input`
  background: transparent;
  border: 0;
  flex: 1;
  height: 100%;
  color: ${({ theme }) => theme['gray-100']};

  &::placeholder {
    color: ${({ theme }) => theme['gray-300']};
  }
`;

export const ClearButton = styled.button`
  all: unset;
  border-radius: 99999px;
  width: 20px;
  background: ${({ theme }) => theme['gray-700']};
  margin: 0 5px;
  cursor: pointer;
  color: ${({ theme }) => theme['gray-100']};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
`;
