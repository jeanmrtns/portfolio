import Image from 'next/image'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Hi, my name is Jean', 'Guy-who-loves-coding', '<Focused />'],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative h-32 w-32 mx-auto rounded-full"
        src="https://github.com/jeanmrtns.png"
        alt="Jean Martins Photo"
        width={128}
        height={128}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-zinc-600 pb-2 tracking-[0.75rem]">
          Frontend Developer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3 text-center">{text}</span>
          <Cursor cursorColor="#e45960" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero