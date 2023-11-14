import React, { useContext } from 'react';
import Grid from '../../components/Grid';
import PauriStyles from './Pauri.module.css';
import { Context as ThemeContext } from '../../context/ThemeContext';
import { toEnglish, toUnicode } from 'gurmukhi-utils';

const Pauri = ({ id, number, tuks, translation }) => {
  const { state: themeState } = useContext(ThemeContext);
  const isDarkMode = themeState.currentTheme === 'DARK';

  return (
    <div
      key={id}
      className={`${PauriStyles.PauriContainer} ${
        isDarkMode ? `${PauriStyles.DarkMode}` : ''
      }`}
    >
      {tuks.map(tuk => {
        return (
          <div key={tuk.id} className={PauriStyles.TukContainer}>
            <p className={PauriStyles.GurmukhiUnicodeTuk}>
              {tuk.content}
              <span>
                {tuks.length === tuk.sequence
                  ? ` ॥${toUnicode(String(number))}॥`
                  : ' ।'}
              </span>
            </p>
            <p className={PauriStyles.EnglishTranslit}>
              {toEnglish(tuk.content)}
              {tuks.length === tuk.sequence && <span> ||{number}||</span>}
            </p>
            {tuk?.translation && (
              <p className={PauriStyles.Translation}>
                {tuk.translation.enTranslation}
                {tuks.length === tuk.sequence && <span> ||{number}||</span>}
              </p>
            )}
          </div>
        );
      })}
      {/* Pauri Translation */}
      {translation && (
        <p className={PauriStyles.Translation}>{translation.enTranslation}</p>
      )}
    </div>
  );
};

export default Pauri;
