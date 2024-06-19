import Link from 'next/link'

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
        não tem login?{' '}
        <Link
          href="/signup"
          className="underline text text-[#000AFF] uppercase">
          clique aqui!
        </Link>
      </p>

      <p className="text-center uppercase">
        já tem login?{' '}
        <Link
          href="/login"
          className="underline text-[#000AFF] uppercase">
          clique aqui!
        </Link>
      </p>
    </div>
  )
}

export default NoAccount
