import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  justify-content: center;
`
export const ContainerForm = styled.fieldset`
  width: 500px;
  max-height: 650px;
  background-color: #fff;
  border-radius: 8px;
  border: none;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
  background-color: rgba(00, 0, 0, 0.4);
  padding: 25px;

  @media (max-width: 768px) {
    width: 380px;
    padding: 10px;
  }

  span {
    color: red;
    font-size: 12px;
  }
`
export const Fieldset = styled.fieldset`
  display: flex;
  justify-content: space-between;

  margin: 10px;
  border: none;
`
export const ContainerInput = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;

  label {
    font-size: 12px;
    color: #fff;
    padding-bottom: 4px;
  }

  input {
    width: 225px;
    height: 40px;
    border: 1px solid rgba(00, 0, 0, 0.1);
    padding-left: 6px;

    @media (max-width: 768px) {
      width: 170px;
    }
  }
`
export const ContainerName = styled(ContainerInput)`
  input {
    width: 480px;

    @media (max-width: 768px) {
      width: 360px;
    }
  }
`
export const ContainerButton = styled.fieldset`
  border: none;

  display: flex;
  justify-content: center;

  input {
    width: 485px;
    height: 44px;
    background-color: #1eb5ba;
    color: #fff;
    border: none;
    font-weight: 600;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 360px;
    }
  }
`
export const Legend = styled.legend``
