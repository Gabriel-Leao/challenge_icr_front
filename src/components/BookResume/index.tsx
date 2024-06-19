import BookCover from '../BookCover'
import EmptyHeartIcon from '../Svgs/EmptyHeartIcon'
import FillHeartIcon from '../Svgs/FillHeartIcon'
import { Book } from '@/@types/book.interface'
import { redirect } from 'next/navigation'

interface bookResumeProps {
  userId?: string
  token?: string
  book: Book
}

const BookResume = ({ book, userId, token }: bookResumeProps) => {
  const saveAction = async () => {
    'use server'
    if (userId) {
      const response = await fetch(
        `${process.env.BACK_URL}/favorites/${userId}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ bookId: book.id })
        }
      )
      const data = await response.json()
      if (!data.error) {
        redirect('/books')
      } else {
        console.log(data)
        redirect('/login')
      }
    } else {
      redirect('login')
    }
  }

  const removeAction = async () => {
    'use server'
    const response = await fetch(
      `${process.env.BACK_URL}/favorites/${userId}/${book.favorites![0].id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    const data = await response.json()
    if (!data.error) {
      redirect('/books')
    } else {
      redirect('/login')
    }
  }

  const favorite =
    book.favorites?.length && book.favorites[0].book_id === book.id

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
        <form action={favorite ? removeAction : saveAction}>
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
