import React, { useEffect, useState, useContext } from 'react';
import Styles from './LandingScreenStyle.module.css';
import Grid from '../../components/Grid';
import ThemeSelector from '../../components/ThemeSelector';
import { Context as ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import CornerButtonStyles from '../../components/CornerButton/CornerButtonStyles.module.css';

const LandingPage = () => {
  const { state: themeState } = useContext(ThemeContext);
  const isDarkMode = themeState.currentTheme === 'DARK';
  return (
    <>
      <Grid
        alignItems="center"
        justify="center"
        customClass={isDarkMode ? `${Styles.DarkMode}` : ''}
      >
        {/* Maybe Header */}
        <Grid column={true} sm={12} md={12} lg={12}>
          <section className={Styles.SkewedContainer}>
            <div className={Styles.Skewed}></div>
          </section>
        </Grid>

        {/* Logo & Title */}
        <Grid column={true} sm={12} md={10} lg={10} customClass={Styles.Sec}>
          <Grid alignItems="center" justify="center">
            {/* Logo */}
            <Grid column={true} sm={4} md={4} lg={4}>
              <img
                src="https://i.postimg.cc/s2j22YLJ/Dilraj-Design-with-Plain-Border-1.jpg"
                className={Styles.SpgLogo}
              />
            </Grid>
            <Grid column={true} sm={8} md={8} lg={8}>
              <div className={Styles.MainTitle}>
                <h1>Suraj Prakaash Granth</h1>
              </div>
            </Grid>
          </Grid>

          <Grid alignItems="center" justify="center">
            <Grid column={true} sm={12} md={12} lg={12}>
              <div className={Styles.SubTitle}>
                <p>Sri Gurprataap Suraj Prakaash Granth</p>
                <p>Inked by Mahakavi Santokh Singh Ji</p>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* Into to SPG */}
        <Grid column={true} sm={12} md={10} lg={10} customClass={Styles.Sec}>
          <Grid alignItems="flex-start" justify="center">
            {/* Image */}
            <Grid column={true} sm={12} md={6} lg={6}>
              <img
                src="https://shaheedi-spg.s3.amazonaws.com/PrivateArtwork/kavi+ji+hi+res.jpg"
                className={Styles.ContentImage}
              />
            </Grid>
            {/* Text */}
            <Grid column={true} sm={12} md={6} lg={6}>
              <div className={Styles.SecText}>
                <h3>About</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum ac mollis arcu. Donec malesuada accumsan maximus.
                  Cras iaculis pretium velit. Duis sit amet efficitur ipsum. Nam
                  magna nibh, posuere et facilisis nec, rhoncus finibus neque.
                  Maecenas ac enim eget nisl laoreet iaculis. Suspendisse in
                  urna ut leo consectetur gravida. Nullam ac cursus diam. Sed
                  consectetur, quam sit amet molestie congue, ligula ante
                  blandit orci, finibus imperdiet felis ipsum sit amet libero.
                  Etiam sit amet laoreet orci, consectetur aliquet arcu. In
                  tortor erat, volutpat et laoreet eget, rhoncus nec justo.
                </p>
                <p>
                  {' '}
                  Aliquam erat volutpat. Nulla venenatis enim sit amet tortor
                  feugiat fermentum. Proin molestie diam sit amet ipsum pretium
                  posuere. Morbi sagittis odio sed mauris mattis dictum.
                  Phasellus sodales enim nec arcu pharetra, vitae venenatis sem
                  condimentum. Aliquam semper varius erat vel convallis.
                  Suspendisse ornare lacus eget euismod scelerisque. Sed
                  dignissim hendrerit ex. Nullam in eros nisl.{' '}
                </p>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* Section 1 - About Granth */}
        <Grid column={true} sm={12} md={10} lg={10} customClass={Styles.Sec}>
          <Grid alignItems="flex-start" justify="center">
            {/* Image */}
            <Grid column={true} sm={12} md={6} lg={6}>
              <img
                src="https://i.postimg.cc/VvjDd3GS/image.png"
                className={Styles.ContentImage}
              />
            </Grid>
            {/* Text */}
            <Grid column={true} sm={12} md={6} lg={6}>
              <div className={Styles.SecText}>
                <h3>About</h3>
                <p>
                  Maecenas ac enim eget nisl laoreet iaculis. Suspendisse in
                  urna ut leo consectetur gravida. Nullam ac cursus diam. Sed
                  consectetur, quam sit amet molestie congue, ligula ante
                  blandit orci, finibus imperdiet felis ipsum sit amet libero.
                </p>
                <p>
                  {' '}
                  Feugiat fermentum. Proin molestie diam sit amet ipsum pretium
                  posuere. Morbi sagittis odio sed mauris mattis dictum.
                  Phasellus sodales enim nec arcu pharetra, vitae venenatis sem
                  condimentum. Aliquam semper varius erat vel convallis.
                  Suspendisse ornare lacus eget euismod scelerisque. Sed
                  dignissim hendrerit ex. Nullam in eros nisl.{' '}
                </p>
                <p>
                  {' '}
                  Feugiat fermentum. Proin molestie diam sit amet ipsum pretium
                  posuere. Morbi sagittis odio sed mauris mattis dictum.
                  Phasellus sodales enim nec arcu pharetra, vitae venenatis sem
                  condimentum. Aliquam semper varius erat vel convallis.
                  Suspendisse ornare lacus eget euismod scelerisque. Sed
                  dignissim hendrerit ex. Nullam in eros nisl.{' '}
                </p>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* Settings */}
        <Grid column={true} sm={12} md={10} lg={10} customClass={Styles.Sec}>
          <div className={Styles.SecText}>
            <h3>Application Preferences</h3>
          </div>
          <ThemeSelector theme={themeState.currentTheme} />
        </Grid>

        {/* Next Button */}
        <Grid column={true} sm={12} md={10} lg={10}>
          <Link to={`/chapters`}>
            <button
              className={`${CornerButtonStyles.Orange} ${CornerButtonStyles.BottomRight}`}
            >
              Chamkaur
            </button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
