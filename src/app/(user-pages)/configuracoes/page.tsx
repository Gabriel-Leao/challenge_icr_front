import SettingsButton from '../../../components/SettingsButton'
import SunIcon from '../../../components/Svgs/SunIcon'
import OpenBookIcon from '../../../components/Svgs/OpenBookIcon'
import BrokeHeartIcon from '../../../components/Svgs/BrokeHeartIcon'
import FontIcon from '../../../components/Svgs/FontIcon'
import SignOut from '../../../components/Svgs/SignOut'
import NoAccount from '../../../components/NoAccount'
import parseJwt from '@/common/parseJwt'
import { cookies } from 'next/headers'
import { logout, removeAllFavorites } from '@/actions'

const Settings = async () => {
  const account = (await parseJwt(cookies().get('access_token')?.value)) || ''
  const resetFavorites = removeAllFavorites.bind(null, account.id)

  return (
    <>
      {!account ? (
        <NoAccount title="Você precisa logar para acessar as configurações" />
      ) : (
        <div className="w-full gap-y-7 pb-20">
          <div className="flex flex-col gap-y-8">
            <SettingsButton
              icon={<SunIcon />}
              text="modo claro"
            />

            <SettingsButton
              icon={<OpenBookIcon />}
              text="Limpar Livros"
            />

            <form action={resetFavorites}>
              <SettingsButton
                icon={<BrokeHeartIcon />}
                text="Resetar favoritos"
              />
            </form>

            <SettingsButton
              icon={<FontIcon />}
              text="aumentar fonte"
            />

            <form action={logout}>
              <button className="flex items-center gap-x-3 opacity-70 delay-200 ease-in min-h-[100px] rounded-r-[60px] rounded-l-[60px] max-w-[95%] w-[528px] hover:opacity-100 md:mx-auto md:gap-x-7">
                <div className="flex items-center justify-center rounded-full bg-white min-h-[100px] w-[85px] md:w-[100px]">
                  <SignOut />
                </div>
                <div className="text-lg capitalize">Sair</div>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Settings
