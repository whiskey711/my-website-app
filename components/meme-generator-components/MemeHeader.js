import Image from "next/image";
import trollFace from "../../public/images/troll-face.png"

export default function MemeHeader() {
  return (
    <header>
      <Image src={trollFace} alt="troll face" />
      <h2>Meme Generator</h2>
      <h4>React Project</h4>
    </header>
  );
}