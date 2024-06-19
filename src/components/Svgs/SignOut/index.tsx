import { iconProps } from '@/@types/icons.interface'

const SignOut = ({
  width = 66,
  height = 68,
  fill = '#15A0BE',
  className
}: iconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 66 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M37.375 4.375A4.37 4.37 0 0033 0a4.37 4.37 0 00-4.375 4.375V35A4.37 4.37 0 0033 39.375 4.37 4.37 0 0037.375 35V4.375zM17.619 16.488a4.379 4.379 0 00-5.605-6.726C4.794 15.777.188 24.855.188 35 .188 53.115 14.884 67.813 33 67.813S65.813 53.114 65.813 35c0-10.145-4.622-19.223-11.84-25.238a4.391 4.391 0 00-6.166.56c-1.545 1.846-1.285 4.621.56 6.166A23.989 23.989 0 0157.05 35c0 13.29-10.774 24.063-24.063 24.063S8.924 48.288 8.924 35c0-7.438 3.377-14.096 8.681-18.512h.014z"
        fill={fill}
      />
    </svg>
  )
}

export default SignOut
