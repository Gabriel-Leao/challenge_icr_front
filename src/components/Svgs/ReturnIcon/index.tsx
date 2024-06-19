import { iconProps } from '@/@types/icons.interface'

const ReturnIcon = ({
  fill = '#fff',
  height = 58,
  width = 60,
  className
}: iconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M4.202 24.831H3.103A3.096 3.096 0 010 21.728V5.178c0-1.255.75-2.393 1.914-2.871a3.108 3.108 0 013.387.672l5.38 5.379c11.326-11.185 29.571-11.146 40.834.13 11.313 11.313 11.313 29.648 0 40.963-11.315 11.314-29.65 11.314-40.964 0a4.144 4.144 0 010-5.858 4.144 4.144 0 015.858 0c8.081 8.082 21.18 8.082 29.261 0 8.081-8.081 8.081-21.18 0-29.261-8.043-8.043-21.038-8.082-29.132-.13l5.314 5.328a3.108 3.108 0 01.673 3.387 3.099 3.099 0 01-2.87 1.914H4.201z"
        fill={fill}
      />
    </svg>
  )
}

export default ReturnIcon
