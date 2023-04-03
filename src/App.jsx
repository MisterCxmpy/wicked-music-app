import React, { useState } from "react";
import Artist from "./Artist";
import Form from "./Form";
import "./App.css";

export default function App() {
  return (
    <>
      <h1 id="title">Wicked Music App</h1>
      <div className="artist-album">
        <Artist
          {...{
            group: "Linkin Park",
            name: "Minutes to Midnight",
            desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio illo eligendi, dolor fugit tempora ad quae rerum, laudantium iste voluptates qui harum ea quaerat. Necessitatibus numquam amet aliquam! Libero, quaerat.",
            album: {
              albumCover:
                "https://upload.wikimedia.org/wikipedia/en/7/7a/Minutes_to_Midnight_cover.jpg",
              release: "May 14, 2007",
              albumSongs: [
                "What I've Done",
                "Bleed It Out",
                "Shadow of the Day",
                "Given Up",
                "Leave Out All The Rest",
              ],
            },
          }}
        />
        <Artist
          {...{
            group: "Eminem",
            name: "Recovery",
            desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio illo eligendi, dolor fugit tempora ad quae rerum, laudantium iste voluptates qui harum ea quaerat. Necessitatibus numquam amet aliquam! Libero, quaerat.",
            album: {
              albumCover:
                "https://upload.wikimedia.org/wikipedia/en/6/60/Recovery_Album_Cover.jpg",
              release: "June 18, 2010",
              albumSongs: [
                "Cold Wind Blows",
                "Talkin' 2 Myself",
                "On Fire",
                "Won't Back Down",
                "W.T.P.",
                "Going Through Changes",
                "Not Afraid",
                "Seduction",
                "No Love",
                "Space Bound",
                "Cinderella Man",
                "25 to Life",
                "So Bad",
                "Almost Famous",
                "Love the Way You Lie",
                "You're Never Over",
              ],
            },
          }}
        />
      </div>
      <div id="form">
          <Form />
      </div>
    </>
  );
}
