import React, { useEffect, useState } from 'react';
import Styles from './ChapterIndexScreenStyle.module.css';
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
      <p>ChapterIndexScreen</p>
      <ChapterList chapters={chamkaurChapters} />
    </>
  );
};

export default ChapterIndexScreen;
