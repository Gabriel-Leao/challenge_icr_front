'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import prisma from '../../prisma/prisma'
import { revalidatePath } from 'next/cache'

export const login = async (prevState: unknown, formData: FormData) => {
  const email = formData.get('email')
  const password = formData.get('password')
  const response = await fetch(`${process.env.BACK_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
  const data = await response.json()
  const { access_token } = data
  if (access_token && response.ok) {
    cookies().set('access_token', access_token, {
      httpOnly: true
    })
    redirect('/home')
  } else {
    return data
  }
}

export const createUser = async (prevState: unknown, formData: FormData) => {
  const name = formData.get('name')
  const email = formData.get('email')
  const password = formData.get('password')
  const confirmPassword = formData.get('confirmPassword')
  const birthday = formData.get('birthday')

  const response = await fetch(`${process.env.BACK_URL}/user`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
      name,
      confirmPassword,
      birthday
    })
  })

  const data = await response.json()
  const { access_token } = data

  if (access_token && response.ok) {
    cookies().set('access_token', access_token, {
      httpOnly: true
    })
    redirect('/home')
  } else {
    return data
  }
}

export const removeFavorite = async (
  favoriteId: string | undefined,
  path: string
) => {
  try {
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
  revalidatePath(path)
}

export const logout = async () => {
  cookies().delete('access_token')
  revalidatePath('/settings')
}

export const removeAllFavorites = async (id: string) => {
  await prisma.favorites.deleteMany({ where: { user_id: id } })
  redirect('/books')
}

export const saveFavorite = async (userId: string, bookId: string) => {
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
        book_id: bookId,
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
        book_id: bookId
      }
    })
  } catch (error) {
    redirect('/login')
  }
  revalidatePath('/books')
}

export const editUser = async (
  accountId: string | undefined,
  accessToken: string,
  prevState: unknown,
  formData: FormData
) => {
  'use server'
  const name = formData.get('name')
  const email = formData.get('email')
  const password = formData.get('password')
  const birthday = formData.get('birthday')

  if (accountId) {
    const response = await fetch(`${process.env.BACK_URL}/user/${accountId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, birthday })
    })
    const data = await response.json()
    if (!data.error) {
      return data
    } else {
      return data
    }
  } else {
    redirect('login')
  }
}
