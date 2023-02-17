import Image from "next/image"
import logo from "../public/images/travel-journal-logo.png"

function Head() {
  return (
    <nav class="navbar bg-danger">
      <div class="container-fluid">
        <div class="navbar-brand text-white">
          <Image
            src={logo}
            alt="travel-journal-logo"
            class="d-inline-block align-text-top"
          />
          my traveling joural.
        </div>
      </div>
    </nav>   
  )
}

export default Head;