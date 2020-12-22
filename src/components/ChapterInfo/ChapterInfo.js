import React, { useContext } from 'react';
import Styles from './ChapterInfoStyles.module.css';
import Grid from '../../components/Grid';
import { Context as ThemeContext } from '../../context/ThemeContext';

const ChapterInfo = props => {
  const { state: themeState } = useContext(ThemeContext);
  const isDarkMode = themeState.currentTheme === 'DARK';

  return (
    <>
      <Grid
        alignItems="center"
        justify="center"
        customClass={isDarkMode ? `${Styles.DarkMode}` : ''}
      >
        <Grid column={true} sm={12} md={8} lg={6}>
          <p className={Styles.ChapterNumberEnglish}>Chapter {props.number}</p>
          <h2 className={Styles.TitleEnglish}>{props.translation}</h2>
        </Grid>
      </Grid>

      <Grid
        alignItems="center"
        justify="center"
        customClass={isDarkMode ? `${Styles.DarkMode}` : ''}
      >
        <Grid column={true} sm={12} md={8} lg={6}>
          <p className={Styles.Summary}>{props.summary}</p>
        </Grid>
      </Grid>
    </>
  );
};

export default ChapterInfo;
