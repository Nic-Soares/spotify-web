import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";

interface Artist {
  id: string | number;
  name: string;
  image: string;
  banner: string;
}

interface Song {
  id: string | number;
  name: string;
  image: string;
  duration: string;
  artist: string;
  audio: string;
}

interface ItemListProps {
  title: string;
  items: number;
  itemsArray: Artist[] | Song[];
  path: string;
  idPath: string;
}

// const ItemList: React.FC<ItemListProps> = ( {title} ) => {

// const ItemList: React.FC<{ title: string }> = ({ title }) => {

const ItemList: React.FC<ItemListProps> = ( {title, items, itemsArray, path, idPath} ) => {
  
  return (
    <section className="item-list">
      <div className="item-list__header">
        <h1>{title} Populares</h1>
        <Link to={path}>
            <p>Mostrar mais</p>
        </Link>
      </div>
      
      <div className="item-list__container">
        {itemsArray
          .filter((_, index) => index < items)
          .map((currObj, index) => (
            <SingleItem 
              {...currObj} 
              idPath={idPath} 
              key={`${title}-${index}`}
            />
          ))
        }
      </div>
      
    </section>
  );
};

export default ItemList;


// COMMENTS: