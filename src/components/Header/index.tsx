import { HeaderContainer, HeaderContainerRight } from './styles';
import { Hour } from '../Hour';
import { Search } from '../Search';

import themeSwitch from '../../assets/icon/theme-switch.svg';
import { useTheme } from '../../contexts';

interface HeaderProps {
  onChange: (value: string) => void;
}

export function Header({ onChange }: HeaderProps) {
  const { toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <Hour />

      <HeaderContainerRight>
        <Search onChange={onChange} />
        <button onClick={toggleTheme}>
          <img src={themeSwitch} alt="" />
        </button>
      </HeaderContainerRight>
    </HeaderContainer>
  );
}
