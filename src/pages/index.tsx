import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import arrowUp from '../assets/arrowUp.svg'
import { Experience, PageInfo, Project, Skill, Social } from '../../typings'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { api } from '../lib/api'
import Image from 'next/image'

interface HomeProps {
  pageInfo: PageInfo
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}

const Home: NextPage<HomeProps> = ({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: HomeProps) => {
  return (
    <div className="bg-zinc-900 text-zinc-100 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 scrollbar-thin scrollbar-track-zinc-400/20 scrollbar-thumb-[#e45960]">
      <Head>
        <title>Jean&apos;s Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-start">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-start">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <Contact pageInfo={pageInfo} />
      </section>

      <footer className="sticky bottom-5 w-full flex items-center justify-center">
        <Link href="#hero">
          <Image
            width={25}
            height={25}
            src={arrowUp.src}
            alt=""
            className="w-5 h-5 cursor-pointer opacity-10 hover:opacity-100 transition-opacity"
          />
        </Link>
      </footer>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: { pageInfo },
  } = await api.get('/getPageInfo')
  const {
    data: { experiences },
  } = await api.get('/getExperiences')
  const {
    data: { projects },
  } = await api.get('/getProjects')
  const {
    data: { skills },
  } = await api.get('/getSkills')
  const {
    data: { socials },
  } = await api.get('/getSocials')

  return {
    props: {
      experiences,
      pageInfo,
      projects,
      skills,
      socials,
    },
  }
}
