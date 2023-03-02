import Image from "next/image"
import logo from "../../public/images/travel-journal-logo.png"

function Head() {
  return (
    <nav className="bg-red-500 rounded-t-lg">
      <div className="flex justify-center items-center p-3">
        <Image src={logo} alt="travel journal logo" />
        <p className="text-white ml-2">my traveling joural.</p>
      </div>
    </nav> 
  )
}

export default Head;