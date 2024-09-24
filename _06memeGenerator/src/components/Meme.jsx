import { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  // const [memeImage, setMemeImage] = useState(
  //   "https://i.imgflip.com/1g8my4.jpg"
  // );

  const [meme, setMeme] = useState({
    bottomText: "",
    topText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage(event) {
    event.preventDefault();
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  return (
    <>
      <main className='main'>
        <div className='main--btns'>
          <label htmlFor='top'></label>
          <input
            type='text'
            id='top'
            placeholder='Top text'
            className='form--input'
          />
          <label htmlFor='bottom'></label>
          <input
            type='text'
            id='bottom'
            placeholder='Bottom text'
            className='form--input'
          />
        </div>
        <div className='generate'>
          <form>
            <div className='btn'>
              <button onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>
          </form>
        </div>
      </main>
      <section className='memeImage'>
        <img src={meme.randomImage} alt='memeImage' className='meme--image' />
      </section>
    </>
  );
}
