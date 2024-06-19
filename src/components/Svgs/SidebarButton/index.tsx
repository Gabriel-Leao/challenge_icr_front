import { iconProps } from '@/@types/icons.interface'

const SidebarButton = ({ fill = `#fff`, className }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="bg-[#2BBAA5] rounded-full w-[50px] lg:w-[70px]"
      viewBox="0 0 100 100">
      <rect
        fill="#2BBAA5"
        rx="50"></rect>
      <path
        fill={fill}
        className={className}
        d="M25 31.714a3.568 3.568 0 013.571-3.571H71.43A3.568 3.568 0 0175 31.714a3.568 3.568 0 01-3.571 3.572H28.57A3.568 3.568 0 0125 31.714zm0 17.857A3.568 3.568 0 0128.571 46H71.43A3.568 3.568 0 0175 49.571a3.568 3.568 0 01-3.571 3.572H28.57A3.568 3.568 0 0125 49.57zM75 67.43A3.568 3.568 0 0171.429 71H28.57A3.568 3.568 0 0125 67.428a3.568 3.568 0 013.571-3.57H71.43A3.568 3.568 0 0175 67.427z"></path>
    </svg>
  )
}

export default SidebarButton
