import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between bg-gray-50 px-5 py-3 mb-5 drop-shadow-md">
      <h1 className="font-bold text-2xl">
        Linfeng Xu
      </h1>
      <nav className="self-center">
        <ul className="flex space-x-5">
          <Link
            href="/"
            className="rounded-lg hover:underline decoration-2 underline-offset-8">Home</Link>
          <li className="rounded-lg hover:underline decoration-2 underline-offset-8">Resume</li>
          <Link
            href="/projects" 
            className="rounded-lg hover:underline decoration-2 underline-offset-8">Projects</Link>
          <li className="rounded-lg hover:underline decoration-2 underline-offset-8">Contact</li>
        </ul>
      </nav>
    </header>
  );
}