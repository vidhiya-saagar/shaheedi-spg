import React, { useEffect, useState, useContext } from 'react';
import Chhand from '../../components/Chhand';
import Styles from './ReadChapterScreen.module.css';
import Grid from '../../components/Grid';
import KathaPlayer from '../../components/KathaPlayer';
import { useParams } from 'react-router-dom';
import { fetchGet } from '../../helper/fetchHelper';
import { Link } from 'react-router-dom';
import { Context as ThemeContext } from '../../context/ThemeContext';
import SoundcloudPlayer from '../../components/SoundcloudPlayer/SoundcloudPlayer';

const ReadChapterScreen = () => {
  const { id } = useParams();

  const [chapter, setChapter] = useState({
    number: 1,
    enTitle: '',
    enLongSummary: '',
  });
  const [chhands, setChhands] = useState([]);
  const [kathas, setKathas] = useState([]);

  const { state: themeState } = useContext(ThemeContext);
  const isDarkMode = themeState.currentTheme === 'DARK';

  useEffect(() => {
    const fetchChapterContent = async chapterId => {
      const res = await fetchGet(`/chapters/${chapterId}/content`);
      setChapter(res.chapter);
      setChhands(res.chapter.chhands);
    };

    const fetchKathaForChapter = async chapterId => {
      const res = await fetchGet(`/chapters/${chapterId}/kathas`);
      setKathas(res.kathas);
    };

    fetchChapterContent(id);
    fetchKathaForChapter(id);
  }, []);

  return (
    <>
      <Grid
        column={true}
        sm={12}
        md={12}
        lg={12}
        customClass={isDarkMode ? `${Styles.DarkMode}` : ''}
      >
        <Grid alignItems="center" expanded={true}>
          {/* SPLIT SCREEN - LEFT SIDE */}
          <Grid
            column={true}
            sm={12}
            md={6}
            lg={6}
            customClass={Styles.RemoveDesktopPadding}
          >
            <div className={Styles.ImageContainer}>
              <button className={Styles.DesktopBackButton}>
                <Link to={`/chapters/${id}`}>Back</Link>
              </button>
              <img
                src={chapter.artworkUrl}
                className={`${Styles.DesktopImage} ${
                  chapter.id === 44 ? `${Styles.StartTop}` : ''
                }`}
              />

              <div className={Styles.DesktopTextContainer}>
                <p className={Styles.ChapterNumberEnglish}>{chapter.number}</p>
                <h3 className={Styles.ChapterTitle}>{chapter.enTitle}</h3>
              </div>
            </div>

            <div className={Styles.MobileTextContainer}>
              <div className={Styles.MobileBackButton}>
                <Link to={`/chapters/${id}`}>Back</Link>
              </div>
              <p className={Styles.ChapterNumberEnglish}>{chapter.number}</p>
              <h3 className={Styles.ChapterTitle}>{chapter.enTitle}</h3>
            </div>
          </Grid>

          {/* SPLIT SCREEN - RIGHT SIDE */}
          <Grid column={true} sm={12} md={6} lg={6}>
            <Grid
              alignItems="center"
              justify="flex-start"
              expanded={true}
              customClass={Styles.ChhandContainer}
            >
              {chhands?.map(chhand => {
                return <Chhand {...chhand} key={chhand.id} />;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Soundcloud Player for Rut 1 Only - The Suraj Podcast */}
      {/* Until there is a better way to have both, we will use this... */}

      {/* if chapter.book === 15 show soundlcoud player */}
      {chapter?.book?.id === 15 ? (
        <SoundcloudPlayer />
      ) : (
        <KathaPlayer audioTracks={kathas} />
      )}
    </>
  );
};

export default ReadChapterScreen;
