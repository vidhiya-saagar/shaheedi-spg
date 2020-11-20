import React from 'react';
import ChapterItem from './ChapterItem';

export default {
  title: 'Prasang/ChapterItem',
  component: ChapterItem,
};

export const ChamkaurChapter1 = () => (
  <ChapterItem
    artwork="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTcxNTA2MjAxMDc3NDkxMTcx/jesus-language-gettyimages-566423511.jpg"
    number={41}
    name="Anandpur Chorrna"
  />
);
