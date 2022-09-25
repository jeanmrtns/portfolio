import { useForm, SubmitHandler } from 'react-hook-form'
import { motion } from 'framer-motion'
import { AiFillPhone } from 'react-icons/ai'
import { RiMapPin2Fill } from 'react-icons/ri'
import { FaEnvelope } from 'react-icons/fa'
import { PageInfo } from '../../typings'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

interface ContactProps {
  pageInfo: PageInfo
}

const Contact = ({ pageInfo }: ContactProps) => {
  const [isFormSent, setIsFormSent] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    emailjs
      .send(
        String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID),
        String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID),
        {
          ...formData,
        },
        String(process.env.NEXT_PUBLIC_EMAILJS_API_PUBLIC_KEY),
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
          setIsFormSent(true)
        },
        (err) => {
          console.log('FAILED...', err)
        },
      )

  if (isFormSent) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex flex-col text-center md:text-left md:flex-row md:max-w-7xl px-10 mx-auto justify-evenly items-center"
      >
        <strong>
          Seu formulário foi enviado! Em breve entrarei em contato!
        </strong>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row md:max-w-7xl px-10 mx-auto justify-evenly items-center"
    >
      <h2 className="absolute top-24 uppercase tracking-[1.25rem] text-zinc-500 md:text-2xl">
        Entre em contato
      </h2>

      <div className="flex flex-col space-y-10">
        <h3 className="text-xl md:text-4xl font-semibold text-center w-3/4 mx-auto md:w-full">
          Eu tenho exatamente o que você precisa.{' '}
          <span className="decoration-[#e45960]/50 underline">
            Vamos Conversar.
          </span>
        </h3>

        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <AiFillPhone className="text-[#e45960] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{pageInfo?.phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <RiMapPin2Fill className="text-[#e45960] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{pageInfo?.address}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <FaEnvelope className="text-[#e45960] h-7 w-7 animate-pulse" />
            <a
              href={`mailto:${pageInfo?.email}`}
              className="text-xl md:text-2xl"
            >
              {pageInfo?.email}
            </a>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 max-w-full w-fit mx-auto"
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
            className="contactInput resize-y"
            placeholder="Sua mensagem"
          />
          <button
            disabled={isSubmitting}
            className="bg-[#e45960] py-5 px-10 rounded-md text-white font-bold text-lg hover:bg-[#e45960]/80 transition-all disabled:hover:bg-[#e45960] disabled:cursor-not-allowed disabled:opacity-20"
            type="submit"
          >
            {isSubmitting ? 'Aguarde' : 'Enviar'}
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact
