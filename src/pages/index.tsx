import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FaArrowCircleUp } from 'react-icons/fa'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

const Home: NextPage = () => {
  return (
    <div className="bg-zinc-900 text-zinc-100 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 scrollbar-thin scrollbar-track-zinc-400/20 scrollbar-thumb-[#e45960]">
      <Head>
        <title>Jean&apos;s Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-start">
        <About />
      </section>

      <section id="experience" className="snap-start">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <footer className="sticky bottom-5 w-full flex items-center justify-center">
        <Link href="#hero">
          <FaArrowCircleUp
            color="#e45960"
            className="w-5 h-5 cursor-pointer opacity-10 hover:opacity-100 transition-opacity"
          />
        </Link>
      </footer>
    </div>
  )
}

export default Home
