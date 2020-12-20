import React from 'react';
import Grid from '../../components/Grid';
import ChhandStyles from './ChhandStyles.module.css';
import Pauri from '../../components/Pauri';
// ChhandType
// Pauris
// Tuks

const isDarkMode = true;
const Chhand = props => {
  return (
    <div
      key={props.id}
      className={`${ChhandStyles.ChhandDiv} ${
        isDarkMode ? `${ChhandStyles.DarkMode}` : ''
      }`}
    >
      <h4 className={ChhandStyles.GurmukhiScriptChhandName}>
        {props.chhand_type.chhand_name_gs}
      </h4>
      {props.pauris.map(pauri => (
        <Pauri {...pauri} />
      ))}
    </div>
  );
};

export default Chhand;
