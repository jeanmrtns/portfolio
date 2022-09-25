import { motion } from 'framer-motion'
import { Skill } from '../../typings'
import { urlFor } from '../lib/sanity'

interface SkillBadgeProps {
  directionLeft?: boolean
  skill: Skill
}

const SkillBadge = ({ directionLeft, skill }: SkillBadgeProps) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-zinc-500 w-12 h-12 md:h-24 md:w-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 z-0 group-hover:opacity-80 duration-300 transition ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default SkillBadge
