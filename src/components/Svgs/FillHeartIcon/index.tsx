import { iconProps } from '@/@types/icons.interface'

const FillHeartIcon = ({
  width = 50,
  height = 50,
  fill = '#fff',
  className
}: iconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M4.64844 25.3359L22.2949 41.8105C23.0273 42.4941 23.9941 42.8749 25 42.8749C26.0059 42.8749 26.9727 42.4941 27.7051 41.8105L45.3516 25.3359C48.3203 22.5722 50 18.6952 50 14.6425V14.0761C50 7.24991 45.0684 1.4296 38.3398 0.306553C33.8867 -0.435634 29.3555 1.01944 26.1719 4.20304L25 5.37491L23.8281 4.20304C20.6445 1.01944 16.1133 -0.435634 11.6602 0.306553C4.93164 1.4296 0 7.24991 0 14.0761V14.6425C0 18.6952 1.67969 22.5722 4.64844 25.3359Z"
        fill={fill}
      />
    </svg>
  )
}

export default FillHeartIcon
