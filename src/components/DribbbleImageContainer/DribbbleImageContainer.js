import React, { useEffect, useState, useContext } from 'react';
import Styles from './DribbbleImageContainerStyles.module.css';
import Grid from '../../components/Grid';
import { Context as ThemeContext } from '../../context/ThemeContext';

const DribbbleImageContainer = props => {
  const { state: themeState } = useContext(ThemeContext);
  const isDarkMode = themeState.currentTheme === 'DARK';
  const [darkModeClassName, setDarkModeClassName] = useState(Styles.DarkMode);

  return (
    <>
      {/* Mobile  */}
      <div
        className={`${Styles.Container} ${Styles.MobileOnly} ${
          isDarkMode ? `${Styles.DarkMode}` : ''
        }`}
      >
        <img
          src={props.imageUrl}
          className={`${Styles.Image} ${Styles.Content}`}
        />
      </div>

      {/* Large Screen / Landscape */}
      <Grid
        alignItems="center"
        justify="center"
        customClass={Styles.NonMobileOnly}
      >
        <Grid
          column={true}
          md={8}
          lg={6}
          customClass={`${Styles.Container} ${
            isDarkMode ? `${Styles.DarkMode}` : ''
          }`}
        >
          <img
            src={props.imageUrl}
            className={`${Styles.Image} ${Styles.Content}`}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default DribbbleImageContainer;
