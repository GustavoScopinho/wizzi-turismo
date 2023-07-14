import * as S from './Section.styled'
import ImgMaldivas from './../../assets/ilha-maldivas.png'
import { Form } from '../Form/Form'

export function Section() {
  return (
    <>
      <S.Section style={{ backgroundImage: `url(${ImgMaldivas})` }}>
        <Form />
      </S.Section>
    </>
  )
}
