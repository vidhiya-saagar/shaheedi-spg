import React from 'react';
import Chhand from '../../components/Chhand';
import Styles from './ReadChapterScreen.module.css';
import Grid from '../../components/Grid';

const ReadChapterScreen = ({ chhands, chapter }) => {
  return (
    <>
      <Grid column={true} sm={12} md={12} lg={12}>
        <Grid alignItems="center" justify="center">
          <Grid column={true} sm={12} md={8} lg={6}>
            <Grid alignItems="center" justify="flex-start">
              <div className={Styles.ChapterContainer}>
                <p className={Styles.ChapterNumberEnglish}>
                  Chapter {chapter.number}
                </p>
                <h3 className={Styles.ChapterTitle}>
                  {chapter.translationName}
                </h3>
              </div>

              {chhands?.map(chhand => {
                return <Chhand {...chhand} />;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ReadChapterScreen;
