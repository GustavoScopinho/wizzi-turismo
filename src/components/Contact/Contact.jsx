import * as S from './Contact.styled'

export function Contact() {
  return (
    <>
      <S.Section>
        <S.ContainerMap>
          <S.H2>Conheça-nos pessoalmente!</S.H2>
          <S.Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65335812.737955436!2d-103.3512040647026!3d1.83084564788427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d04b96d867d646b%3A0x514e0e00ef7519ee!2sWizzi!5e0!3m2!1spt-BR!2sbr!4v1689293033765!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></S.Iframe>
        </S.ContainerMap>
      </S.Section>
    </>
  )
}
