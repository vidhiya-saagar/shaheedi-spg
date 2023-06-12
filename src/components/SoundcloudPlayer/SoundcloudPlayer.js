import React from 'react';
import Styles from './SoundcloudPlayer.module.css';

const SoundcloudPlayer = ({ url }) => {
  const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    url,
  )}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true&show_artwork=false`;

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
