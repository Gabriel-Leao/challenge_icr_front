'use client'

import { useSearchParams } from 'next/navigation'
import SubmitButton from '@/components/SubmitButton'
import SearchIcon from '@/components/Svgs/SearchIcon'

const SearchForm = () => {
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get('q') || ''
  return (
    <form
      action="/books"
      className="flex items-center gap-2 mb-8 right-0 xl:absolute w-full xl:w-fit justify-center">
      <input
        type="text"
        name="q"
        defaultValue={searchTerm}
        className="rounded-xl border-white p-2 transition-colors delay-100 focus:bg-sienna focus:text-white xl:w-[280px] 2xl:w-[519px] w-[230px] focus:placeholder-white lg:w-full h-[46px] sm:w-full outline-none"
        placeholder="Pesquisar por título"
      />
      <SubmitButton
        type="submit"
        className="bg-sienna p-2 rounded-2xl">
        <SearchIcon />
      </SubmitButton>
    </form>
  )
}

export default SearchForm
