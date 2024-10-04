import defaultImg from '/public/default_img.png'
import Image from 'next/image'

const BookCover = ({ cover }: { cover?: string | null }) => {
  return (
    <>
      <Image
        src={cover || defaultImg}
        alt="Capa padrãoo"
        className="h-[499px] sm:w-[334px]"
        width={334}
        height={499}
      />
    </>
  )
}

export default BookCover
