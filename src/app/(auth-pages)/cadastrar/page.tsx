import Link from 'next/link'
import Input from '../../../components/Input'
import Form from '@/components/Form'
import SubmitButton from '@/components/SubmitButton'
import InputWithMask from '@/components/Input/InputWithMask'
import { createUser } from '@/actions'
import { routes } from '@/common/consts'

const Signup = () => {
  const createAccount = createUser.bind(null)

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl uppercase md:text-6xl">
        cadastre-se
      </h1>
      <Form
        action={createAccount}
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
          className="bg-lightBlue p-2 text-center rounded-[10px] w-[201px] h-[64px] mt-4">
          Cadastrar
        </SubmitButton>
      </Form>
      <p className="text-center uppercase">já tem uma conta?</p>
      <Link
        href={routes.ENTRAR}
        className="underline text-vividBlue text-center uppercase block pb-1">
        clique aqui!
      </Link>
    </div>
  )
}

export default Signup
