import MemeHeader from "@/components/meme-generator-components/MemeHeader"
import Meme from "@/components/meme-generator-components/Meme"

export default function memeGenerator(props) {
  return (
    <div className="project-bg">
      <div className="bg-stone-100 rounded-lg">
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