import React, { useEffect, useState, useContext } from 'react';
import Styles from './BookScreenStyle.module.css';
import Grid from '../../components/Grid';
import ChapterListStyles from '../../components/ChapterList/ChapterList.module.css';
import { fetchGet } from '../../helper/fetchHelper';
import ChapterList from '../../components/ChapterList';
import { Link } from 'react-router-dom';
import CornerButtonStyles from '../../components/CornerButton/CornerButtonStyles.module.css';
import { Context as ThemeContext } from '../../context/ThemeContext';

const BookScreen = ({ bookName, apiUrl }) => {
  const { state: themeState } = useContext(ThemeContext);
  const isDarkMode = themeState.currentTheme === 'DARK';
  const [chapters, setChapters] = useState(null);

  useEffect(() => {
    const fetchChapters = async () => {
      const res = await fetchGet(apiUrl);
      setChapters(res.chapters);
    };
    fetchChapters();
  }, []);

  return (
    <>
      <Grid
        alignItems="center"
        justify="center"
        customClass={isDarkMode ? `${Styles.DarkMode}` : ''}
      >
        <Grid column={true} sm={12} md={12} lg={10}>
          <Grid alignItems="center" justify="center">
            <Grid column={true} sm={12} md={12} lg={10}>
              <h3 className={Styles.PageTitle}>{bookName} - Chapters</h3>
            </Grid>

            {/* ChapterLists (X-Scroll on Mobile) */}
            <Grid
              column={true}
              sm={12}
              md={12}
              lg={10}
              customClass={isDarkMode ? `${Styles.DarkMode}` : ''}
            >
              <Grid
                alignItems="baseline"
                justify="flex-start"
                customClass={ChapterListStyles.Flow}
              >
                <ChapterList chapters={chapters} />
              </Grid>
            </Grid>
          </Grid>

          {/* This is poor design choice... Should rethink this */}
          {chapters?.length > 0 && (
            <Grid
              alignItems="center"
              justify="center"
              customClass={ChapterListStyles.ButtonContainer}
            >
              <Grid column={true} sm={12} md={12} lg={10}>
                <Link to={`/books`}>
                  <button
                    className={`${CornerButtonStyles.Orange} ${CornerButtonStyles.BottomLeft}`}
                  >
                    Books
                  </button>
                </Link>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default BookScreen;
