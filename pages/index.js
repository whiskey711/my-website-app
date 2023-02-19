import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import eva from "../public/images/eva.jpeg"

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio Website</title>
      </Head>
      <main className="flex">
        <div>
          Hi, I am Linfeng Xu, a software engineer
        </div>
        <Image src={eva} alt="eva unit unknown" />
      </main>
    </>
  )
}
