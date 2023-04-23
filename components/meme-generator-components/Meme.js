import { useState, useEffect } from "react";

export default function Meme(props) {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  });
  const [allMemes, setAllMemes] = useState(props.allmemes);

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

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main className="w-[600px]">
      <div className="m-5 grid grid-rows-2 grid-cols-2 gap-5">
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          className="input"
        />
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md col-span-2 text-white" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="relative m-5 text-white">
        <img src={meme.randomImage} alt="meme image" />
        <h2 className="absolute top-7 font-impact uppercase text-2xl left-1/2 -translate-x-1/2 -translate-y-1/2 text-shadow shadow-black w-2/3 text-center">{meme.topText}</h2>
        <h2 className="absolute bottom-0 font-impact uppercase text-2xl left-1/2 -translate-x-1/2 -translate-y-1/2 text-shadow shadow-black w-2/3 text-center">{meme.bottomText}</h2>
      </div>
    </main>
  );
}