import React, { useState } from "react";
import "./Album.css";

export default function Album({album}) {
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {setCounter(counter => counter + 1)}
  const decreaseCounter = () => {
    if (counter > 0)
    setCounter(counter => counter - 1)
  }

  return (
    <>
      <img
        className="album-cover"
        src={album["albumCover"]}
      />
      <p>{album["release"]}</p>
      <ul className="album-songs">
        {album["albumSongs"].map(song => {
          return <li>{song}</li>;
        })}
      </ul>
      <p className="likes">
        Likes: {counter}
        <div>
          <i onClick={increaseCounter} className="fa-solid fa-thumbs-up"></i>
          <i onClick={decreaseCounter} className="fa-solid fa-thumbs-down"></i>
        </div>
      </p>
    </>
  );
}
