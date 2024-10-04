import { iconProps } from '@/@types/icons.interface'

const PhoneIcon = ({ fill = 'black', className, width, height }: iconProps) => {
  return (
    <svg
      viewBox="0 0 50 50"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <g clipPath="url(#clip0_28_477)">
        <path
          d="M16.104 2.402a3.894 3.894 0 00-4.63-z2.265L2.882 2.48A3.918 3.918 0 000 6.25C0 30.41 19.59 50 43.75 50c1.758 0 3.3-1.182 3.77-2.88l2.343-8.595a3.894 3.894 0 00-2.265-4.628l-9.375-3.907a3.894 3.894 0 00-4.522 1.133l-3.945 4.814a33.005 33.005 0 01-15.694-15.693l4.815-3.935a3.898 3.898 0 001.133-4.522l-3.907-9.375v-.01z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_28_477">
          <path
            fill="#fff"
            d="M0 0H50V50H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default PhoneIcon
