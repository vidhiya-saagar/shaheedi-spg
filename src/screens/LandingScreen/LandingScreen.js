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
                src="https://shaheedi-spg.s3.amazonaws.com/StaticImages/SPGLogo_Web.webp"
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
                src="https://shaheedi-spg.s3.amazonaws.com/StaticImages/KaviJiHiResFinal_Web.webp"
                className={Styles.ContentImageNoBorder}
              />
              <p className={Styles.SubText}>
                Kavi Santokh Singh - Crafted by <i>Jatinder Singh Durhailay</i>
              </p>
            </Grid>
            {/* Text */}
            <Grid column={true} sm={12} md={6} lg={6}>
              <div className={Styles.SecText}>
                <h3>The Granth</h3>
                <p>
                  Paramount to the foundation of Sikhi is the saakhis/stories of
                  the Gurus and their Sikhs which play an integral role of
                  inspiration. A dominant source of such inspiration comes
                  through the historical text called Sri Suraj Prakash Granth (
                  <i>or Sri Gurpartap Suraj Granth</i>) which is read and
                  contemplated upon amongst the diaspora today. Written by Kavi
                  Raaj Bhai Santokh Singh, Sri Suraj Prakash serves as an
                  important work of literature filled with the rich history and
                  philosophy of the 10 Guru Sahibs strung together through
                  numerous volumes of poetic beauty.
                </p>
                <p>
                  The work is primarily written in Braj Bhasha, a western Hindi
                  language in the times preceding the 19th century. SPG is
                  structured in a way that it relates to the rays of the Sun
                  itself; as a way of reflecting the Guru’s glory. SPG ranges to
                  over 1600 angs and consists of 51,820 verses written in the
                  form of [mention poetic devices] dohras, chands, etc. The
                  literary work is broken down into 14 jildhs (volumes), 6 ruts,
                  and 2 directions in resemblance to the rising and setting of
                  the sun.
                </p>

                <p>
                  SPG remains a vital source of reference to the lives of the
                  Gurus and is the most commonly used historical source for
                  discourse amongst the Sikh diaspora. Among the 5 takhts,
                  discourse on Suraj Prakash is done every day where a reader
                  (Paathi) would read aloud lines from the text and discourse
                  would be done from the Kathavaachik.
                </p>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* Section 1 - About Kavi Ji */}
        <Grid column={true} sm={12} md={10} lg={10} customClass={Styles.Sec}>
          <Grid alignItems="flex-start" justify="center">
            {/* Image */}
            <Grid column={true} sm={12} md={6} lg={6}>
              <img
                src="https://shaheedi-spg.s3.amazonaws.com/StaticImages/GianiSantSingh_Caligraphy.webp"
                className={Styles.ContentImage}
              />
              <p className={Styles.SubText}>
                Giani Sant Singh - The vidyaguru of Kavi Santokh Singh
              </p>
            </Grid>
            {/* Text */}
            <Grid column={true} sm={12} md={6} lg={6}>
              <div className={Styles.SecText}>
                <h3>The Great Poet</h3>
                <p>
                  Kavi Raaj Bhai Santokh Singh has played an extremely relevant
                  role in today’s Sikh world as one of the renowned references
                  of Sikh history and philosophy. Kavi Ji was from a village
                  Noor Di Saraan in the district of Amritsar born into the house
                  of father Deva Singh and mother Raezadi Kaur. At an early age
                  Kavi Ji would be sent to obtain vidya under the tutelage of
                  Giani Sant Singh, head Granthi of Sri Harmandir Sahib and a
                  renowned Gurmat scholar. Through the duration of their vidya
                  under Giani Sant Singh, Kavi Ji would learn Braj Bhasha,
                  Brahmvidya and experience the divine; all of the foundational
                  pieces that attributed to their creation (Rachna) of such a
                  wondrous Granth. Alongside, Braj Bhasha, Kavi Ji would learn a
                  multitude of languages such as Farsi, Sanskrit, and take part
                  in religious discourse with acknowledged scholars of the Sikh
                  and Hindu faith. Throughout their life, Kavi Ji has been
                  described to be a devout Gursikh who would wake in the early
                  hours of the day and dedicate their time to bhajan leading on
                  to writing literary works themselves.
                </p>
                <p>
                  {' '}
                  Kavi Ji spent time in various regions across Punjab spending
                  their time teaching vidya and serving as an advisor to
                  prominent Maharajas or a kathakaar to the Sangat. Among these
                  travels, Kavi Ji wrote many important philosophical literary
                  works including the Naam Kosh, Sri Guru Nanak Prakash, Garb
                  Ganjini Teeka, Valmiki Ramayana and many others; a testament
                  to the level of knowledge that they had amassed.
                </p>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* Next Button */}
        <Grid column={true} sm={12} md={10} lg={10} customClass={Styles.Sec}>
          <Link to={`/chapters`}>
            <button
              className={`${CornerButtonStyles.Orange} ${CornerButtonStyles.BottomRight}`}
            >
              Chamkaur
            </button>
          </Link>
        </Grid>

        {/* Preferances */}
        <Grid
          column={true}
          sm={12}
          md={10}
          lg={10}
          customClass={Styles.LastSec}
        >
          <Grid alignItems="flex-start" justify="center">
            {/* Theme Preference */}
            <Grid column={true} sm={12} md={12} lg={12}>
              <ThemeSelector theme={themeState.currentTheme} />
            </Grid>
          </Grid>
        </Grid>

        {/* Footer Disclaimer */}
        <Grid
          column={true}
          sm={12}
          md={10}
          lg={10}
          customClass={Styles.LastSec}
        >
          <p className={Styles.Disclaimer}>
            <strong>Disclaimer</strong> - this story is brought to you through a
            translation of Maha Kavi Santokh Singh. It should be known that
            further study of the granth is encouraged, but with the guidance of
            someone who has studied the granth. The grace and understanding that
            comes with a teacher are irreplaceable. This knowledge is best
            obtained with a figure in place that can explain and answer any
            questions you have.{' '}
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
