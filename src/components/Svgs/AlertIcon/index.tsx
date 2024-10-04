import { iconProps } from '@/@types/icons.interface'

const AlertIcon = ({ fill = '#fff', className, width, height }: iconProps) => {
  return (
    <svg
      width={width || 116}
      height={height || 100}
      viewBox="0 0 116 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M57.996 0a8.911 8.911 0 017.7 4.42l48.215 82.142a8.91 8.91 0 01.045 8.951A8.946 8.946 0 01106.21 100H9.782a8.945 8.945 0 01-7.746-4.487 8.965 8.965 0 01.045-8.95L50.295 4.42a8.911 8.911 0 017.7-4.42zm0 28.571a5.344 5.344 0 00-5.357 5.358v25a5.344 5.344 0 005.357 5.357 5.344 5.344 0 005.357-5.357v-25a5.344 5.344 0 00-5.357-5.358zm7.143 50a7.142 7.142 0 10-14.285 0 7.142 7.142 0 0014.285 0z"
        fill={fill}
      />
    </svg>
  )
}

export default AlertIcon
