import { iconProps } from '@/@types/icons.interface'

const FontIcon = ({
  width = 62,
  height = 62,
  fill = '#F2BD35',
  className
}: iconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M34.727 3.219A4.392 4.392 0 0030.625.375a4.392 4.392 0 00-4.102 2.844L7.903 52.875H4.374A4.37 4.37 0 000 57.25a4.37 4.37 0 004.375 4.375H17.5a4.37 4.37 0 004.375-4.375 4.37 4.37 0 00-4.375-4.375h-.246l2.46-6.563h21.821l2.461 6.563h-.246a4.37 4.37 0 00-4.375 4.375 4.37 4.37 0 004.375 4.375h13.125a4.37 4.37 0 004.375-4.375 4.37 4.37 0 00-4.375-4.375h-3.527L34.727 3.219zm3.527 34.343H22.996l7.629-20.357 7.629 20.358z"
        fill={fill}
      />
    </svg>
  )
}

export default FontIcon
