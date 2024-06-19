import { iconProps } from '@/@types/icons.interface'

const ProfileIcon = ({ fill = '#2BBAA5', className, shadow }: iconProps) => {
  return (
    <>
      {shadow ? (
        <svg
          viewBox="0 0 50 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}>
          <g filter="url(#filter0_i_10_160)">
            <path
              d="M25 28.571a14.286 14.286 0 100-28.57 14.286 14.286 0 000 28.57zm-5.1 5.358c-10.994 0-19.9 8.906-19.9 19.9a3.315 3.315 0 003.315 3.314h43.37A3.315 3.315 0 0050 53.828c0-10.993-8.906-19.9-19.9-19.9H19.9z"
              fill={fill}
            />
          </g>
          <defs>
            <filter
              id="filter0_i_10_160"
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
                result="effect1_innerShadow_10_160"
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
            d="M25 28.571a14.286 14.286 0 100-28.57 14.286 14.286 0 000 28.57zm-5.1 5.358c-10.994 0-19.9 8.906-19.9 19.9a3.315 3.315 0 003.315 3.314h43.37A3.315 3.315 0 0050 53.828c0-10.993-8.906-19.9-19.9-19.9H19.9z"
            fill={fill}
          />
        </svg>
      )}
    </>
  )
}

export default ProfileIcon
