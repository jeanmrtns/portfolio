import { motion } from 'framer-motion'
import Skill from './Skill'

const Skills = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="h-screen min-h-screen snap-center relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center"
    >
      <h2 className="absolute top-24 uppercase tracking-[1.25rem] text-zinc-500 text-2xl">
        Habilidades
      </h2>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-zinc-500 text-sm">
        Passe o mouse por cima da habilidade para a proficiência atual
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  )
}

export default Skills
