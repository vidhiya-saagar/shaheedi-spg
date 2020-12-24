import React, { useEffect, useState, useContext } from 'react';
import Chhand from '../../components/Chhand';
import Styles from './ReadChapterScreen.module.css';
import Grid from '../../components/Grid';
import KathaPlayer from '../../components/KathaPlayer';
import { useParams } from 'react-router-dom';
import { fetchGet } from '../../helper/fetchHelper';
import { Link } from 'react-router-dom';
import { Context as ThemeContext } from '../../context/ThemeContext';

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

  const { state: themeState } = useContext(ThemeContext);
  const isDarkMode = themeState.currentTheme === 'DARK';

  useEffect(() => {
    const fetchChapter = async chapterId => {
      const res = await fetchGet(`/chapters/${chapterId}/tuks`);
      setChapter(res.chapter);
      setChhands(res.chhands);
    };

    const fetchKathaForChapter = async chapterId => {
      const res = await fetchGet(`/chapters/${chapterId}/kathas`);
      setKathas(res.kathas);
    };

    fetchChapter(id);
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
              <button className={Styles.DesktopBackButton}>
                <Link to={`/chapters/${id}`}>Back</Link>
              </button>
              <img
                src={chapter.artwork_url}
                className={`${Styles.DesktopImage} ${
                  chapter.id === 44 ? `${Styles.StartTop}` : ''
                }`}
              />

              <div className={Styles.DesktopTextContainer}>
                <p className={Styles.ChapterNumberEnglish}>{chapter.number}</p>
                <h3 className={Styles.ChapterTitle}>
                  {chapter.title_translation}
                </h3>
              </div>
            </div>

            <div className={Styles.MobileTextContainer}>
              <div className={Styles.MobileBackButton}>
                <Link to={`/chapters/${id}`}>Back</Link>
              </div>
              <p className={Styles.ChapterNumberEnglish}>{chapter.number}</p>
              <h3 className={Styles.ChapterTitle}>
                {chapter.title_translation}
              </h3>
            </div>
          </Grid>

          <Grid column={true} sm={12} md={5} lg={5}>
            <Grid
              alignItems="center"
              justify="flex-start"
              customClass={Styles.ChhandContainer}
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
