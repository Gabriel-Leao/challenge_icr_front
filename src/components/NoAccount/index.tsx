import Link from 'next/link'
import { routes } from '@/common/consts'

const NoAccount = ({
  title = 'Você precisa logar para acessar o seu perfil'
}: {
  title?: string
}) => {
  return (
    <div className="rounded-xl bg-white py-20 px-2 md:px-0 md:mx-auto">
      <h1 className="pb-10 text-center text-xl font-bold md:text-2xl">
        {title}
      </h1>
      <p className="pb-4 text-center uppercase">
        não tem conta?{' '}
        <Link
          href={routes.CADASTRAR}
          className="underline text-vividBlue uppercase">
          clique aqui!
        </Link>
      </p>

      <p className="text-center uppercase">
        já tem conta?{' '}
        <Link
          href={routes.ENTRAR}
          className="underline text-vividBlue uppercase">
          clique aqui!
        </Link>
      </p>
    </div>
  )
}

export default NoAccount
