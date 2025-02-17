import { artistsArray } from "../data/artists.js";
import { songsArray } from "../data/songs.js";
import { db } from "./connect.js";

interface Artist {
  id: number;
  image: string;
  name: string;
  banner: string;
}

interface Song {
  id: number;
  image: string;
  name: string;
  duration: string;
  artist: string;
  audio: string;
}

type ArtistWithoutId = Omit<Artist, 'id'>;
type SongWithoutId = Omit<Song, 'id'>;

// Função principal assíncrona auto-executável
const insertData = async () => {
  try {
    const newArtistArray = artistsArray.map((currentArtistObj: Artist): ArtistWithoutId => {
      const { id, ...artistWithoutId } = currentArtistObj;
      return artistWithoutId;
    });

    const newSongsArray = songsArray.map((currentSongObj: Song): SongWithoutId => {
      const { id, ...songWithoutId } = currentSongObj;
      return songWithoutId;
    });

    const responseSongs = await db.collection("songs").insertMany(newSongsArray);
    const responseArtists = await db
      .collection("artists")
      .insertMany(newArtistArray);

    console.log(responseSongs);
    console.log(responseArtists);
  } catch (error) {
    console.error("Erro ao inserir dados:", error);
  }
};

// Executar a função
insertData();