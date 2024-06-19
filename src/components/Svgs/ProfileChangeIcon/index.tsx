import { iconProps } from '@/@types/icons.interface'

interface profileChangeIcon extends iconProps {
  fillInside?: string
}

const ProfileChangeIcon = ({
  width = 75,
  height = 77,
  fill = '#E25B45',
  fillInside = '#fff',
  className
}: profileChangeIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 75 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <g filter="url(#filter0_i_2001_347)">
        <rect
          width={width}
          height={height}
          rx={37.5}
          fill={fill}
        />
      </g>
      <g clipPath="url(#clip0_2001_347)">
        <path
          d="M37.5 38c2.804 0 5.493-1.159 7.475-3.222 1.983-2.063 3.096-4.86 3.096-7.778 0-2.917-1.113-5.715-3.096-7.778C42.993 17.159 40.304 16 37.5 16c-2.804 0-5.493 1.159-7.475 3.222-1.983 2.063-3.096 4.86-3.096 7.778 0 2.917 1.113 5.715 3.096 7.778C32.007 36.841 34.696 38 37.5 38zm-3.774 4.125C25.59 42.125 19 48.983 19 57.448 19 58.857 20.098 60 21.453 60h32.094C54.902 60 56 58.857 56 57.448c0-8.465-6.59-15.323-14.726-15.323h-7.548z"
          fill={fillInside}
        />
      </g>
      <defs>
        <filter
          id="filter0_i_2001_347"
          x={0}
          y={0}
          width={width}
          height={height}
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
          <feOffset />
          <feGaussianBlur stdDeviation={11.65} />
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2={-1}
            k3={1}
          />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="shape"
            result="effect1_innerShadow_2001_347"
          />
        </filter>
        <clipPath id="clip0_2001_347">
          <rect
            x={19}
            y={16}
            width={37}
            height={44}
            rx={18.5}
            fill="#fff"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ProfileChangeIcon
