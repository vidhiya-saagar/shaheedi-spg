import React from 'react';
import styles from './DribbbleImageContainerStyles.module.css';
import Grid from '../../components/Grid';

const DribbbleImageContainer = () => {
  return (
    <>
      {/* Mobile  */}
      <div className={`${styles.Container} ${styles.MobileOnly}`}>
        <img
          src="https://i.postimg.cc/6QtsSTTJ/image.png"
          className={`${styles.Image} ${styles.Content}`}
        />
      </div>
      <br />

      {/* Large Screen / Landscape */}
      <Grid
        alignItems="center"
        justify="center"
        customClass={styles.NonMobileOnly}
      >
        <Grid column={true} md={8} lg={6} customClass={styles.Container}>
          <img
            src="https://i.postimg.cc/6QtsSTTJ/image.png"
            className={`${styles.Image} ${styles.Content}`}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default DribbbleImageContainer;
