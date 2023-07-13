import * as S from './Section.styled'
import ImgMaldivas from './../../assets/ilha-maldivas.png'
import { Form } from '../Form/Form'

export function Section() {
  return (
    <>
      <S.Section>
        <img src={ImgMaldivas} alt="Imagem de noite em Ilha Maldivas" />
        <Form />
      </S.Section>
    </>
  )
}
