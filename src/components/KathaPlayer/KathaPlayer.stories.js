import React from 'react';
import KathaPlayer from './KathaPlayer';

export default {
  title: 'KathaPlayer',
  component: KathaPlayer,
};

const chapter31AudioTracks = [
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

export const Chapter31Tracks = () => (
  <KathaPlayer audioTracks={chapter31AudioTracks} />
);

{
  /* 
export const Brown = () => (
  <CornerButton variant="Brown">Bottom Left</CornerButton>
);

 */
}
