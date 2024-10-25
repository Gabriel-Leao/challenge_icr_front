import Link from 'next/link'
import defaultImg from '/public/default_img.png'
import Image from 'next/image'

const getHistoryLink = (cover: string) => {
  switch (cover) {
    case 'https://i.ibb.co/RH09DfY/Captura-de-tela-de-2024-05-21-18-18-06.png':
      return '/historias/raio-x'
    case 'https://i.ibb.co/qrFcfWL/Captura-de-tela-de-2024-05-21-18-17-32.png':
      return '/historias/hemodialise'
    case 'https://i.ibb.co/2SwwCtK/Captura-de-tela-de-2024-05-21-18-18-24.png':
      return 'historias/sangue'
    default:
      return '/historias'
  }
}

const BookCover = ({ cover }: { cover?: string | null }) => {
  return (
    <>
      <Link href={getHistoryLink(cover!)}>
        <Image
          src={cover || defaultImg}
          alt="Capa padrãoo"
          className="h-[499px] sm:w-[334px]"
          width={334}
          height={499}
        />
      </Link>
    </>
  )
}

export default BookCover
