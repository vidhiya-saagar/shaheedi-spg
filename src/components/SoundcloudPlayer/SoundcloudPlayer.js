import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/soundcloud';
import Styles from './SoundcloudPlayer.module.css';

const SoundcloudPlayer = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 40 * 16);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 40 * 16);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={Styles.Container}>
<ReactPlayer
  className={Styles.Player}
  url="https://soundcloud.com/vidhiya-saagar/sets/rut-1-chapter-1"
  height={isLargeScreen ? '400px' : '140px'}
  width={isLargeScreen ? '50%' : '100%'}
  config={{
    soundcloud: {
      options: {
        showArtwork: false
      }
    }
  }}

/>
    </div>
  );
};

export default SoundcloudPlayer;
