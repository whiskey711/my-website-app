import MemeHeader from "@/components/meme-generator-components/MemeHeader"
import Meme from "@/components/meme-generator-components/Meme"

export default function memeGenerator(props) {
  return (
    <div className="m-5 p-5 bg-gray-500 rounded-lg flex justify-center">
      <div className="bg-white rounded-lg">
        <MemeHeader />
        <Meme 
          allmemes={props.memes}
        />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const memeData = await res.json();
  const allMemes = memeData.data.memes;
  return {
    props: {
      memes: allMemes,
    }
  }
}