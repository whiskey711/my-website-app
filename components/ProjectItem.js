import Link from "next/link";
import Image from "next/image";

export default function ProjectItem(props) {
  return (
    // relative may cause overlap
    <div className="relative flex w-full h-auto justify-center items-center group rounded-lg shadow-xl p-3 bg-platinum hover:bg-gradient-to-br from-orange-peel to-phantone-red transition duration-300">
      <Image src={props.content.screenShot} alt="" className="rounded-lg group-hover:opacity-20 transition duration-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block transition text-center text-white">
        <h1 className="text-3xl font-bold tracking-wider">{props.content.title}</h1>
        <p className="mb-4 mt-1">{props.content.description}</p>
        <Link
          className="font-semibold px-5 py-2 rounded-md bg-white text-black"
          href={props.content.url}>
          Check
        </Link>
      </div>
    </div>
  );
}