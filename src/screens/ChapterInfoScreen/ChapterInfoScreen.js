import React, { useState, useEffect } from 'react';
import Grid from '../../components/Grid';
import Styles from './ChapterInfoScreenStyles.module.css';
import DribbbleImageContainer from '../../components/DribbbleImageContainer';
import ChapterInfo from '../../components/ChapterInfo';
import CornerButtonStyles from '../../components/CornerButton/CornerButtonStyles.module.css';
import { useParams } from 'react-router-dom';
import { fetchGet } from '../../helper/fetchHelper';
import { Link } from 'react-router-dom';

const ChapterInfoScreen = props => {
  const { id } = useParams();

  const [chapter, setChapter] = useState({
    number: 1,
    title_gs: '',
    title_translation: '',
    title_transliteration_english: '',
    description_english: '',
  });
  const [kathas, setKathas] = useState(null);

  useEffect(() => {
    const fetchChapter = async chapterId => {
      const res = await fetchGet(`/chapters/${chapterId}`);
      setChapter(res.chapter);
    };

    fetchChapter(id);
  }, []);
  return (
    <>
      <div className={Styles.Container}>
        <DribbbleImageContainer
          id={chapter.id}
          imageUrl={chapter.artwork_url}
        />
        <br />
        <ChapterInfo
          number={chapter.number}
          gurmukhiScript={chapter.title_gs}
          transliteration={chapter.content_transliteration_english}
          translation={chapter.title_translation}
          summary={chapter.description_english}
        />
        <br />

        <Grid alignItems="center" justify="center">
          <Grid column={true} sm={12} md={8} lg={6}>
            <Link to={`/chapters`}>
              <button
                className={`${CornerButtonStyles.Orange} ${CornerButtonStyles.BottomLeft}`}
              >
                &#60; Chapters
              </button>
            </Link>
            <Link to={`/chapters/${id}/read`}>
              <button
                className={`${CornerButtonStyles.Orange} ${CornerButtonStyles.BottomRight}`}
              >
                Explore &#62;
              </button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ChapterInfoScreen;
