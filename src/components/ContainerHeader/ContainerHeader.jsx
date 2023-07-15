import * as S from './ContainerHeader.styled'
import LogoWizzi from './../../assets/wizzi-logo.png'
import { UserCircle } from 'lucide-react'

export function ContainerHeader() {
  return (
    <>
      <S.Header>
        <S.Figure>
          <img src={LogoWizzi} alt="Logo Wizzi Turismos" />
        </S.Figure>
        <S.Nav>
          <S.Ul>
            <S.Li>
              <S.A>Passeios</S.A>
            </S.Li>
            <S.Li>
              <S.A>Pacotes</S.A>
            </S.Li>
            <S.Li>
              <S.A>Promoções</S.A>
            </S.Li>
          </S.Ul>
          <S.Ul>
            <S.Li>
              <UserCircle size={'32px'} stroke-width={'1px'} />
              <S.A>Fazer login</S.A>
            </S.Li>
          </S.Ul>
        </S.Nav>
      </S.Header>
    </>
  )
}
