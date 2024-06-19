import { iconProps } from '@/@types/icons.interface'

const DefaultImg = ({
  fill = '#fff',
  className,
  width = 100,
  height = 100
}: iconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M0 12.75C0 5.855 5.605.25 12.5.25h75c6.894 0 12.5 5.605 12.5 12.5v62.5c0 6.894-5.606 12.5-12.5 12.5h-75C5.605 87.75 0 82.144 0 75.25v-62.5zm63.242 20.8a4.677 4.677 0 00-3.867-2.05 4.65 4.65 0 00-3.867 2.05L38.516 58.474l-5.176-6.465a4.706 4.706 0 00-3.653-1.758 4.677 4.677 0 00-3.652 1.758l-12.5 15.625a4.676 4.676 0 00-.566 4.96 4.69 4.69 0 004.219 2.657h65.624c1.739 0 3.34-.957 4.141-2.5a4.703 4.703 0 00-.273-4.824L63.242 33.55zM21.875 31.5a9.375 9.375 0 100-18.75 9.375 9.375 0 000 18.75z"
        fill={fill}
      />
    </svg>
  )
}

export default DefaultImg
