import React from'react';

export default function Main(){
    // const [memeImage, setmemeImage] = React.useState("");
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage:""
    })
    const [allMemeImages, setallMemeImages] = React.useState([])
    React.useEffect(() => {
      async function getMemes() {
        const res = await fetch('https://api.imgflip.com/get_memes');
        const data = await res.json();
        setallMemeImages(data.data.memes)
      }
      getMemes();
    }, [])

    function getmemeUrl(){
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme((prev) => ({
          ...prev,
          randomImage: url,
        }));  //setMemeImage
        // const url = allMemeImages[randomNumber].url
        // console.log(url)
    }

    function handleChange(event) {
      const {name, value} = event.target
      setMeme(prevMeme => ({
        ...prevMeme,
        [name]:value
      }))
    }

    return (
      <main>
        <div className="form">
          <input
            className="form-input"
            type="text"
            value={meme.topText}
            name="topText"
            onChange={handleChange}
            placeholder="Top-Text"
          />
          <input
            className="form-input"
            type="text"
            value={meme.bottomText}
            name="bottomText"
            onChange={handleChange}
            placeholder="Bottom-Text"
          />
          <button className="form-button" onClick={getmemeUrl}>
            For new meme - Click Here!
          </button>
        </div>
        <div className="meme">
          <img src={meme.randomImage} className="memeImg" />
          <h2 className="meme-text Top">{meme.topText}</h2>
          <h2 className="meme-text Bottom">{meme.bottomText}</h2>
        </div>
      </main>
    );
}