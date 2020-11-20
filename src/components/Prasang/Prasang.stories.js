import React from 'react';
import Prasang from './Prasang';

export default {
  title: 'Prasang',
  component: Prasang,
};

export const Chamkaur = () => (
  <Prasang
    title="The Battle of Chamkaur"
    imgUrl="https://i.pinimg.com/originals/44/87/c8/4487c8c5f66dbad82925fb104e3fcff6.jpg"
  />
);

export const SakaSirhind = () => (
  <Prasang
    title="Saka Sirhind"
    imgUrl="https://miro.medium.com/max/1200/1*-nCsLWHAHmwJebVp8hKS0Q.jpeg"
  />
);
