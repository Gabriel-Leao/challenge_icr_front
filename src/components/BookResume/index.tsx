import BookCover from '../BookCover'
import EmptyHeartIcon from '../Svgs/EmptyHeartIcon'
import FillHeartIcon from '../Svgs/FillHeartIcon'
import { Book } from '@/@types/book.interface'
import { redirect } from 'next/navigation'
import prisma from '../../../prisma/prisma'

interface bookResumeProps {
  userId?: string
  token?: string
  book: Book
}

const BookResume = ({ book, userId }: bookResumeProps) => {
  const favorite =
    book.favorites?.length && book.favorites[0].book_id === book.id

  const saveFavoriteAction = async () => {
    'use server'
    try {
      if (!userId) {
        throw new Error('Usuário não encontrado')
      }
      const user = await prisma.users.findUnique({ where: { id: userId } })
      if (!user) {
        throw new Error('Usuário não encontrado')
      }
      const oldFavorite = await prisma.favorites.findFirst({
        where: {
          book_id: book.id,
          AND: {
            user_id: userId
          }
        }
      })
      if (oldFavorite) {
        throw new Error('Livro já favoritado')
      }
      await prisma.favorites.create({
        data: {
          user_id: userId,
          book_id: book.id
        }
      })
    } catch (error) {
      redirect('/login')
    }
    redirect('/books')
  }

  const removeFavoriteAction = async () => {
    'use server'
    try {
      const favoriteId = book.favorites?.length && book.favorites[0].id
      if (!favoriteId) throw new Error('Favorito não encontrado')
      const favorite = await prisma.favorites.findUnique({
        where: {
          id: favoriteId
        }
      })

      if (!favorite) {
        throw new Error('Favorito não encontrado')
      }

      await prisma.favorites.delete({
        where: {
          id: favoriteId
        }
      })
    } catch (error) {
      redirect('/login')
    }
    redirect('/books')
  }

  return (
    <div className="relative mx-auto flex h-fit flex-col gap-y-4 sm:items-center lg:flex-row lg:items-start lg:gap-x-4 xl:gap-x-9">
      <>
        <BookCover cover={book.image} />
      </>

      <div>
        <h2 className="mb-7 rounded-md p-3 text-center font-bold text-white bg-burntSienna max-w-full lg:w-[349px]">
          {book.title}
        </h2>
        <div className="mb-7 flex flex-col rounded-md p-8 text-justify font-medium bg-burntSienna max-h-[300px] w-[475px] max-w-full lg:mb-0">
          <p className="overflow-hidden text-clip text-white max-h-[300px]">
            {book.description}
          </p>
        </div>
        <form action={favorite ? removeFavoriteAction : saveFavoriteAction}>
          <button
            className="bottom-0 flex items-center gap-3 mx-auto cursor-pointer lg:absolute"
            type="submit">
            {favorite ? (
              <>
                <FillHeartIcon />
                <span className="text-2xl font-bold text-white">salvo</span>
              </>
            ) : (
              <>
                <EmptyHeartIcon />
                <span className="text-2xl font-bold text-white">salvar</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookResume
