import React, { useState } from "react";
import Album from "./Album";
import "./Artist.css";

export default function Artist({ group, name, desc, album }) {

  function like(e) {
    e.target.classList.toggle('liked');
    e.target.classList.toggle('not-liked');
  }

  return (
    <div className="song">
      <i onClick={like} className="fa-solid fa-heart not-liked"></i>
      <h2 className="song-group">{group}</h2>
      <h3 className="song-name">{name}</h3>
      <div className="song-desc">{desc}</div>
      <Album {...{ album }} />
    </div>
  );
}
