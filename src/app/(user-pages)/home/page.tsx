import Link from 'next/link'

import MedEducaIcon from '../../../components/Svgs/MedEducaIcon'
import BookCover from '../../../components/BookCover'
import prisma from '../../../../prisma/prisma'
import parseJwt from '@/common/parseJwt'
import { cookies } from 'next/headers'

const getBooks = async () => {
  return prisma.books.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      author: true,
      image: true
    }
  })
}

const Home = async () => {
  const account = await parseJwt(cookies().get('access_token')?.value)
  const books = await getBooks()
  return (
    <div className="container mx-auto">
      <div className="flex flex-col-reverse text-center md:text-left items-center gap-8 md:flex-row md:justify-between">
        <div className="max-w-xl">
          <h1 className="pb-6 text-center text-2xl font-normal md:text-3xl xl:text-5xl">
            BEM VINDO(A)
          </h1>
          <p className="text-sm font-light leading-6 md:text-xl xl:text-3xl">
            A biblioteca interativa infantil do Hospital das Clínicas, a MED
            EDUCA.
          </p>
          <p className="text-sm font-light leading-6 md:text-xl xl:text-3xl">
            Aqui você irá aprender enquanto se diverte!
          </p>
          {!account && (
            <>
              <p className="text-sm font-light leading-6 md:text-xl xl:text-3xl">
                Para acessar todas as funções da biblioteca realize o{' '}
                <Link
                  href="/login"
                  className="underline text-[#000AFF]">
                  login!
                </Link>
              </p>
              <p className="text-sm font-light leading-6 md:text-xl xl:text-3xl">
                Não tem login? Fácil,{' '}
                <Link
                  href="/signup"
                  className="underline text-[#000AFF]">
                  cadastre-se!
                </Link>
              </p>
            </>
          )}
        </div>

        <div className="flex w-1/2 flex-col items-center max-w-[500px]">
          {!account && (
            <div className="mb-10 flex justify-between gap-x-3 lg:gap-x-10">
              <Link href="/login">
                <button className="bg-[#E25B45] text-white py-2 px-6 capitalize rounded-md md:rounded-l-md text-xl">
                  login
                </button>
              </Link>
              <Link href="/signup">
                <button className="bg-[#E25B45] text-white py-2 px-6 capitalize rounded-md md:rounded-r-md text-xl">
                  cadastro
                </button>
              </Link>
            </div>
          )}
          <MedEducaIcon className="flex w-full justify-center" />
        </div>
      </div>

      <div className="grid place-content-center xl:grid-cols-3 gap-y-20 py-12 lg:grid-cols-2 md:py-28 2xl:gap-x-56">
        {books.length ? (
          books.map((book) => (
            <BookCover
              key={book.id}
              cover={book.image}
            />
          ))
        ) : (
          <p className="text-xl text-center">carregando...</p>
        )}
      </div>
    </div>
  )
}

export default Home
