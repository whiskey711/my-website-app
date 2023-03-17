import Link from "next/link";
import Image from "next/image";

export default function Card(props) {
  return (
    <div className="flex justify-center ">
      <div className="block max-w-xl rounded-lg bg-zinc-200 shadow-lg mr-5">
        <Link 
          href={props.content.url}
          className="overflow-hidden rounded-lg">
          <Image
            className="scale-125"
            src={props.content.screenShot}
            alt="" />
        </Link>
        <div className="p-6">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
            {props.content.title}
          </h5>
          <p className="mb-4 text-base text-neutral-600">
            {props.content.description}
          </p>
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-blue-600 shadow-md transition duration-150 ease-in-out">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}