import { useState, useEffect} from "react";

export default function Meme(props) {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  });
  const [allMemes, setAllMemes] = useState(props.allmemes);
  /*
  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const memeData = await res.json();
      setAllMemes(memeData.data.memes);
    }
    getMemes();
  }, []);
  */

  useEffect(() => {
    getMemeImage();
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
  }

  return (
    <main>
      Main body
      <img src={meme.randomImage} alt="meme image" />
      <button className="bg-slate-300" onClick={getMemeImage}>
        Get a new meme image
      </button>
    </main>
  );
}