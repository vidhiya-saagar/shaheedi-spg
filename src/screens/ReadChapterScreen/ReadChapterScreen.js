import React from 'react';
import Chhand from '../../components/Chhand';

const ReadChapterScreen = ({ chhands, chapter }) => {
  return (
    <>
      <p>Hi</p>
      {chhands?.map(chhand => {
        return <Chhand {...chhand} />;
      })}
    </>
  );
};

export default ReadChapterScreen;
