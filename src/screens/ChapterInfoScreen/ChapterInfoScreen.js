import React from 'react';
import Grid from '../../components/Grid';
import Styles from './ChapterInfoScreenStyles.module.css';
import DribbbleImageContainer from '../../components/DribbbleImageContainer';
import ChapterInfo from '../../components/ChapterInfo';

const ChapterInfoScreen = props => {
  return (
    <>
      <div className={Styles.Container}>
        <DribbbleImageContainer imageUrl="https://i.postimg.cc/6QtsSTTJ/image.png" />
        <ChapterInfo
          number={32}
          gurmukhiScript="ipCoN phwVIAW qy sUibAW ny Aw pYxw [ audY isMG b`D [ jIvn isMG"
          name="pichho(n) pahaaReeaa(n) te soobiaa(n) ne aa painaa | udhai si(n)gh ba'dh | jeevan si(n)gh"
          translationName="From Behind, Hill Chiefs & Governors Arrive. The Sauga of Udhai Singh. Jeevan Singh."
          description_english="Guru Gobind Singh Ji leaves Anandpur Sahib when all of of a sudden the Mughals and hill chiefs turn on their word and attack the Singhs. When Maharaj reaches Nirmogarh they notice Bhai Ajit Singh Ji is not with them. Maharaj looks to the back of the Jatha to see Baba Ajit Singh fighting with hundreds of Mughals. On reaching Sarsa river, Maharaj sends Baba Uday Singh Ji to go and fight with mughals and to bring back Baba Ajit Singh Ji. Baba Uday Singh Ji received a boon that when you attain Shaheedi in the Battlefield, and go to Sachkhand, you will sit on right hand side of me there. Wherever you live, I will live there as well"
        />
      </div>
    </>
  );
};

export default ChapterInfoScreen;
