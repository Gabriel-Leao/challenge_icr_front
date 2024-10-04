import BookCover from '../BookCover'
import EmptyHeartIcon from '../Svgs/EmptyHeartIcon'
import FillHeartIcon from '../Svgs/FillHeartIcon'
import { Book } from '@/@types/book.interface'
import { removeFavorite, saveFavorite } from '@/actions'
import prisma from '../../../prisma/prisma'
import { redirect } from 'next/navigation'

interface bookResumeProps {
  userId?: string
  token?: string
  book: Book
}

const getFavoriteByBookId = async (bookId: string, userId: string) => {
  if (!userId) {
    redirect('/login')
  }
  return prisma.favorites.findFirst({
    where: {
      book_id: bookId,
      user_id: userId
    },
    select: {
      id: true
    }
  })
}

const BookResume = async ({ book, userId }: bookResumeProps) => {
  const favorite = await getFavoriteByBookId(book.id, userId!)

  const addFavorite = saveFavorite.bind(null, userId!, book.id)
  const deleteFavorite = removeFavorite.bind(null, favorite?.id, 'books')

  return (
    <div className="relative mx-auto flex h-fit flex-col gap-y-4 sm:items-center lg:flex-row lg:items-start lg:gap-x-4 xl:gap-x-9">
      <>
        <BookCover cover={book.image} />
      </>

      <div>
        <h2 className="mb-7 rounded-md p-3 text-center font-bold text-white bg-sienna max-w-full lg:w-[349px]">
          {book.title}
        </h2>
        <div className="mb-7 flex flex-col rounded-md p-8 text-justify font-medium bg-sienna max-h-[300px] w-[475px] max-w-full lg:mb-0">
          <p className="overflow-hidden text-clip text-white max-h-[300px]">
            {book.description}
          </p>
        </div>
        <form action={favorite ? deleteFavorite : addFavorite}>
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
