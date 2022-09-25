import Image from 'next/image'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { PageInfo } from '../../typings'
import { urlFor } from '../../sanity'
import BackgroundCircles from './BackgroundCircles'

interface HeroProps {
  pageInfo: PageInfo
}

const Hero = ({ pageInfo }: HeroProps) => {
  const [text] = useTypewriter({
    words: [
      `Hey! Meu nome é ${pageInfo?.name}`,
      'Bem vindo ao meu portfólio!',
      '<Focado />',
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative h-32 w-32 mx-auto rounded-full"
        src={urlFor(pageInfo?.heroImage).url()}
        alt={`${pageInfo?.name} photo`}
        width={128}
        height={128}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-zinc-600 pb-2 tracking-[0.75rem]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3 text-center">{text}</span>
          <Cursor cursorColor="#e45960" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">Sobre</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experiências</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projetos</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
