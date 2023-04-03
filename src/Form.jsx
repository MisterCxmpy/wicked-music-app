import React, { useState } from "react";
import "./Form.css";

export default function AlbumForm() {
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>   
        <label>
          <input
            type="text"
            value={group}
            placeholder="Group/Artist"
            onChange={(e) => setGroup(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            value={name}
            placeholder="Album/Song"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <label>
        <textarea placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </label>
      <label>
        <input
          type="text"
          value={albumCover}
          placeholder="Album/Song cover"
          onChange={(e) => setAlbumCover(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text"
          value={release}
          placeholder="Release date"
          onChange={(e) => setRelease(e.target.value)}
        />
      </label>
      <label>
        <textarea
          placeholder="Songs"
          value={albumSongs.join("\n")}
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
