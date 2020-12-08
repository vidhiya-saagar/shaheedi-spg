import React from 'react';
import Styles from './ChapterInfoStyles.module.css';
import Grid from '../../components/Grid';

const ChapterInfo = props => {
  return (
    <>
      <Grid alignItems="center" justify="center">
        <Grid column={true} sm={12} md={8} lg={6}>
          <p className={Styles.ChapterNumberEnglish}>Adhyai {props.number}</p>
          <h2 className={Styles.ChapterNameTranslit}>{props.name}</h2>
        </Grid>
      </Grid>

      <Grid alignItems="center" justify="center">
        <Grid column={true} sm={12} md={8} lg={6}>
          <p className={Styles.Summary}>{props.description_english}</p>
        </Grid>
      </Grid>
    </>
  );
};

export default ChapterInfo;
