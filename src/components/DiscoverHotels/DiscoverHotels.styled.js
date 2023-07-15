import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  padding: 20px 0;

  display: flex;
  justify-content: center;
  margin-top: 100px;
`

export const Figure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;

  img {
    border-radius: 4px;

    @media (max-width: 768px) {
      width: 84vw;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const H2 = styled.h2`
  width: 35%;
  font-size: 2.3vw;
  color: #3d3d3d;

  span {
    color: #1eb5ba;
  }

  @media (max-width: 1200px) {
    width: 50%;
    font-size: 3.4vw;
  }
  @media (max-width: 768px) {
    width: 80%;
    font-size: 4.4vw;
  }
`
