import * as S from './Form.styled'

export function Form() {
  return (
    <>
      <S.Form>
        <S.ContainerForm>
          <S.Legend></S.Legend>
          <S.Fieldset>
            <S.ContainerInput>
              <label htmlFor="">Origem</label>
              <input type="text" name="" id="" />
            </S.ContainerInput>
            <S.ContainerInput>
              <label htmlFor="">Destino</label>
              <input type="text" name="" id="" />
            </S.ContainerInput>
          </S.Fieldset>

          <S.Fieldset>
            <S.ContainerInput>
              <label htmlFor="entrada">Entrada</label>
              <input type="date" name="entrada" id="entrada" />
            </S.ContainerInput>
            <S.ContainerInput>
              <label htmlFor="saida">Saída</label>
              <input type="date" name="saida" id="saida" />
            </S.ContainerInput>
          </S.Fieldset>
          <S.Fieldset>
            <S.ContainerInput>
              <label htmlFor="adults">Adultos</label>
              <input type="number" name="" id="" />
            </S.ContainerInput>

            <S.ContainerInput>
              <label htmlFor="children">Crianças</label>
              <input type="number" name="children" id="children" />
            </S.ContainerInput>
          </S.Fieldset>
          <S.Fieldset>
            <S.ContainerName>
              <label htmlFor="name">Nome:</label>
              <input type="text" name="name" id="name" />
            </S.ContainerName>
          </S.Fieldset>
          <S.Fieldset>
            <S.ContainerName>
              <label htmlFor="">Email:</label>
              <input type="email" name="email" id="email" />
            </S.ContainerName>
          </S.Fieldset>
          <S.ContainerButton>
            <input type="submit" value="Enviar" />
          </S.ContainerButton>
        </S.ContainerForm>
      </S.Form>
    </>
  )
}
