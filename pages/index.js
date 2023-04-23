import Head from 'next/head'
import About from '@/components/About'
import Projects from '@/components/Projects'
import HomeSec from '@/components/HomeSec'
import Image from 'next/image'
import Contact from '@/components/Contact'
import { useForm } from 'react-hook-form'

export default function Home() {

  return (
    <>
      <Head>
        <title>My Portfolio Website</title>
      </Head>
      <section id="home"><HomeSec /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  )
}
