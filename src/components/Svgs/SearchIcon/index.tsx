import { iconProps } from '@/@types/icons.interface'

const SearchIcon = ({
  width = 30,
  height = 30,
  fill = `#fff`,
  className
}: iconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M24.375 12.188c0 2.689-.873 5.173-2.344 7.189l7.418 7.424a1.878 1.878 0 01-2.654 2.654l-7.418-7.424a12.118 12.118 0 01-7.19 2.344C5.455 24.375 0 18.92 0 12.187 0 5.455 5.455 0 12.188 0c6.732 0 12.187 5.455 12.187 12.188zm-12.188 8.437a8.436 8.436 0 100-16.873 8.436 8.436 0 000 16.873z"
        fill={fill}
      />
    </svg>
  )
}

export default SearchIcon
