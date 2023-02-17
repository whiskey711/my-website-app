import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio Website</title>
      </Head>
      <h1>My First Next JS Project</h1>
      <ul>
        <li>
          <Link href="/travel-journal">
            Travel Journal
          </Link>
        </li>
        <li>Meme Generator</li>
        <li>Tenzies</li>
        <li>Quizzical</li>
      </ul>
    </>
  )
}
