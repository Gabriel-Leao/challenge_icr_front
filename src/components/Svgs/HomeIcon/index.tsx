import { iconProps } from '@/@types/icons.interface'

const HomeIcon = ({ fill = '#2BBAA5', className, shadow }: iconProps) => {
  return (
    <>
      {shadow ? (
        <svg
          viewBox="0 0 50 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}>
          <g filter="url(#filter0_i_10_184)">
            <path
              d="M49.987 22.18c0 1.563-1.302 2.787-2.778 2.787H44.43l.06 13.908c0 .234-.017.469-.043.703v1.398a3.471 3.471 0 01-3.472 3.472h-1.39c-.095 0-.19 0-.286-.008-.121.008-.243.008-.364.008H34.03a3.471 3.471 0 01-3.473-3.472V33.336a2.775 2.775 0 00-2.778-2.778h-5.556a2.775 2.775 0 00-2.778 2.778V40.976a3.472 3.472 0 01-3.472 3.472H11.12c-.13 0-.26-.008-.39-.017a3.763 3.763 0 01-.312.017h-1.39a3.472 3.472 0 01-3.472-3.472v-9.723c0-.079 0-.165.009-.243v-6.043H2.778C1.215 24.967 0 23.752 0 22.181c0-.782.26-1.476.868-2.084L23.127.695C23.735.087 24.429 0 25.037 0c.608 0 1.302.174 1.823.608l22.172 19.49c.695.607 1.042 1.301.955 2.083z"
              fill={fill}
            />
          </g>
          <defs>
            <filter
              id="filter0_i_10_184"
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
                result="effect1_innerShadow_10_184"
              />
            </filter>
          </defs>
        </svg>
      ) : (
        <svg
          viewBox="0 0 50 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}>
          <path
            d="M49.987 22.18c0 1.563-1.302 2.787-2.778 2.787H44.43l.06 13.908c0 .234-.017.469-.043.703v1.398a3.471 3.471 0 01-3.472 3.472h-1.39c-.095 0-.19 0-.286-.008-.121.008-.243.008-.364.008H34.03a3.471 3.471 0 01-3.473-3.472V33.336a2.775 2.775 0 00-2.778-2.778h-5.556a2.775 2.775 0 00-2.778 2.778V40.976a3.472 3.472 0 01-3.472 3.472H11.12c-.13 0-.26-.008-.39-.017a3.763 3.763 0 01-.312.017h-1.39a3.472 3.472 0 01-3.472-3.472v-9.723c0-.079 0-.165.009-.243v-6.043H2.778C1.215 24.967 0 23.752 0 22.181c0-.782.26-1.476.868-2.084L23.127.695C23.735.087 24.429 0 25.037 0c.608 0 1.302.174 1.823.608l22.172 19.49c.695.607 1.042 1.301.955 2.083z"
            fill={fill}
          />
        </svg>
      )}
    </>
  )
}

export default HomeIcon
