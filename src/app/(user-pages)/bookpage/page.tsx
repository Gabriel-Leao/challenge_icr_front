import Link from 'next/link'

import LeftArrowIcon from '../../../components/Svgs/LeftArrowIcon'
import RightArrowIcon from '../../../components/Svgs/RightArrowIcon'

const BookPage = () => {
  return (
    <div className="relative w-full bg-sienna flex items-center justify-center">
      <button className="bg-mintGreen p-5 rounded-l-[80px] absolute md:static z-10 left-0">
        <LeftArrowIcon />
      </button>
      <div className="relative max-h-fit min-h-screen bg-white md:w-[80%] xl:w-1/2">
        <Link href="/puzzle">
          <button className="text-white bg-deepRed rounded-[68px] py-4 px-5 text-lg  md:absolute right-14 top-14">
            BOTÃO DE INTERAÇÃO EXEMPLO
          </button>
        </Link>
      </div>
      <button className="bg-mintGreen p-5 rounded-r-[80px] absolute md:static z-10 right-0">
        <RightArrowIcon />
      </button>
    </div>
  )
}

export default BookPage
