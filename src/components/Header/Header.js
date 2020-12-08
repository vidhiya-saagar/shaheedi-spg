import React from 'react';
import HeaderStyles from './HeaderStyles.module.css';
import './header.css';
import Grid from '../Grid';
import logo from '../../assets/spg_draft.JPG';

const Header = () => {
  return (
    <div className={HeaderStyles.Wrapper}>
      <Grid column={true} sm={6} md={6} lg={6}>
        <Grid justify="flex-start">
          <h2 styles={HeaderStyles.HeaderH2}>SPG</h2>
        </Grid>
      </Grid>
      <Grid column={true} sm={6} md={6} lg={6} justify="flex-end">
        <Grid justify="flex-start">
          <img src={logo} alt="Logo" className={HeaderStyles.Logo} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
