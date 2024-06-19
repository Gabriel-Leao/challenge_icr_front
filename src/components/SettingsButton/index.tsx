import { ReactNode } from 'react'

interface SettingsButtonProps {
  text: string
  icon: ReactNode
  onCLick?: () => void
}

const SettingsButton = ({ text, icon }: SettingsButtonProps) => {
  return (
    <button className="flex items-center bg-[#F2BD35] min-h-[100px] rounded-r-[60px] rounded-l-[60px] gap-x-3 md:gap-x-7 max-w-[95%] w-[528px] md:mx-auto opacity-70 hover:opacity-100 delay-200 ease-in">
      <div className="flex items-center justify-center rounded-full bg-white min-h-[100px] w-[85px] md:w-[100px]">
        {icon}
      </div>
      <div className="text-lg capitalize">{text}</div>
    </button>
  )
}

export default SettingsButton
