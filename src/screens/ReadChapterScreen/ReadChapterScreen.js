import React, { useEffect, useState } from 'react';
import Chhand from '../../components/Chhand';
import Styles from './ReadChapterScreen.module.css';
import Grid from '../../components/Grid';
import KathaPlayer from '../../components/KathaPlayer';
import { useParams } from 'react-router-dom';
import { fetchGet } from '../../helper/fetchHelper';

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

const ReadChapterScreen = () => {
  const { id } = useParams();

  const [chapter, setChapter] = useState({
    number: 1,
    title_gs: '',
    title_translation: '',
    title_transliteration: '',
    description_english: '',
  });
  const [chhands, setChhands] = useState([]);
  const [kathas, setKathas] = useState([]);

  useEffect(() => {
    const fetchChapter = async chapterId => {
      const res = await fetchGet(`/chapters/${chapterId}/tuks`);
      console.log('res', res);
      setChapter(res.chapter);
      setChhands(res.chhands);
    };

    const fetchKathaForChapter = async chapterId => {
      const res = await fetchGet(`/chapters/${chapterId}/kathas`);
      console.log('res', res);
      setKathas(res.kathas);
    };

    fetchChapter(id);
    fetchKathaForChapter(id);
  }, []);

  return (
    <>
      <Grid column={true} sm={12} md={12} lg={12}>
        <Grid alignItems="center" justify="space-between">
          {/* SPLIT SCREEN - LEFT SIDE */}
          <Grid
            column={true}
            sm={12}
            md={6}
            lg={6}
            customClass={Styles.RemoveDesktopPadding}
          >
            <div className={Styles.ImageContainer}>
              <img src={chapter.artwork_url} className={Styles.DesktopImage} />

              <div className={Styles.DesktopTextContainer}>
                <p className={Styles.ChapterNumberEnglish}>{chapter.number}</p>
                <h3 className={Styles.ChapterTitle}>
                  {chapter.title_translation}
                </h3>
              </div>
            </div>

            <div className={Styles.MobileTextContainer}>
              <p className={Styles.ChapterNumberEnglish}>{chapter.number}</p>
              <h3 className={Styles.ChapterTitle}>
                {chapter.title_translation}
              </h3>
            </div>
          </Grid>

          <Grid column={true} sm={12} md={5} lg={5}>
            <Grid
              alignItems="center"
              justify="flex-center"
              customClass={Styles.DesktopContainer}
            >
              {chhands?.map(chhand => {
                return <Chhand {...chhand} />;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <KathaPlayer audioTracks={kathas} />
    </>
  );
};

export default ReadChapterScreen;
