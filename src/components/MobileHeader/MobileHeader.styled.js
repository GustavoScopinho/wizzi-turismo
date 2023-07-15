import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  background-color: #f9f9f9;

  display: flex;
  align-items: center;
`

export const ContainerIcon = styled.div`
  padding-left: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const MenuContainer = styled.div`
  display: none;
  border-bottom: 1px solid rgba(00, 0, 0, 0.1);
  background-color: #f9f9f9;

  ${({ isOpen }) =>
    isOpen &&
    `
    display: block;
  `}
`
export const Figure = styled.figure`
  width: 100%;

  display: flex;
  justify-content: center;

  img {
    width: 60px;
    height: 40px;
    padding: 5px 0px;
  }
`

export const Nav = styled.nav`
  padding: 10px;
`
export const Ul = styled.ul``
export const Li = styled.li``
export const A = styled.a`
  cursor: pointer;
  font-weight: 600;

  &:hover {
    color: #1eb5ba;
    transform: scale(1.1);
  }
`
