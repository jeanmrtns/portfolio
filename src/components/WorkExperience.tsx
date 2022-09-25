import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

const WorkExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h2 className="absolute top-24 uppercase tracking-[1.25rem] text-zinc-500 text-2xl">
        Experience
      </h2>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-zinc-400/20 scrollbar-thumb-[#e45960]">
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default WorkExperience
