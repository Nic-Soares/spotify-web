import { Link } from "react-router-dom";
import { Song } from '../@types';

// Interface para as props do componente
interface SongItemProps extends Omit<Song, 'audio'> {
  index: number;
}

const SongItem: React.FC<SongItemProps> = ({ 
  image, 
  name, 
  duration,
  _id, 
  index 
}) => {
  return (
    <Link to={`/song/${_id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index + 1}</p>

        <div className="song-item__album">
          <img
            src={image}
            alt={`Imagem da Música ${name}`}
            className="song-item__image"
          />

          <p className="song-item__name">{name}</p>
        </div>
      </div>

      <p>{duration}</p>
    </Link>
  );
};

export default SongItem;
