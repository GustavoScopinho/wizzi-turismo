import { MobileHeader } from './MobileHeader/MobileHeader'
import { ContainerHeader } from './ContainerHeader/ContainerHeader'
import { useEffect, useState } from 'react'

export function Header() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <>{isMobile ? <MobileHeader /> : <ContainerHeader />}</>
}
