import React, { useEffect, useState } from 'react';
import Styles from './ChapterIndexScreenStyle.module.css';
import Grid from '../../components/Grid';
import ChapterListStyles from '../../components/ChapterList/ChapterList.module.css';
import { fetchGet } from '../../helper/fetchHelper';
import ChapterList from '../../components/ChapterList';

const ChapterIndexScreen = () => {
  const [chamkaurChapters, setChamkaurChapters] = useState(null);
  useEffect(() => {
    const fetchChamkaurChapters = async () => {
      const res = await fetchGet('/chamkaur');
      console.log(res);
      setChamkaurChapters(res.chapters);
    };
    fetchChamkaurChapters();
  }, []);

  return (
    <>
      <Grid alignItems="center" justify="center">
        <Grid column={true} sm={12} md={12} lg={10}>
          <h3 className={Styles.PageTitle}>Rut 6 - Chapters</h3>
        </Grid>
      </Grid>

      {/* ChapterLists (X-Scroll on Mobile) */}
      <Grid
        alignItems="center"
        justify="center"
        customClass={ChapterListStyles.FlowContainer}
      >
        <Grid column={true} sm={12} md={12} lg={10}>
          <Grid
            alignItems="baseline"
            justify="flex-start"
            customClass={ChapterListStyles.Flow}
          >
            <ChapterList chapters={chamkaurChapters} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ChapterIndexScreen;
