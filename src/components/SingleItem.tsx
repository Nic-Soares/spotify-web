import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay} from "@fortawesome/free-solid-svg-icons/faCirclePlay";
import { Link } from "react-router-dom";

interface SingleItemProps {
  id: string | number;
  name: string;
  image: string;
  duration?: string;
  artist?: string;
  idPath: string;
}

const SingleItem: React.FC<SingleItemProps> = ({id, image, name, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img src={image} alt={`Imagem ${artist ? `do Album da Música ${name}` : `do Artista ${name}`}`} />
        </div>
        
        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
      </div>
      
      <div className="single-item__texts">
        <p className="single-item__2lines single-item__title">{name}</p>
        <p className="single-item__type">{artist ?? "Artista"}</p>
      </div>
    </Link>
  );
};

export default SingleItem;