import * as S from './Video.styled'

export function Video() {
  return (
    <>
      <S.Section>
        <S.ContainerVideo>
          <S.Iframe
            src="https://www.youtube.com/embed/D8SmdLHoYRs?start=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></S.Iframe>
          <S.ContainerText>
            <S.H2>Não falta praia bonita por aqui!</S.H2>
            <S.H2>
              Diversos lugares incríveis para você conhecer, e cheia de pousadas
              charmosas de frente para o mar.
            </S.H2>
          </S.ContainerText>
        </S.ContainerVideo>
      </S.Section>
    </>
  )
}
