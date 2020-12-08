import React from 'react';
import Styles from './ChapterInfoStyles.module.css';
import Grid from '../../components/Grid';

const ChapterInfo = props => {
  //   number={31}
  // gurmukhiScript="AnMdpur CoVnw"
  // name="Anandpur Chorrna"
  // description_english="Guru Gobind Singh Ji Maharaj and the Sikhs that have been held up for many months in the siege of the Anandpur Fortress are now ready to leave. Mata Gujiri, the respected wife of Guru Tegh Bahadur Sahib Ji (the Ninth Sikh Guru) and worldly mother of Guru Gobind Singh Ji, have been instructed to sit in a carriage with the younger Sahibzaade (princes) of Maharaj - Baba Jorawar Singh Ji and Baba Fateh Singh Ji. In a separate carriage, the wives of the Guru - Mata Sundari Ji and Mata Sahib Deva Ji, are seen as calm and collected before they bow before the Guru and head east with the rest of the Sikhs. Maharaj stays behind while his royal family and Sikhs depart from the fortress. Once Maharaj is ready to leave, they first go to the place where they last saw Guru Tegh Bhadhur Ji (beheaded).  Maharaj bows in reverence to this sacred site and offers his prayer. After doing so, they appoint Gurbaksh Singh to look after this holy site by sweeping the floors and maintaining the burning candles. Although Gurbaksh Singh was fearful that the enemy would desecrate this sacred place, the Guru Gobind Singh Ji Maharaj vowed he will always be close at hand, and give him his darshan (blessed vision) every day at sunset. In addition, Maharaj states that there will be a day where there will be Nishaans all over for their Sikhs. After comforting Gurbaksh Singh, Maharaj and the remaining Singhs, armed to the teeth with weapons, departed the fortress and made way for the town of “Raam Ghoneley.” Once the Mughals and Hill Chiefs realized Maharaj and the Sikhs had left, they quickly followed suit, in a great rage, to where they thought the Sikhs had gone to. Once they came into close proximity of the Singhs, a heavy battle was to pursue in the darkness of the night..."

  return (
    <>
      <div className={Styles.Container}>
        <p>{props.number}</p>
        <h2 className={Styles.ChapterNameTranslit}>{props.name}</h2>

        <div>
          <p className={Styles.Summary}>{props.description_english}</p>
        </div>
      </div>
    </>
  );
};

export default ChapterInfo;
