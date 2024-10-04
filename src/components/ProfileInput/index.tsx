import { inputProps } from '@/@types/input.interface'

const ProfileInput = ({
  type,
  label,
  placeholder,
  id,
  ...props
}: inputProps) => {
  return (
    <div className="mx-auto max-w-[95%] w-[552px]">
      <label
        htmlFor={id}
        className="block pb-3">
        {label}
      </label>

      <div className="flex items-center gap-x-3">
        <input
          {...props}
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          className="w-[100%] bg-offWhite h-[30px] md:h-[58px] placeholder:text-lg p-4 placeholder:text-slateGray max-w-[552px] text-slateGray"
        />
      </div>
    </div>
  )
}

export default ProfileInput
