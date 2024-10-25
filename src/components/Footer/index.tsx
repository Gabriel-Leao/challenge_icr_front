import Link from 'next/link'

import WhatsappIcon from '../Svgs/WhatsappIcon'
import PhoneIcon from '../Svgs/PhoneIcon'
import MailIcon from '../Svgs/MailIcon'
import RealTechIcon from '../Svgs/RealTechIcon'
import { routes } from '@/common/consts'

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full bg-skyBlue">
      <div className="container mx-auto flex w-[95%] flex-col-reverse items-center justify-between gap-y-4 py-4 sm:flex-row sm:gap-y-0">
        <ul>
          <li>
            <a
              href="tel:+55113456789"
              className="my-3 flex">
              <PhoneIcon
                width={16}
                height={16}
              />
              <span className="text-white ml-1.5">+xx xxxxx-xxx</span>
            </a>
          </li>

          <li>
            <a
              href="mailto:hospitaldasclinicas@exemplo.com"
              className="my-3 flex underline decoration-white">
              <MailIcon
                width={16}
                height={16}
              />
              <span className="text-white ml-1.5">
                hospitaldasclinicas@exemplo.com
              </span>
            </a>
          </li>

          <li>
            <a
              href="https://wa.me/+55113456789"
              target="_blank"
              className="my-3 flex">
              <WhatsappIcon width={16} />
              <span className="text-white ml-1.5">+xx xxxxx-xxx</span>
            </a>
          </li>
        </ul>

        <div className="cursor-pointer">
          <Link href={routes.HOME}>
            <RealTechIcon
              width={70}
              height={70}
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
