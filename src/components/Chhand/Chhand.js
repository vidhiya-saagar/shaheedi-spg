import React, { useContext } from 'react';
import Grid from '../../components/Grid';
import ChhandStyles from './ChhandStyles.module.css';
import Pauri from '../../components/Pauri';
import { Context as ThemeContext } from '../../context/ThemeContext';

const Chhand = props => {
  const { state: themeState } = useContext(ThemeContext);
  const isDarkMode = themeState.currentTheme === 'DARK';
  return (
    // ChhandType
    // Pauris
    // Tuks
    <div
      key={props.id}
      className={`${ChhandStyles.ChhandDiv} ${
        isDarkMode ? `${ChhandStyles.DarkMode}` : ''
      }`}
    >
      <h4 className={ChhandStyles.GurmukhiUnicodeChhandName}>
        {props.chhand_type.chhand_name_unicode}
      </h4>
      {props.pauris.map(pauri => (
        <Pauri {...pauri} />
      ))}
    </div>
  );
};

export default Chhand;
