import ItemList from "./ItemList";
import { artistsArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

interface MainProps {
  type?: string;
}

const Main = ({ type }: MainProps) => {
  return (
    <main className="main">
      {/* Item List de Artistas */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={10}
          itemsArray={artistsArray}
          path="/artists"
          idPath="/artist"
        />
      ) : null}

      {/* Item List de Músicas */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={20}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : null}
    </main>
  );
};

export default Main;