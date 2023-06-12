import React, { useContext } from 'react';
import Grid from '../../components/Grid';
import ChhandStyles from './ChhandStyles.module.css';
import Pauri from '../../components/Pauri';
import { Context as ThemeContext } from '../../context/ThemeContext';

const Chhand = chhandProps => {
  const { state: themeState } = useContext(ThemeContext);
  const isDarkMode = themeState.currentTheme === 'DARK';
  return (
    // ChhandType
    // Pauris
    // Tuks
    <div
      key={chhandProps.id}
      className={`${ChhandStyles.ChhandDiv} ${
        isDarkMode ? `${ChhandStyles.DarkMode}` : ''
      }`}
    >
      <h4 className={ChhandStyles.GurmukhiUnicodeChhandName}>
        {chhandProps.name}
      </h4>
      {chhandProps.pauris.map(pauri => (
        <Pauri {...pauri} key={pauri.id} />
      ))}
    </div>
  );
};

export default Chhand;
