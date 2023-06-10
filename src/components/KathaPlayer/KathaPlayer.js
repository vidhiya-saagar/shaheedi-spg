import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import gianis from '../../lib/gianis';

/* eslint-enable no-debugger */
const formatTracks = audioTracks => {
  return audioTracks.map(t => {
    return {
      name: t.title,
      singer: gianis[t.gianiId].name,
      cover: gianis[t.gianiId].artworks.web['1024'],
      musicSrc: t.publicUrl,
    };
  });
};

const KathaPlayer = props => {
  const options = {
    // audio lists model
    audioLists: formatTracks(props.audioTracks),
    remove: false,
    showLyric: false,
    showDestroy: false,
    showPlayMode: false,
    autoPlay: false,
    loadAudioErrorPlayNext: false,
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
