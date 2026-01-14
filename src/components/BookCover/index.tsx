import Link from 'next/link'
import defaultImg from '/public/default_img.png'
import Image from 'next/image'
import { routes } from '@/common/consts'

const getHistoryLink = (cover: string) => {
  switch (cover) {
    case 'https://i.ibb.co/RH09DfY/Captura-de-tela-de-2024-05-21-18-18-06.png':
      return routes.RAIOX
    case 'https://i.ibb.co/qrFcfWL/Captura-de-tela-de-2024-05-21-18-17-32.png':
      return routes.HEMODIALISE
    case 'https://i.ibb.co/2SwwCtK/Captura-de-tela-de-2024-05-21-18-18-24.png':
      return routes.SANGUE
    default:
      return routes.HISTORIAS
  }
}

const BookCover = ({ cover }: { cover?: string | null }) => {
  console.log('capa: ', cover)

  return (
    <>
      <Link href={getHistoryLink(cover!)}>
        <Image
          src={cover || defaultImg}
          alt="Capa padrão"
          className="h-[499px] sm:w-[334px]"
          width={334}
          height={499}
        />
      </Link>
    </>
  )
}

export default BookCover
