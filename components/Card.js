import Link from "next/link";
import tenzieScreenShot from "../public/images/tenzies-screenshot.png";
import Image from "next/image";

export default function Card(props) {
  return (
    <div className="flex justify-center">
      <div
        className="block max-w-sm rounded-lg bg-white shadow-lg">
        <Link href={props.content.url}>
          <Image
            className="rounded-t-lg"
            src={tenzieScreenShot}
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