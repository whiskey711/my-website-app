import Image from "next/image"
import logo from "../public/images/travel-journal-logo.png"

function Head() {
  return (
    <nav>
      <div>
        <Image src={logo} alt="travel journal logo" />
        <p>my traveling joural.</p>
      </div>
    </nav> 
  )
}

export default Head;