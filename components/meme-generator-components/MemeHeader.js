import Image from "next/image";
import trollFace from "../../public/images/troll-face.png"

export default function MemeHeader() {
  return (
    <header className="flex justify-between items-center p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-lg">
      <div className="flex items-center h-8">
        <Image src={trollFace} alt="troll face" className="h-full w-auto" />
        <h2 className="font-bold text-2xl text-white ml-2">Meme Generator</h2>
      </div>
      <h4 className="text-white text-sm">React Project</h4>
    </header>
  );
}