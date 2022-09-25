import { motion } from 'framer-motion'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const ExperienceCard = () => {
  return (
    <article className="flex flex-col items-center space-y-7 flex-shrink-0 rounded-lg w-[31rem] md:w-[38rem] xl:w-[42rem] snap-center bg-zinc-800 p-10 opacity-40 cursor-pointer transition-opacity hover:opacity-100">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://udooku.com/assets/udooku-logo-06.44b09cc9.svg"
      />
      <div className="px-0 md:px-10">
        <h3 className="text-4xl font-light">Mid Level Web Developer</h3>
        <p className="font-bold text-2xl mt-1">udooku</p>

        <div className="flex space-x-2 my-2">
          <FaReact className="rounded-full h-10 w-10" />
          <SiTailwindcss className="rounded-full h-10 w-10" />
        </div>

        <time className="uppercase py-5 block text-zinc-300">
          May 2022 - Present
        </time>

        <ul className="list-disc space-y-2 ml-5 text-lg">
          <li>Creation of a new designer platform</li>
          <li>Maintenance of existing projects</li>
          <li>Collaborate with new ideas</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
