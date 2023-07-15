import * as S from './MobileHeader.styled'
import { useState } from 'react'
import LogoWizzi from './../../assets/wizzi-logo.png'
import { AlignJustify } from 'lucide-react'

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <S.Header>
        <S.ContainerIcon isOpen={isOpen}>
          <AlignJustify onClick={handleToggle} />
        </S.ContainerIcon>
        <S.Figure>
          <img src={LogoWizzi} alt="Logo Wizzi Turismos" />
        </S.Figure>
      </S.Header>
      <S.MenuContainer isOpen={isOpen}>
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
              <S.A>Fazer login</S.A>
            </S.Li>
          </S.Ul>
        </S.Nav>
      </S.MenuContainer>
    </>
  )
}
