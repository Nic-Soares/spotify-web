// front-end/src/types/types.ts
export interface Artist {
  _id: string;
  name: string;
  image: string;
  banner: string;
}

export interface Song {
  _id: string;
  name: string;
  image: string;
  duration: string;
  artist: string;
  audio: string;
}