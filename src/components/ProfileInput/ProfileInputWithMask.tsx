'use client'

import { inputProps } from '@/@types/input.interface'
import InputMask from 'react-input-mask'

const ProfileInputWithMask = ({
  type,
  label,
  placeholder,
  id,
  mask,
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
        <InputMask
          type={type}
          id={id}
          defaultValue={props.defaultValue}
          placeholder={placeholder}
          name={id}
          mask={mask || ''}
          className="w-[100%] bg-[#E7E7E7] h-[30px] md:h-[58px] placeholder:text-lg p-4 placeholder:text-[#5F5F5F] max-w-[552px] text-[#5F5F5F]"
        />
      </div>
    </div>
  )
}

export default ProfileInputWithMask
