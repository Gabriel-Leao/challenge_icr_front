import Link from 'next/link'

import LeftArrowIcon from '../../../components/Svgs/LeftArrowIcon'
import RightArrowIcon from '../../../components/Svgs/RightArrowIcon'

const BookPage = () => {
  return (
    <div className="relative w-full bg-sienna flex items-center justify-center">
      
      <div className="relative max-h-fit min-h-screen bg-white md:w-[80%] xl:w-1/2">
          <div className="relative w-full flex items-center justify-center">
            <iframe width="609" height="850" src="https://embed.figma.com/proto/tkTJb4iU0aa1fx0h3DSwXD/Hemodi%C3%A1lise?node-id=1-2&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&embed-host=share" allowFullScreen></iframe>
          </div>
          <div className="relative w-full flex items-center justify-center">
            <iframe width="609" height="850" src="https://embed.figma.com/proto/NofcuCcG7bRZr2wN2iixqP/Exame-de-Sangue?node-id=1-2&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&embed-host=share" allowFullScreen></iframe>
          </div>
          <div className="relative w-auto flex items-center justify-center">
          <iframe width="609" height="850" src="https://embed.figma.com/proto/ORhch2zJbBJVx12008XNhB/Raio-X?node-id=1-2&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&embed-host=share" allowFullScreen></iframe>
          </div>          
      </div>
    </div>
  )
}

export default BookPage
