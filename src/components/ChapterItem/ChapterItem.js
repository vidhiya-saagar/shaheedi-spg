import React from 'react';
import ChapterItemStyles from './ChapterItemStyles.module.css';
import Grid from '../Grid';
const ChapterItem = props => {
  return (
    <Grid>
      <div className={ChapterItemStyles.ItemContainer}>
        <div className={ChapterItemStyles.ArtworkContainer}>
          <img src={props.artwork} className={ChapterItemStyles.Artwork} />
          <div className={ChapterItemStyles.Circle}>
            <span>{props.number}</span>
          </div>
        </div>
        <div className={ChapterItemStyles.TextContainer}>
          <p className="gurakhar-black">{props.gurmukhiScript}</p>
          <p className={ChapterItemStyles.ChapterNameFaded}>{props.name}</p>
        </div>
      </div>
    </Grid>
  );
};

export default ChapterItem;
