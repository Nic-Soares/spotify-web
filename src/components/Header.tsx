import logoSpotify from '../assets/logo/spotify-logo.png'

const  Header = () => {
  return (
    <header className='header'>
      <img src={logoSpotify} alt="Logo do Spotify"/>
      <a href="">
        <h1>Spotify</h1>
      </a>
    </header>
  );
};

export default Header;