import React, { useContext } from 'react';
import Grid from '../../components/Grid';
import PauriStyles from './Pauri.module.css';
import { Context as ThemeContext } from '../../context/ThemeContext';
import { toEnglish } from 'gurmukhi-utils';

const Pauri = ({ number, signature_unicode, tuks }) => {
  const { state: themeState } = useContext(ThemeContext);
  const isDarkMode = themeState.currentTheme === 'DARK';

  return (
    <>
      {tuks.map(tuk => {
        return (
          <div
            key={tuk.id}
            className={`${PauriStyles.PauriContainer} ${
              isDarkMode ? `${PauriStyles.DarkMode}` : ''
            }`}
          >
            {/* 
            <p className="faded-text">{}</p>
           */}
            <p className={PauriStyles.GurmukhiUnicodeTuk}>
              {tuk.content_unicode}
              {tuks.length === tuk.line_number && (
                <span> {signature_unicode}</span>
              )}
            </p>
            <p className={PauriStyles.EnglishTranslit}>
              {toEnglish(tuk.content_unicode)}
              {tuks.length === tuk.line_number && <span> ||{number}||</span>}
            </p>
            {tuk?.translation && (
              <p className={PauriStyles.Translation}>{tuk.translation}</p>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Pauri;
