import { iconProps } from '@/@types/icons.interface'

const FavoritesIcon = ({ fill = '#2BBAA5', className, shadow }: iconProps) => {
  return (
    <>
      {shadow ? (
        <svg
          viewBox="0 0 50 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}>
          <g filter="url(#filter0_i_10_214)">
            <path
              d="M4.648 25.22l17.647 16.474A3.964 3.964 0 0025 42.76c1.006 0 1.973-.381 2.705-1.065L45.352 25.22A14.609 14.609 0 0050 14.526v-.566a13.957 13.957 0 00-23.828-9.873L25 5.259l-1.172-1.172A13.957 13.957 0 000 13.96v.566c0 4.053 1.68 7.93 4.648 10.694z"
              fill={fill}
            />
          </g>
          <defs>
            <filter
              id="filter0_i_10_214"
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
                result="effect1_innerShadow_10_214"
              />
            </filter>
          </defs>
        </svg>
      ) : (
        <svg
          viewBox="0 0 50 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}>
          <path
            d="M4.648 25.22l17.647 16.474A3.964 3.964 0 0025 42.76c1.006 0 1.973-.381 2.705-1.065L45.352 25.22A14.609 14.609 0 0050 14.526v-.566a13.957 13.957 0 00-23.828-9.873L25 5.259l-1.172-1.172A13.957 13.957 0 000 13.96v.566c0 4.053 1.68 7.93 4.648 10.694z"
            fill={fill}
          />
        </svg>
      )}
    </>
  )
}

export default FavoritesIcon
