import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay} from "@fortawesome/free-solid-svg-icons/faCirclePlay";

const ItemList = () => {
  return (
    <section className="item-list">
      <div className="item-list__header">
        <h1>Artistas</h1>
        <a href="/">
            <p>Mostrar mais</p>
        </a>
      </div>
      
      <div className="item-list__container">
     
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt=""/> 
            </div>
            
            <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
          </div>
          
          <div className="single-item__texts">
            <p className="single-item__2lines single-item__title">Nome do Artista</p>
            <p className="single-item__type">Artista</p>
          </div>
        </div>
        
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt=""/> 
            </div>
            
            <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
          </div>
          
          <div className="single-item__texts">
            <p className="single-item__2lines single-item__title">Nome do Artista</p>
            <p className="single-item__type">Artista</p>
          </div>
        </div>
        
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt=""/> 
            </div>
            
            <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
          </div>
          
          <div className="single-item__texts">
            <p className="single-item__2lines single-item__title">Nome do Artista</p>
            <p className="single-item__type">Artista</p>
          </div>
        </div>
        
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt=""/> 
            </div>
            
            <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
          </div>
          
          <div className="single-item__texts">
            <p className="single-item__2lines single-item__title">Nome do Artista</p>
            <p className="single-item__type">Artista</p>
          </div>
        </div>
        
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt=""/> 
            </div>
            
            <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
          </div>
          
          <div className="single-item__texts">
            <p className="single-item__2lines single-item__title">Nome do Artista</p>
            <p className="single-item__type">Artista</p>
          </div>
        </div>
      
      </div>
      
    </section>
  );
};

export default ItemList;
