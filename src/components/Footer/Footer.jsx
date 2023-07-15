import * as S from './Footer.styled'
import LogoWizzi from './../../assets/logo-w.png'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import IconPayment from './../../assets/icon-payment.png'

export function Footer() {
  return (
    <>
      <S.Footer>
        <S.ContainerInformation>
          <S.Figure>
            <img src={LogoWizzi} alt="Logo Wizzi" />
          </S.Figure>

          <S.LegalInformation>
            <a href="#">Contato</a>
            <a href="#">Termos de seviço</a>
            <a href="#">Política de privacidade</a>
            <a href="#">Cancelamento, troca e reembolso</a>
          </S.LegalInformation>
        </S.ContainerInformation>
        <S.ContainerNav>
          <S.Navegation>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Linkedin />
            </a>
            <a href="#">
              <Facebook />
            </a>
          </S.Navegation>
          <S.ContainerPayment>
            <img src={IconPayment} alt="" />
          </S.ContainerPayment>
        </S.ContainerNav>
        <S.ContainerText>
          <S.P>
            © 2023 Wizzi Turismo Inteligente - Todos os direitos reservados.
          </S.P>
        </S.ContainerText>
      </S.Footer>
    </>
  )
}
