import { iconProps } from '@/@types/icons.interface'

const OpenBookIcon = ({
  width = 70,
  height = 55,
  fill = '#F2BD35',
  className
}: iconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M30.333 54.3c1.313.462 2.723-.498 2.723-1.883V6.552c0-.51-.195-1.02-.608-1.337C30.066 3.32 24.598.89 17.5.89c-6.137 0-11.873 1.616-15.3 2.929C.826 4.352 0 5.714 0 7.184v45.002c0 1.446 1.556 2.455 2.929 2.005 3.828-1.276 9.892-2.747 14.571-2.747 4.12 0 9.6 1.702 12.833 2.856zm9.334 0c3.232-1.154 8.713-2.855 12.833-2.855 4.679 0 10.743 1.47 14.571 2.746 1.373.462 2.929-.559 2.929-2.005V7.184c0-1.47-.826-2.832-2.2-3.354C64.373 2.505 58.637.889 52.5.889c-7.097 0-12.566 2.43-14.948 4.326-.401.316-.608.827-.608 1.337v45.865c0 1.385 1.422 2.345 2.723 1.883z"
        fill={fill}
      />
    </svg>
  )
}

export default OpenBookIcon
