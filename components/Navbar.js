import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flow-root bg-stone-200">
      <h1 className="float-left">
        Linfeng Xu
      </h1>
      <nav className="float-right">
        <ul className="flex space-x-5">
          <Link
            href="/"
            className="rounded-lg hover:underline">Home</Link>
          <li className="rounded-lg hover:underline">Resume</li>
          <Link
            href="/projects" 
            className="rounded-lg hover:underline">Projects</Link>
          <li className="rounded-lg hover:underline">Contact</li>
        </ul>
      </nav>
    </header>
  );
}