import { motion } from 'framer-motion'
import { PageInfo } from '../../typings'
import { urlFor } from '../../sanity'

interface AboutProps {
  pageInfo: PageInfo
}

const About = ({ pageInfo }: AboutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center"
    >
      <h2 className="absolute top-24 uppercase tracking-[1.25rem] text-zinc-500 text-2xl">
        About
      </h2>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt={`${pageInfo?.name} photo`}
        className="hidden md:inline-flex -mb-20 md:mb-0 flex-shrink-0 w-24 h-24 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h3 className="text-xl mt-24 md:mt-8 md:text-4xl font-semibold">
          Aqui está um{' '}
          <span className="underline decoration-[#e45960]">pouco</span> sobre
          minha história
        </h3>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  )
}

export default About
