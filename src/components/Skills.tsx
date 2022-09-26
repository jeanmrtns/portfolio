import { motion } from 'framer-motion'
import { Skill } from '../../typings'
import SkillBadge from './SkillBadge'

interface SkillsProps {
  skills: Skill[]
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="h-screen min-h-screen snap-center relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center"
    >
      <h2 className="absolute top-24 uppercase tracking-[1rem] md:tracking-[1.25rem] text-zinc-500 text-xl md:text-2xl">
        Habilidades
      </h2>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-zinc-500 text-sm">
        Passe o mouse por cima da habilidade para a proficiência atual
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <SkillBadge skill={skill} key={skill._id} />
        ))}

        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <SkillBadge skill={skill} key={skill._id} directionLeft />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
