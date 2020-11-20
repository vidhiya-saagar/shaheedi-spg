import React from 'react';
import './prasang.css';
import Grid from '../Grid';
const Prasang = props => {
  return (
    <>
      <Grid alignItems="center" justify="center">
        <Grid col={true} md={8}></Grid>
        <div id="prasang-cover">
          <img src={props.imgUrl} />
          <div className="text-overlay">
            <h3 className="title">{props.title}</h3>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Prasang;
