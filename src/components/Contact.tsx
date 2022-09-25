import { useForm, SubmitHandler } from 'react-hook-form'
import { motion } from 'framer-motion'
import { AiFillPhone } from 'react-icons/ai'
import { RiMapPin2Fill } from 'react-icons/ri'
import { FaEnvelope } from 'react-icons/fa'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center"
    >
      <h2 className="absolute top-24 uppercase tracking-[1.25rem] text-zinc-500 text-2xl">
        Entre em contato
      </h2>

      <div className="flex flex-col space-y-10">
        <h3 className="text-4xl font-semibold text-center">
          Eu tenho exatamente o que você precisa.{' '}
          <span className="decoration-[#e45960]/50 underline">
            Vamos Conversar.
          </span>
        </h3>

        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <AiFillPhone className="text-[#e45960] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+55 35997484820</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <RiMapPin2Fill className="text-[#e45960] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Poços de Caldas - MG | Brasil</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <FaEnvelope className="text-[#e45960] h-7 w-7 animate-pulse" />
            <a href="mailto:jeanmrtns4@gmail.com" className="text-2xl">
              jeanmrtns4@gmail.com
            </a>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              type="text"
              placeholder="Nome"
              className="contactInput"
            />
            <input
              {...register('email')}
              type="email"
              placeholder="Email"
              className="contactInput"
            />
          </div>

          <input
            {...register('subject')}
            type="text"
            className="contactInput"
            placeholder="Assunto"
          />

          <textarea
            {...register('message')}
            className="contactInput resize-none resize-y"
            placeholder="Sua mensagem"
          />
          <button
            className="bg-[#e45960] py-5 px-10 rounded-md text-white font-bold text-lg hover:bg-[#e45960]/80 transition-all"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact
