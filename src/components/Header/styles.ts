import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderContainerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  button{
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`