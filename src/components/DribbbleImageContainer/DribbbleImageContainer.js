import React, { useEffect, useState } from 'react';
import Styles from './DribbbleImageContainerStyles.module.css';
import Grid from '../../components/Grid';

const DribbbleImageContainer = props => {
  const isDarkMode = true;
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
