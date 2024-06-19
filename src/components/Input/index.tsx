import { inputProps } from '@/@types/input.interface'

const Input = ({ type, id, label, placeholder }: inputProps) => {
  return (
    <div className="flex flex-col gap-x-4 gap-y-2 max-w-[95%] md:flex-row md:gap-y-0">
      <label
        htmlFor={id}
        className="bg-[#E1E29A] py-4 px-9 text-xl text-center block min-w-[206px] h-[58px]">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        name={id}
        className="bg-[#E7E7E7] w-[482px] h-[58px] px-2 max-w-[100%]"
      />
    </div>
  )
}

export default Input
