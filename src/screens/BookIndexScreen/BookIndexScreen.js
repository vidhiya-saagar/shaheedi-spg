import React, { useContext } from 'react';
import Grid from '../../components/Grid';
import Styles from './BookIndexScreenStyle.module.css';
import { fetchGet } from '../../helper/fetchHelper';
import { Context as ThemeContext } from '../../context/ThemeContext';

const BookIndexScreen = () => {
  const { state: themeState } = useContext(ThemeContext);
  const isDarkMode = themeState.currentTheme === 'DARK';

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
              <h3 className={Styles.PageTitle}>Books</h3>
            </Grid>

            {/* ChapterLists (X-Scroll on Mobile) */}
            <Grid
              column={true}
              sm={12}
              md={12}
              lg={10}
              customClass={isDarkMode ? `${Styles.DarkMode}` : ''}
            >
              <div className={Styles.BookContainer}>
                <p className={Styles.BookDescText}>The Battle of Chamkaur</p>
                <img
                  height={260}
                  loading="lay"
                  src="https://cdn.discordapp.com/attachments/785696929664466964/791159814126436352/Untitled_Artwork.PNG"
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BookIndexScreen;
