import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 flex justify-between bg-gray-50 px-5 py-3 mb-3 drop-shadow-md">
      <h1 className="font-bold text-2xl">
        Linfeng Xu
      </h1>
      <nav className="self-center">
        <ul className="flex space-x-5">
          <Link
            href="/"
            className="rounded-lg hover:underline decoration-2 underline-offset-8">Home</Link>
          <Link 
            href="#about"
            className="rounded-lg hover:underline decoration-2 underline-offset-8">About</Link>
          <Link
            href="#projects" 
            className="rounded-lg hover:underline decoration-2 underline-offset-8">Projects</Link>
          <Link 
            href="#contact"
            className="rounded-lg hover:underline decoration-2 underline-offset-8">Contact</Link>
        </ul>
      </nav>
    </header>
  );
}