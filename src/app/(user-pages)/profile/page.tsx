import prisma from '../../../../prisma/prisma'
import parseJwt from '@/common/parseJwt'
import { cookies } from 'next/headers'
import NoAccount from '@/components/NoAccount'
import ProfileInput from '@/components/ProfileInput'
import ProfileChangeIcon from '@/components/Svgs/ProfileChangeIcon'
import { redirect } from 'next/navigation'
import Form from '@/components/Form'
import SubmitButton from '@/components/SubmitButton'
import ProfileInputWithMask from '@/components/ProfileInput/ProfileInputWithMask'

const getUser = async (access_token: string) => {
  try {
    const account = (await parseJwt(access_token)) || ''
    if (account && account.id) {
      return prisma.users.findFirstOrThrow({
        where: { id: account.id }
      })
    } else return null
  } catch (error) {
    return null
  }
}

const Profile = async () => {
  const access_token = cookies().get('access_token')?.value || ''
  const account = await getUser(access_token)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editUserAction = async (prevState: any, formData: FormData) => {
    'use server'
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const birthday = formData.get('birthday')

    if (account) {
      const response = await fetch(
        `${process.env.BACK_URL}/user/${account?.id}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, password, birthday })
        }
      )
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

  return (
    <div className="container mx-auto md:max-w-[80%] pb-20">
      <div className="rounded-xl bg-white md:mx-auto">
        {!account ? (
          <NoAccount />
        ) : (
          <>
            <h1 className="py-20 text-center text-xl font-bold capitalize md:text-3xl">
              Olá{account.name && ' ' + account.name}!
            </h1>
            <div className="flex flex-col justify-around lg:flex-row">
              <div>
                <Form
                  className="flex flex-col items-center gap-y-3 pb-10"
                  action={editUserAction}>
                  <ProfileInput
                    id="name"
                    label="Name:"
                    type="text"
                    defaultValue={account.name}
                    placeholder="Digite o seu nome"
                  />

                  <ProfileInput
                    id="email"
                    label="Email:"
                    type="email"
                    defaultValue={account.email}
                    placeholder="digite o seu email"
                  />

                  <ProfileInput
                    id="password"
                    label="Senha:"
                    type="password"
                    defaultValue={account.password}
                    placeholder="digite a sua senha"
                  />

                  <ProfileInputWithMask
                    id="birthday"
                    label="Nascimento:"
                    type="text"
                    defaultValue={account.birthday}
                    placeholder="digite a sua data de nascimento"
                    mask="99/99/9999"
                  />

                  <SubmitButton
                    type="submit"
                    className="bg-[#5CC5DB] p-2 rounded-[10px] max-w-[95%] h-[54px] w-[332px] mx-auto">
                    Atualizar
                  </SubmitButton>
                </Form>
              </div>

              <div>
                <h2 className="pb-4 text-center text-xl font-bold md:text-2xl">
                  Perfil
                </h2>
                <div className="flex flex-col items-center justify-center pb-6 gap-y-6 md:flex-row md:gap-x-6 lg:flex-col lg:gap-x-0">
                  <ProfileChangeIcon
                    fill="#FFFFFF"
                    fillInside="#000"
                    className="cursor-pointer"
                  />

                  <ProfileChangeIcon
                    fill="#66C4D1"
                    className="cursor-pointer"
                  />

                  <ProfileChangeIcon
                    fill="#83BFB1"
                    className="cursor-pointer"
                  />

                  <ProfileChangeIcon
                    fill="#E1E29A"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Profile
