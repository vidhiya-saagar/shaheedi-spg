import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/soundcloud';
import Styles from './SoundcloudPlayer.module.css';

const SoundcloudPlayer = ({trackUrl="https://soundcloud.com/vidhiya-saagar/sets/rut-1-chapter-1"}) => {
  const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true&show_artwork=false`;

  return (
    <div className={Styles.PlayerContainer}>
      <iframe
        width="100%"
        height="100%"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={src}
      />
    </div>
  );
};

export default SoundcloudPlayer;