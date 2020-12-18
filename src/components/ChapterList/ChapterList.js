import React from 'react';
import ChapterItem from '../ChapterItem';
import Grid from '../Grid';
import Styles from './ChapterList.module.css';

const ChapterList = ({ chapters }) => {
  return (
    <>
      <Grid
        alignItems="center"
        justify="center"
        customClass={Styles.FlowContainer}
      >
        <Grid column={true} sm={12} md={12} lg={10}>
          <Grid
            alignItems="baseline"
            justify="flex-start"
            customClass={Styles.Flow}
          >
            {chapters?.map(chapter => {
              return (
                <Grid column={true} md={4} lg={3}>
                  <ChapterItem
                    id={chapter.id}
                    artwork={chapter.artwork_url}
                    number={chapter.number}
                    gurmukhiScript={chapter.title_gs}
                    translation={chapter.title_translation}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ChapterList;
