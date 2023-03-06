import Head from 'next/head'
import Link from 'next/link'
import About from '@/components/About'
import Projects from '@/components/projects'
import HomeSec from '@/components/HomeSec'
import Image from 'next/image'
import eva from "../public/images/eva.jpeg"

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio Website</title>
      </Head>
      <section id="home"><HomeSec /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"></section>
    </>
  )
}
