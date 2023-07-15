import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 110px;
  border-bottom: 1px solid rgba(00, 0, 0, 0.1);
  background-color: #f9f9f9;

  display: flex;
  justify-content: space-around;
`
export const Figure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 120px;
    height: 80px;
  }
`
export const Nav = styled.nav`
  width: 600px;

  display: flex;
  justify-content: space-between;
`
export const Ul = styled.ul`
  display: flex;
  align-items: center;

  gap: 20px;
  list-style-type: none;
`
export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 60px;
  }
`
export const A = styled.a`
  cursor: pointer;

  &:hover {
    color: #1eb5ba;
  }
`
