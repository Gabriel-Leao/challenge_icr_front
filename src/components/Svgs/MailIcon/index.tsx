import { iconProps } from '@/@types/icons.interface'

const MailIcon = ({ fill = 'black', className, width, height }: iconProps) => {
  return (
    <svg
      viewBox="0 0 50 50"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M4.688 6.25a4.689 4.689 0 00-2.813 8.438l21.25 15.937c1.113.83 2.637.83 3.75 0l21.25-15.938a4.689 4.689 0 00-2.813-8.438H4.688zM0 17.188V37.5a6.256 6.256 0 006.25 6.25h37.5A6.256 6.256 0 0050 37.5V17.187L28.75 33.126a6.24 6.24 0 01-7.5 0L0 17.187z"
        fill={fill}
      />
    </svg>
  )
}

export default MailIcon
