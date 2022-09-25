import { motion } from 'framer-motion'
import { Experience } from '../../typings'
import { urlFor } from '../../sanity'

interface ExperienceCardProps {
  experience: Experience
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <article className="flex flex-col items-center space-y-7 flex-shrink-0 rounded-lg w-[350px] md:w-[500px] h-[500px] md:h-auto xl:w-[600px] snap-center bg-zinc-800 p-10 opacity-40 cursor-pointer transition-opacity hover:opacity-100 overflow-hidden overflow-y-auto">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
      />
      <div className="px-0 md:px-10">
        <h3 className="text-4xl font-light">{experience?.jobTitle}</h3>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>

        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map((tech) => (
            <img
              key={tech._id}
              src={urlFor(tech.image).url()}
              className="rounded-full h-10 w-10"
              alt={`${tech.title} logo`}
            />
          ))}
        </div>

        <time className="uppercase py-5 block text-zinc-300">
          {new Date(experience?.dateStarted).toDateString()} -{' '}
          {experience.isCurrentlyWorkingHere
            ? 'MOMENTO'
            : new Date(experience?.dateEnded).toDateString()}
        </time>

        <ul className="list-disc space-y-2 ml-5 text-lg">
          {experience?.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
