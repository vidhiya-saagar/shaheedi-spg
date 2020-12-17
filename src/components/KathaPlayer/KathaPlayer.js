import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

const KathaPlayer = props => {
  const options = {
    // audio lists model
    audioLists: props.audioTracks,
    remove: false,
    showLyric: false,
    showDestroy: false,
    showPlayMode: false,
    autoPlay: false,
    onAudioError(errMsg, currentPlayId, audioLists, audioInfo) {
      console.error(
        'Audio Error: ',
        errMsg,
        currentPlayId,
        audioLists,
        audioInfo,
      );
    },
  };

  return (
    <>
      <ReactJkMusicPlayer {...options} />
    </>
  );
};

export default KathaPlayer;
