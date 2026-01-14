'use client'

import Image from 'next/image'
import AlertIcon from '@/components/Svgs/AlertIcon'
import { useRouter } from 'next/navigation'

type ErrorComponentProps = {
  title?: string
  subTitle: string
}

const ErrorComponent = ({ title, subTitle }: ErrorComponentProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.back()
  }

  return (
    <div className="bg-[#56A8B2] w-full grid grid-cols-1 gap-9 lg:grid-cols-2">
      <div className="bg-[#56A8B2] gap-9 flex flex-col items-center py-20 text-center lg:h-screen lg:py-0 justify-center">
        {title && <h1 className="text-4xl xl:text-6xl">{title}</h1>}
        <AlertIcon />
        <div>
          <h2 className="text-2xl xl:text-4xl">{subTitle}</h2>
          <p className="pt-1 xl:text-xl">
            Pedimos desculpa pela inconveniência
          </p>
        </div>
        <button
          onClick={handleClick}
          className="bg-[#D75742] text-white py-3 rounded-lg w-[200px] text-lg">
          Voltar
        </button>
      </div>
      <div className="bg-white py-20 flex justify-center lg:h-screen lg:py-0 items-center">
        <Image
          src="/error.png"
          alt="imagem de erro"
          width={500}
          height={500}
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]"
        />
      </div>
    </div>
  )
}

export default ErrorComponent
