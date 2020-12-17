import React from 'react';
import ChapterItem from '../ChapterItem';
import Grid from '../Grid';
import Styles from './ChapterList.module.css';

const ChapterList = ({ chapters }) => {
  return (
    <>
      <Grid alignItems="center" justify="flex-start">
        <Grid column={true} sm={12} md={12} lg={10}>
          <Grid alignItems="center" justify="center" customClass={Styles.Flow}>
            {chapters?.map(chapter => {
              return (
                <Grid column={true} md={6} lg={3}>
                  <ChapterItem
                    artwork={chapter.artwork}
                    number={chapter.number}
                    gurmukhiScript={chapter.gurmukhiScript}
                    name={chapter.name}
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
