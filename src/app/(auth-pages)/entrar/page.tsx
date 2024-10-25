import Link from 'next/link'
import Input from '../../../components/Input'
import Form from '../../../components/Form'
import SubmitButton from '@/components/SubmitButton'
import { login } from '@/actions'
import { routes } from '@/common/consts'

const Login = () => {
  const authenticate = login.bind(null)

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl uppercase md:text-6xl">bem-vindo!</h1>
      <Form
        action={authenticate}
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
          className="bg-lightBlue p-2 text-center rounded-[10px] w-[201px] h-[64px] mt-4 disabled:opacity-70">
          Entrar
        </SubmitButton>
      </Form>

      <p className="text-center uppercase">não possui uma conta?</p>
      <Link
        href={routes.CADASTRAR}
        className="underline text-vividBlue text-center uppercase block pb-1">
        clique aqui!
      </Link>
    </div>
  )
}

export default Login
