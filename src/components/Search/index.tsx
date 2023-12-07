import { ChangeEvent, useState } from 'react';
import * as S from './styles';

interface HeaderProps {
  onChange: (value: string) => void;
}

export const Search = ({ onChange }: HeaderProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const clearInput = () => {
    setInputValue('');
    onChange('');
  };

  return (
    <S.SearchInputContainer>
      <S.SearchInput
        type="text"
        placeholder="Buscar"
        onChange={handleInputChange}
        value={inputValue}
      />
      {inputValue && <S.ClearButton onClick={clearInput}>X</S.ClearButton>}
    </S.SearchInputContainer>
  );
};
