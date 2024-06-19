import Link from 'next/link'
import Input from '../../../components/Input'
import { cookies } from 'next/headers'
import Form from '../../../components/Form'
import SubmitButton from '@/components/SubmitButton'
import { redirect } from 'next/navigation'

const Login = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const loginAction = async (prevState: any, formData: FormData) => {
    'use server'
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

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl uppercase md:text-6xl">bem-vindo!</h1>
      <Form
        action={loginAction}
        className="flex flex-col items-center justify-center gap-y-4 pt-16 pb-7 lg:pt-40">
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

        <SubmitButton
          type="submit"
          className="bg-[#5CC5DB] p-2 text-center rounded-[10px] w-[201px] h-[54px] mt-4 disabled:opacity-70">
          Entrar
        </SubmitButton>
      </Form>

      <p className="text-center uppercase">não tem login?</p>
      <Link
        href="/signup"
        className="underline text text-[#000AFF] text-center uppercase block pb-1">
        clique aqui!
      </Link>
    </div>
  )
}

export default Login
