import { motion } from 'framer-motion'
import { Project } from '../../typings'
import { urlFor } from '../../sanity'

interface ProjectsProps {
  projects: Project[]
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="h-screen min-h-screen snap-center relative flex overflow-y-hidden flex-col text-center md:text-left md:flex-row max-w-full px-10 mx-auto justify-evenly items-center"
    >
      <h2 className="absolute top-24 uppercase tracking-[1rem] md:tracking-[1.25rem] text-zinc-500 text-xl md:text-2xl">
        Projetos
      </h2>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-zinc-400/20 scrollbar-thin scrollbar-thumb-[#e45960]">
        {projects?.map((project, index) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              src={urlFor(project.image).url()}
              className="h-fit max-h-72 md:h-96 md:w-fit"
              alt=""
            />

            <div className="space-y-10 md:px-10 px-0 max-w-6xl">
              <h3 className="text-xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#e45960]">
                  Projeto {index + 1} de {projects.length}:
                </span>{' '}
                {project.title}
              </h3>

              <p className="text-sm md:text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#e45960]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects
