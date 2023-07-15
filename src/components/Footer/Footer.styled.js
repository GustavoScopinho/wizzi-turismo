import styled from 'styled-components'

export const Footer = styled.footer``

export const Figure = styled.figure`
  display: flex;
  justify-content: center;

  img {
    margin-top: 20px;
    width: 50px;
  }
`
export const ContainerInformation = styled.section`
  width: 100%;
  background-color: #1eb5ba;
  margin-top: 100px;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const LegalInformation = styled.div`
  width: 90%;
  padding-bottom: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;

  a {
    text-decoration: none;
    font-weight: 600;
    color: #fff;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const ContainerNav = styled.div`
  width: 100%;
  height: 100px;
  background-color: #1eb5ba;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Navegation = styled.nav`
  margin-left: 100px;

  a {
    color: #fff;
    padding-right: 20px;
  }
`
export const ContainerPayment = styled.div`
  margin-right: 100px;
`
export const ContainerText = styled.div`
  background-color: #1eb5ba;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const P = styled.p`
  color: #fff;
  margin-bottom: 10px;
`
