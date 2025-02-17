import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface PlayerProps {
  duration: string;
  randomIdFromArtist: string;
  randomId2FromArtist: string;
  audio: string;
}

const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

const timeInSeconds = (timeString: string): number => {
  const [minutes, seconds] = timeString.split(":").map(Number);
  return seconds + minutes * 60;
};

const Player: React.FC<PlayerProps> = ({
  duration,
  randomIdFromArtist,
  randomId2FromArtist,
  audio,
}) => {
  const audioPlayer = useRef<HTMLAudioElement>(null);
  const progressBar = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>(formatTime(0));
  const durationInSeconds = timeInSeconds(duration);

  // Efeito para lidar com mudanças no áudio
  useEffect(() => {
    const audioElement = audioPlayer.current;
    
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(formatTime(0));
      if (progressBar.current) {
        progressBar.current.style.setProperty("--_progress", "0%");
      }
    }
  }, [audio]);

  // Efeito para limpar quando o componente for desmontado
  useEffect(() => {
    const audioElement = audioPlayer.current;
    
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    };
  }, []);

  const playPause = () => {
    if (!audioPlayer.current) return;

    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!audioPlayer.current || !progressBar.current) return;

      if (isPlaying) {
        setCurrentTime(formatTime(audioPlayer.current.currentTime));
      }

      progressBar.current.style.setProperty(
        "--_progress",
        `${(audioPlayer.current.currentTime / durationInSeconds) * 100}%`
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying, durationInSeconds]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={playPause}
        />

        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{currentTime}</p>

        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;