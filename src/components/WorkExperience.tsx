import { motion } from 'framer-motion'
import { Experience } from '../../typings'
import ExperienceCard from './ExperienceCard'

interface WorkExperienceProps {
  experiences: Experience[]
}

const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h2 className="absolute top-24 uppercase tracking-[1rem] md:tracking-[1.25rem] text-zinc-500 text-xl md:text-2xl">
        Experiências
      </h2>

      <div className="w-full mt-24 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-zinc-400/20 scrollbar-thumb-[#e45960]">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience
