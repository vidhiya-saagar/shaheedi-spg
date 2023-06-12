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
            key={chapter.id}
            column={true}
            md={4}
            lg={4}
            customClass={Styles.ChapterItemContainer}
          >
            <ChapterItem
              id={chapter.id}
              artworkUrl={chapter.artworkUrl}
              number={chapter.number}
              title={chapter.title}
              enTitle={chapter.enTitle}
            />
          </Grid>
        );
      })}
    </>
  );
};

export default ChapterList;
