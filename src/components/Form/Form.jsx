import React, { useState } from "react";
import "./Form.css";

export default function AlbumForm({albumInfo, setAlbumInfo}) {
  const [group, setGroup] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [albumCover, setAlbumCover] = useState("");
  const [release, setRelease] = useState("");
  const [albumSongs, setAlbumSongs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlbum = {
      group,
      name,
      desc,
      album: {
        albumCover,
        release,
        albumSongs,
      },
    };

    setAlbumInfo(albumInfo => [...albumInfo, newAlbum])

    e.target.reset()
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="text"
            placeholder="Group/Artist"
            onChange={(e) => setGroup(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Album/Song"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <label>
        <textarea
          placeholder="Description"
          onChange={(e) => setDesc(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Album/Song cover"
          onChange={(e) => setAlbumCover(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Release date"
          onChange={(e) => setRelease(e.target.value)}
        />
      </label>
      <label>
        <textarea
          placeholder="Songs"
          onChange={(e) =>
            setAlbumSongs(
              e.target.value.split("\n").filter((song) => song !== "")
            )
          }
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
