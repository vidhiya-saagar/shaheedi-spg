import React from 'react';
import Grid from '../../components/Grid';
import PauriStyles from './Pauri.module.css';

const isDarkMode = true;
const Pauri = ({ number, tuks }) => {
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
            <p className="faded-text">{tuk.content_unicode}</p>
           */}
            <p className={PauriStyles.GurmukhiScriptTuk}>
              {tuk.content_gs}
              {tuks.length === tuk.line_number && <span> ]{number}]</span>}
            </p>
            <p className={PauriStyles.EnglishTranslit}>
              {tuk.content_transliteration_english}
              {tuks.length === tuk.line_number && <span> ||{number}||</span>}
            </p>
            {tuk?.english_translation && (
              <p className={PauriStyles.Translation}>
                {tuk.english_translation}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Pauri;
