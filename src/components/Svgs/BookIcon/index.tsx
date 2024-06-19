import { iconProps } from '@/@types/icons.interface'

const BookIcon = ({ fill = '#2BBAA5', className, shadow }: iconProps) => {
  return (
    <>
      {shadow ? (
        <svg
          viewBox="0 0 50 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}>
          <g filter="url(#filter0_i_10_138)">
            <path
              d="M10.714 0C4.8 0 0 4.8 0 10.714V46.43c0 5.915 4.8 10.714 10.714 10.714H46.43A3.568 3.568 0 0050 53.57 3.568 3.568 0 0046.429 50v-7.143A3.568 3.568 0 0050 39.286V3.57A3.568 3.568 0 0046.429 0H10.714zm0 42.857h28.572V50H10.714a3.568 3.568 0 01-3.571-3.571 3.568 3.568 0 013.571-3.572zm3.572-26.786c0-.982.803-1.785 1.785-1.785H37.5c.982 0 1.786.803 1.786 1.785a1.79 1.79 0 01-1.786 1.786H16.071a1.79 1.79 0 01-1.785-1.786zm1.785 5.358H37.5a1.79 1.79 0 011.786 1.785c0 .982-.804 1.786-1.786 1.786H16.071a1.791 1.791 0 01-1.785-1.786 1.79 1.79 0 011.785-1.785z"
              fill={fill}
            />
          </g>
          <defs>
            <filter
              id="filter0_i_10_138"
              x={0}
              y={0}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood
                floodOpacity={0}
                result="BackgroundImageFix"
              />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset
                dx={10}
                dy={4}
              />
              <feGaussianBlur stdDeviation={3.75} />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2={-1}
                k3={1}
              />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
              <feBlend
                in2="shape"
                result="effect1_innerShadow_10_138"
              />
            </filter>
          </defs>
        </svg>
      ) : (
        <svg
          viewBox="0 0 50 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}>
          <path
            d="M10.714 0C4.8 0 0 4.8 0 10.714V46.43c0 5.915 4.8 10.714 10.714 10.714H46.43A3.568 3.568 0 0050 53.57 3.568 3.568 0 0046.429 50v-7.143A3.568 3.568 0 0050 39.286V3.57A3.568 3.568 0 0046.429 0H10.714zm0 42.857h28.572V50H10.714a3.568 3.568 0 01-3.571-3.571 3.568 3.568 0 013.571-3.572zm3.572-26.786c0-.982.803-1.785 1.785-1.785H37.5c.982 0 1.786.803 1.786 1.785a1.79 1.79 0 01-1.786 1.786H16.071a1.79 1.79 0 01-1.785-1.786zm1.785 5.358H37.5a1.79 1.79 0 011.786 1.785c0 .982-.804 1.786-1.786 1.786H16.071a1.791 1.791 0 01-1.785-1.786 1.79 1.79 0 011.785-1.785z"
            fill={fill}
          />
        </svg>
      )}
    </>
  )
}

export default BookIcon
