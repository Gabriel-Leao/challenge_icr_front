import prisma from '../../../../prisma/prisma'
import parseJwt from '@/common/parseJwt'
import { cookies } from 'next/headers'
import BookCover from '@/components/BookCover'
import FillHeartIcon from '@/components/Svgs/FillHeartIcon'
import { redirect } from 'next/navigation'

const getFavorites = async (userId: string) => {
  return prisma.favorites.findMany({
    where: {
      user_id: userId
    },
    select: {
      id: true,
      books: {
        select: {
          id: true,
          title: true,
          description: true,
          author: true,
          image: true
        }
      }
    }
  })
}

const removeAction = async (
  userId: string,
  favoriteId: string,
  token: string
) => {
  'use server'
  const response = await fetch(
    `${process.env.BACK_URL}/favorites/${userId}/${favoriteId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
  const data = await response.json()
  if (!data.error) {
    redirect('/favorites')
  } else {
    redirect('/login')
  }
}

const Favorites = async () => {
  const account = await parseJwt(cookies().get('access_token')?.value)
  const token = cookies().get('access_token')?.value || ''
  const favorites = await getFavorites((account && account.id) || '')

  return (
    <div className="container mx-auto">
      {favorites.length ? (
        <div className="grid w-full pb-20 gap-x-20 gap-y-14 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {favorites.map(({ id: favoriteId, books: book }) => (
            <div
              key={book!.id}
              className="min-w-[100%]">
              <BookCover cover={book!.image} />
              <form
                action={async () => {
                  'use server'
                  await removeAction(account.id, favoriteId, token)
                }}>
                <button
                  className="flex items-center pt-5 gap-3"
                  type="submit">
                  <FillHeartIcon />
                  <span className="text-2xl font-bold text-white">salvo</span>
                </button>
              </form>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-1xl text-center md:text-3xl">
          Nenhum favorito cadastrado
        </h1>
      )}
    </div>
  )
}

export default Favorites
