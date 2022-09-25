import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WorkExperience from '../components/WorkExperience'

const Home: NextPage = () => {
  return (
    <div className="bg-zinc-900 text-zinc-100 h-screen snap-y snap-mandatory overflow-y-scroll z-0">
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
    </div>
  )
}

export default Home
