import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [1, 2, 3, 4]

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="h-screen min-h-screen snap-center relative flex overflow-y-hidden flex-col text-center md:text-left md:flex-row max-w-full px-10 mx-auto justify-evenly items-center"
    >
      <h2 className="absolute top-24 uppercase tracking-[1.25rem] text-zinc-500 text-2xl">
        Projetos
      </h2>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              src=""
              alt=""
            />

            <div className="space-y-10 md:px-10 px-0 max-w-6xl">
              <h3 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#e45960]">
                  Case Study {index + 1} of {projects.length}:
                </span>{' '}
                Google Clone
              </h3>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, et nihil! Provident, odit eaque! Natus labore et
                porro optio quia aliquid cumque accusamus, veritatis obcaecati.
                Earum doloribus ratione quia soluta.
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
