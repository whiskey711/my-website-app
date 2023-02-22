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
    <main>
      <div>
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="bg-slate-300" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <img src={meme.randomImage} alt="meme image" />
      <h2>{meme.topText}</h2>
      <h2>{meme.bottomText}</h2>
    </main>
  );
}