import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistsArray } from "../assets/database/artists";
import { Song as SongType } from "../types";

const Song: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const song = songsArray.find((currentSong) => currentSong._id === id);

  if (!song) {
    return <div>Música não encontrada</div>;
  }

  const { image, name, duration, artist, audio } = song;

  const artistObj = artistsArray.find(
    (currentArtist) => currentArtist.name === artist
  );

  if (!artistObj) {
    return <div>Artista não encontrado</div>;
  }

  const songsFromArtist = songsArray.filter(
    (currentSong) => currentSong.artist === artist
  );

  const getRandomSong = (songs: SongType[]): string => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex]._id;
  };

  const randomIdFromArtist = getRandomSong(songsFromArtist);
  const randomId2FromArtist = getRandomSong(songsFromArtist);

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img 
            src={image} 
            alt={`Imagem da música ${name}`} 
          />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artist}`}
          />
        </Link>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;