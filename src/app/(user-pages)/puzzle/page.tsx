import Link from 'next/link'
import ReturnIcon from '../../../components/Svgs/ReturnIcon'

const Puzzle = () => {
  return (
    <div className="max-h-fit min-h-screen bg-white">
      <Link href="/bookpage">
        <button className="bg-[#E25B45] rounded-full p-5 ml-6 mt-6">
          <ReturnIcon />
        </button>
      </Link>
    </div>
  )
}

export default Puzzle
