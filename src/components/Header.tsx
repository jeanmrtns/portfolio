import { motion } from 'framer-motion'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'

const Header = () => {
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
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://github.com/jeanmrtns"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://instagram.com/jeanmrtns"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://linkedin.com/in/jeanmrtns"
        />
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
        <SocialIcon fgColor="gray" bgColor="transparent" network="email" />
        <Link
          href="#contact"
          className="uppercase hidden md:block text-sm text-gray-400"
        >
          Entre em contato
        </Link>
      </motion.div>
    </motion.header>
  )
}

export default Header
