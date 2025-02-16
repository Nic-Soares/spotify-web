import ItemList from "./ItemList";
import artistArray from "../assets/database/artists";
import songsArray from "../assets/database/songs";


const Main = () => {
  return (
    <main className="main">
      {/* Item List de Artistas */}
      <ItemList 
        title="Artistas" 
        items={5} 
        itemsArray={ artistArray }
        path="/artists"
        idPath="/artist"
      />
      
      {/* Item List de Músicas */}
      <ItemList 
        title="Musicas" 
        items={10} 
        itemsArray={ songsArray } 
        path="/songs"
        idPath="/song"
      />
    </main>
  );
};

export default Main;