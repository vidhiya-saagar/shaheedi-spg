import React from 'react';
import Chhand from '../../components/Chhand';
import Styles from './ReadChapterScreen.module.css';
import Grid from '../../components/Grid';
import KathaPlayer from '../../components/KathaPlayer';

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
    cover:
      'https://shaheedi-spg.s3.amazonaws.com/GianiArtwork/Web+Files/1024-Giani-Sukha-Singh.png',
    musicSrc:
      'https://www.sikhroots.com/audio/Lectures/Bhai%20Sukha%20Singh%20(UK)/Collection%201/Battle%20of%20Chamkaur%2001.mp3',
  },
];

const ReadChapterScreen = ({ chhands, chapter }) => {
  return (
    <>
      <Grid column={true} sm={12} md={12} lg={12}>
        <Grid alignItems="center" justify="center">
          <Grid column={true} sm={12} md={8} lg={6}>
            <Grid alignItems="center" justify="flex-start">
              <div className={Styles.ChapterContainer}>
                <p className={Styles.ChapterNumberEnglish}>{chapter.number}</p>
                <h3 className={Styles.ChapterTitle}>
                  {chapter.translationName}
                </h3>
              </div>
            </Grid>

            <Grid alignItems="center" justify="flex-start">
              {chhands?.map(chhand => {
                return <Chhand {...chhand} />;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <KathaPlayer audioTracks={chapter31AudioTracks} />
    </>
  );
};

export default ReadChapterScreen;
