import React from 'react';
import ChapterItem from '../ChapterItem';
import Grid from '../Grid';
import Styles from './ChapterList.module.css';

const ChapterList = ({ chapters }) => {
  return (
    <>
      {chapters?.map(chapter => {
        return (
          <Grid
            column={true}
            md={4}
            lg={4}
            customClass={Styles.ChapterItemContainer}
          >
            <ChapterItem
              id={chapter.id}
              artwork={chapter.artwork_url}
              number={chapter.number}
              gurmukhiScript={chapter.title_gs}
              gurmukhiUnicode={chapter.title_unicode}
              translation={chapter.title_translation}
            />
          </Grid>
        );
      })}
    </>
  );
};

export default ChapterList;
