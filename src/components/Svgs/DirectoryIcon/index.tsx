import { iconProps } from '@/@types/icons.interface'

const DirectoryIcon = ({ fill = '#E25B45', className }: iconProps) => {
  return (
    <svg
      viewBox="0 0 41 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M5.844 34.828H35.57a4.959 4.959 0 004.954-4.955V10.056a4.959 4.959 0 00-4.954-4.954H23.184a2.46 2.46 0 01-1.981-.99L19.716 2.13A4.964 4.964 0 0015.753.148H5.844A4.959 4.959 0 00.89 5.102v24.772a4.959 4.959 0 004.954 4.954z"
        fill={fill}
      />
    </svg>
  )
}

export default DirectoryIcon
