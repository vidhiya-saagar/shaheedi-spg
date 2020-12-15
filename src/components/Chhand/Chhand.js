import React from 'react';
import Grid from '../../components/Grid';
import ChhandStyles from './ChhandStyles.module.css';
import Pauri from '../../components/Pauri';
// ChhandType
// Pauris
// Tuks

const Chhand = props => {
  return (
    <>
      <h3 className={ChhandStyles.GurmukhiScriptChhandName}>
        {props.chhand_type.chhand_name_gs}
      </h3>
      {props.pauris.map(pauri => (
        <Pauri {...pauri} />
      ))}
    </>
  );
};

export default Chhand;
