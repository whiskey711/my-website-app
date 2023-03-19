import Link from "next/link";
import Image from "next/image";

export default function ProjectItem(props) {
  return (
    <div className="relative flex w-full h-auto justify-center items-center group rounded-lg shadow-xl p-3 bg-stone-200 hover:bg-gradient-to-r from-orange-300 to-orange-peel transition duration-300">
      <Image src={props.content.screenShot} alt="" className="rounded-lg group-hover:opacity-20 transition duration-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block transition text-center text-white">
        <h1 className="text-3xl font-bold tracking-wider">{props.content.title}</h1>
        <p className="mb-4 mt-1">{props.content.description}</p>
        <Link
          className="font-semibold px-5 py-2 rounded-md bg-indigo-dye"
          href={props.content.url}>
          Check
        </Link>
      </div>
    </div>
  );
}