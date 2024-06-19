import BookResume from '../../../components/BookResume'
import parseJwt from '@/common/parseJwt'
import { cookies } from 'next/headers'
import prisma from '../../../../prisma/prisma'
import SearchForm from '@/components/SearchForm'

const getBooks = async (userId: string, searchTerm: string) => {
  let where = {}
  if (searchTerm) {
    where = {
      title: {
        contains: searchTerm,
        mode: 'insensitive'
      }
    }
  }
  return prisma.books.findMany({
    where,
    select: {
      id: true,
      title: true,
      description: true,
      author: true,
      image: true,
      favorites: {
        where: { user_id: userId },
        select: {
          id: true,
          book_id: true
        }
      }
    }
  })
}

const Books = async ({ searchParams }: { searchParams: { q: string } }) => {
  const account = (await parseJwt(cookies().get('access_token')?.value)) || ''
  const searchTerm = searchParams?.q
  const books = await getBooks(account && account.id, searchTerm)
  return (
    <div className="container relative mx-auto flex flex-col sm:items-center lg:items-start">
      <SearchForm />
      {books.length ? (
        books.map((book) => (
          <div
            key={book.id}
            className="pb-10">
            <BookResume
              book={book}
              userId={account && account.id}
              token={cookies().get('access_token')?.value || ''}
            />
          </div>
        ))
      ) : (
        <h1 className="text-center text-xl">Nenhum livro encontrado</h1>
      )}
    </div>
  )
}

export default Books
