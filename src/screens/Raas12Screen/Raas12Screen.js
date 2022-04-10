import React, { useEffect, useState, useContext } from 'react';
import Styles from './Raas12ScreenStyle.module.css';
import Grid from '../../components/Grid';
import ChapterListStyles from '../../components/ChapterList/ChapterList.module.css';
import { fetchGet } from '../../helper/fetchHelper';
import ChapterList from '../../components/ChapterList';
import { Link } from 'react-router-dom';
import CornerButtonStyles from '../../components/CornerButton/CornerButtonStyles.module.css';
import { Context as ThemeContext } from '../../context/ThemeContext';

const Raas12Screen = () => {
  const { state: themeState } = useContext(ThemeContext);
  const isDarkMode = themeState.currentTheme === 'DARK';
  const [chamkaurChapters, setChamkaurChapters] = useState(null);

  useEffect(() => {
    const fetchRaas12Chapters = async () => {
      const res = await fetchGet('/books/3/chapters');
      setChamkaurChapters(res.chapters);
    };
    fetchRaas12Chapters();
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
              <h3 className={Styles.PageTitle}>Raas 12 - Chapters</h3>
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
                <ChapterList chapters={chamkaurChapters} />
              </Grid>
            </Grid>
          </Grid>

          {/* This is poor design choice... Should rethink this */}
          {chamkaurChapters?.length > 0 && (
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

export default Raas12Screen;
