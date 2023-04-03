import React, { useState } from "react";
import "./Album.css";

export default function Album({ album }) {
  const [counter, setCounter] = useState(0);
  const [activeButton, setActiveButton] = useState("");

  const increaseCounter = () => {
    if (activeButton != "thumbs-up") {
      setCounter((counter) => counter + 1);
      setActiveButton("thumbs-up");
    }
  };

  const decreaseCounter = () => {
    if (activeButton != "thumbs-down") setActiveButton("thumbs-down");
    if (counter > 0) setCounter((counter) => counter - 1);
  };

  return (
    <>
      <img className="album-cover" src={album["albumCover"]} />
      <p>Release: {album["release"]}</p>
      <ul className="album-songs">
        {album["albumSongs"].map((song) => {
          return <li>{song}</li>;
        })}
      </ul>
      <p className="likes">
        Likes: {counter}
        <div>
          <i
            onClick={increaseCounter}
            className={`fa-solid fa-thumbs-up ${
              activeButton === "thumbs-up" ? "thumbs-up" : ""
            }`}
          ></i>
          <i
            onClick={decreaseCounter}
            className={`fa-solid fa-thumbs-down ${
              activeButton === "thumbs-down" ? "thumbs-down" : ""
            }`}
          ></i>
        </div>
      </p>
    </>
  );
}
