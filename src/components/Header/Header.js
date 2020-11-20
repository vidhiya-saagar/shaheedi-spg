import React from 'react';
import './header.css';
import Grid from '../Grid';
import logo from '../../assets/spg_draft.JPG';

const Header = () => {
  return (
    <div className="wrapper">
      <Grid column={true} sm={6} md={6} lg={6}>
        <Grid justify="flex-start">
          <h2>SPG</h2>
        </Grid>
      </Grid>
      <Grid column={true} sm={6} md={6} lg={6} justify="flex-end">
        <Grid justify="flex-start">
          <img src={logo} alt="Logo" id="logo" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
