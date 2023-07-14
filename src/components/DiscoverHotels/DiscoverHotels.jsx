import * as S from './DiscoverHotels.styled'
import ImgRoom from './../../assets/room-hotel.webp'

export function DiscoverHotels() {
  return (
    <>
      <S.Section>
        <S.Figure>
          <S.H2>
            Na <span>Wizzi</span> você encontra os melhores hotéis para você e
            sua família!
          </S.H2>
          <img src={ImgRoom} alt="Foto de um quarto de hotel" />
        </S.Figure>
      </S.Section>
    </>
  )
}
