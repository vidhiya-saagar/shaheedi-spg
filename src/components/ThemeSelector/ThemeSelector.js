import React, { useContext } from 'react';
import Styles from './ThemeSelectorStyles.module.css';
import { Icon, InlineIcon } from '@iconify/react';
import sunIcon from '@iconify-icons/feather/sun';
import moonIcon from '@iconify-icons/feather/moon';
import { Context as ThemeContext } from '../../context/ThemeContext';

const ThemeSelector = props => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className={Styles.ToggleContainer}>
        <label className={Styles.NoOverflow}>
          <input
            className={Styles.ToggleCheckbox}
            type="checkbox"
            checked={props.theme === 'DARK' ? true : false}
            onClick={() => toggleTheme(props.theme)}
          ></input>
          <div className={Styles.ToggleSlot}>
            <div className={Styles.SunIcon_Wrapper}>
              <Icon icon={sunIcon} height="6em" width="6em" color="#EFCF83" />
            </div>
            <div className={Styles.ToggleButton}></div>
            <div className={Styles.Moon_Icon_Wrapper}>
              <Icon icon={sunIcon} height="6em" width="6em" color="#F7EBD4" />
            </div>
          </div>
        </label>
      </div>
    </>
  );
};

export default ThemeSelector;
