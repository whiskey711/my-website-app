import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
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
