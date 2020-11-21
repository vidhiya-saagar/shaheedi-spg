import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

const ChapterScreen = () => {
  const audioTracks = [
    {
      name: 'Sooraj Parkash Katha - Rut 06 Adhyai 31 - Anandpur Chorna',
      singer: 'Giani Harbhajan Singh Dhudikey',
      cover: 'https://i.ytimg.com/vi/JTIqcyoxtJQ/sddefault.jpg',
      musicSrc:
        'https://shaheedi-spg.s3.amazonaws.com/Giani.Harbhajan.Singh.(Dhudikey)--254.Sooraj.Prakash.Katha.-.Rut.06.Adhyai.31.-.Anandpur.Chorna.mp3',
    },
    {
      name: '(BoC P.1) - Mughals surround Anandpur Sahib',
      singer: 'Bhai Sukha Singh (UK)',
      cover: 'https://www.sikhroots.com/images/albums/1052975488.gif',
      musicSrc:
        'https://www.sikhroots.com/audio/Lectures/Bhai%20Sukha%20Singh%20(UK)/Collection%201/Battle%20of%20Chamkaur%2001.mp3',
    },
  ];

  const options = {
    // audio lists model
    audioLists: audioTracks,
    remove: false,
    showLyric: false,
    showDestroy: false,
    showPlayMode: false,
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
      <p>ChapterScreen</p>
    </>
  );
};

export default ChapterScreen;
