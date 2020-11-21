import React from 'react';
import ChapterItem from '../ChapterItem';
import Grid from '../Grid';

const ChapterList = ({ chapters }) => {
  return (
    <>
      <Grid alignItems="center" justify="flex-start">
        <Grid column={true} sm={12} md={8} lg={8}>
          <h3>Chapters</h3>
        </Grid>
        <Grid column={true} sm={12} md={8} lg={8}>
          <Grid alignItems="center" justify="flex-start">
            {chapters?.map(chapter => {
              return (
                <ChapterItem
                  artwork={chapter.artwork}
                  number={chapter.number}
                  gurmukhiScript={chapter.gurmukhiScript}
                  name={chapter.name}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ChapterList;
