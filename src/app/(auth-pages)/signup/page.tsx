import Link from 'next/link'
import Input from '../../../components/Input'
import Form from '@/components/Form'
import SubmitButton from '@/components/SubmitButton'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import InputWithMask from '@/components/Input/InputWithMask'

const Signup = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createAction = async (prevState: any, formData: FormData) => {
    'use server'
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

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl uppercase md:text-6xl">
        cadastre-se
      </h1>
      <Form
        action={createAction}
        className="flex flex-col items-center justify-center gap-y-4 pt-16 pb-7 lg:pt-40">
        <Input
          id="name"
          label="Nome:"
          type="text"
          placeholder="Digite o seu nome"
        />

        <Input
          id="email"
          label="Email:"
          type="email"
          placeholder="Digite o seu email"
        />

        <Input
          id="password"
          label="Senha:"
          type="password"
          placeholder="Digite a sua senha"
        />

        <Input
          id="confirmPassword"
          label="Senha:"
          type="password"
          placeholder="Digite novamente a sua senha"
        />

        <InputWithMask
          id="birthday"
          label="Nascimento:"
          type="text"
          mask="99/99/9999"
          placeholder="Digite sua data de nascimento"
        />

        <SubmitButton
          type="submit"
          className="bg-[#5CC5DB] p-2 text-center rounded-[10px] w-[201px] h-[54px] mt-4">
          Cadastrar
        </SubmitButton>
      </Form>
      <p className="text-center uppercase">já tem login?</p>
      <Link
        href="/login"
        className="underline text-[#000AFF] text-center uppercase block pb-1">
        clique aqui!
      </Link>
    </div>
  )
}

export default Signup
