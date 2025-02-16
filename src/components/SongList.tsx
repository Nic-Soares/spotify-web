import SongItem from "./SongItem";
import { useState } from "react";

interface Song {
  id: string | number;
  name: string;
  image: string;
  duration: string;
  artist: string;
  audio: string;
}

interface SongListProps {
  songsArray: Song[];
}

const SongList = ({ songsArray }: SongListProps) => {
  const [items, setItems] = useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((_, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={currentSongObj.id} />
        ))}
      
      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5);
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;