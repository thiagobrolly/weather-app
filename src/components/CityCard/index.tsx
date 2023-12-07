import { ButtonHTMLAttributes, memo } from 'react';
import { CityDTO } from '../../dtos';
import * as S from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  item: CityDTO;
};

export const CityCard = memo(
  ({ item, ...rest }: Props) => (
    <S.Container {...rest}>
      <S.VStack>
        <S.TextName>{item.nome}</S.TextName>
        <S.Text>{item['regiao-imediata']['regiao-intermediaria'].UF.nome}</S.Text>
      </S.VStack>

    </S.Container>
  ),
  (prevProps, nextProps) => {
    // Check if relevant props have changed to avoid unnecessary rendering
    return prevProps.item.id === nextProps.item.id;
  }
);
