import React, { useContext } from 'react';
import ChapterItemStyles from './ChapterItemStyles.module.css';
import { Link } from 'react-router-dom';
import Grid from '../Grid';
import '../../index.css';
import { Context as ThemeContext } from '../../context/ThemeContext';

const ChapterItem = props => {
  const { state: themeState } = useContext(ThemeContext);
  const isDarkMode = themeState.currentTheme === 'DARK';

  return (
    <Grid
      alignItems="center"
      justify="center"
      customClass={isDarkMode ? `${ChapterItemStyles.DarkMode}` : ''}
    >
      <Link to={`/chapters/${props.id}`}>
        {props.signature_unicode}

        <div className={ChapterItemStyles.ArtworkContainer}>
          <img
            loading="lazy"
            decoding="async"
            width={200}
            height={200}
            src={props.artwork}
            className={`${ChapterItemStyles.Artwork} ${
              props.id === 44 ? `${ChapterItemStyles.StartTop}` : ''
            }`}
          />
          <div className={ChapterItemStyles.Circle}>
            <span>{props.number}</span>
          </div>
        </div>
        <div className={ChapterItemStyles.TextContainer}>
          <p className={ChapterItemStyles.ChapterNameMain}>
            {props.gurmukhiUnicode}
          </p>
          <p className={ChapterItemStyles.ChapterNameFaded}>
            {props.translation || ''}
          </p>
        </div>
      </Link>
    </Grid>
  );
};

export default ChapterItem;
