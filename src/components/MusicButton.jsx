import React, { useState, useEffect } from "react";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // Mock audio source
  const audioSrc =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  let audioPlayer = new Audio(audioSrc);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(audioPlayer.currentTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleBackward = () => {
    audioPlayer.currentTime -= 10; 
  };

  const handleForward = () => {
    audioPlayer.currentTime += 10; 
  };

  return (
    <div className="flex items-center gap-7 py-4 justify-center">
      <button onClick={handleBackward}>
        <FaStepBackward />
      </button>
      <button onClick={handlePlayPause} className="text-xl">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      <p className="text-xl"> {Math.floor(currentTime)}:00s</p>
      <button onClick={handleForward}>
        <FaStepForward />
      </button>
    </div>
  );
};

export default MusicPlayer;
