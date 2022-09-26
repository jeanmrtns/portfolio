import { motion } from 'framer-motion'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import { Social } from '../../typings'

interface HeaderProps {
  socials: Social[]
}

const Header = ({ socials }: HeaderProps) => {
  return (
    <motion.header className="flex p-5 items-start xl:items-center justify-between sticky top-0 max-w-7xl mx-auto z-20">
      <motion.div
        className="flex items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            fgColor="gray"
            bgColor="transparent"
            url={social.url}
          />
        ))}
      </motion.div>

      <motion.div
        className="flex items-center gap-4 text-gray-300 cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <Link href="#contact">
          <div>
            <SocialIcon fgColor="gray" bgColor="transparent" network="email" />
            <a className="uppercase hidden lg:inline-flex text-sm text-gray-400">
              Entre em contato
            </a>
          </div>
        </Link>
      </motion.div>
    </motion.header>
  )
}

export default Header
