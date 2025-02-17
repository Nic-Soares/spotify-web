import { Song } from '../types';
import SongItem from "./SongItem";
import { useState } from "react";

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
          <SongItem {...currentSongObj} index={index} key={currentSongObj._id} />
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