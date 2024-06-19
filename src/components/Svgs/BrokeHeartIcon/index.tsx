import { iconProps } from '@/@types/icons.interface'

const BrokeHeartIcon = ({
  width = 70,
  height = 61,
  fill = '#F2BD35',
  className
}: iconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M16.324 1.03a19.578 19.578 0 019.38.724l6.808 10.596-10.309 10.308a1.06 1.06 0 00-.314.793c.013.3.136.574.355.78l15.313 14.218c.396.37 1.011.397 1.435.041.424-.355.52-.957.233-1.422l-8.258-13.412 12.4-10.336c.356-.287.479-.779.328-1.203L40.578 3.45a19.509 19.509 0 0113.084-2.406C63.096 2.602 70 10.75 70 20.307v.793a20.453 20.453 0 01-6.508 14.97L38.787 59.135A5.55 5.55 0 0135 60.625a5.55 5.55 0 01-3.787-1.49L6.508 36.07A20.453 20.453 0 010 21.1v-.793C0 10.75 6.904 2.602 16.324 1.029z"
        fill={fill}
      />
    </svg>
  )
}

export default BrokeHeartIcon
