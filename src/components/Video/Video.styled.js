import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  margin-top: 100px;
  background: rgb(43, 182, 188, 0.6);

  display: flex;
  justify-content: center;
`

export const ContainerVideo = styled.div`
  height: 500px;

  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 1280px) {
    flex-direction: column-reverse;
  }
`

export const Iframe = styled.iframe`
  width: 700px;
  height: 400px;

  @media (max-width: 768px) {
    width: 84vw;
  }
`
export const ContainerText = styled.div`
  display: flex;
  justify-content: center;
`
export const H2 = styled.h2`
  width: 700px;
  font-size: 2vw;
  color: #fff;

  @media (max-width: 768px) {
    width: 80%;
    font-size: 3vw;
    text-align: center;
  }
`
