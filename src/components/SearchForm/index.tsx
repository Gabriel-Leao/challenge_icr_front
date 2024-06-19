'use client'

import { useSearchParams } from 'next/navigation'

const SearchForm = () => {
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get('q') || ''
  return (
    <form action="/books">
      <input
        type="text"
        name="q"
        defaultValue={searchTerm}
        className="right-0 mb-8 rounded-xl border-white p-2 transition-colors delay-100 w-[519px] focus:bg-burntSienna focus:text-white xl:absolute xl:w-[330px] 2xl:w-[519px] max-w-full focus:placeholder-white"
        placeholder="Pesquisar por título"
      />
    </form>
  )
}

export default SearchForm
