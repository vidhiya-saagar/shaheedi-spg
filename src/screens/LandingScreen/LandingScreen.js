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
                src="https://shaheedi-spg.s3.amazonaws.com/StaticImages/SPGLogo_Comp.png"
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

        {/* Section 1 - Intro to the Granth */}
        <Grid column={true} sm={12} md={10} lg={10} customClass={Styles.Sec}>
          <Grid alignItems="flex-start" justify="center">
            <Grid column={true} sm={12} md={12} lg={12}>
              {/* First Row */}
              <Grid
                alignItems="flex-start"
                justify="center"
                customClass={`${Styles.Sec} ${Styles.MobileReverse}`}
              >
                {/* First Image  */}
                <Grid column={true} sm={12} md={6} lg={6}>
                  <img
                    src="https://shaheedi-spg.s3.amazonaws.com/StaticImages/KaviJiWriting_LosslessComp.jpg"
                    className={Styles.ContentImage}
                  />
                </Grid>

                {/* Text */}
                <Grid column={true} sm={12} md={6} lg={6}>
                  <div className={Styles.SecText}>
                    <h3>The Granth</h3>
                    <p>
                      A foundational source of inspiration in Sikhi are the
                      sakhis (stories) of the Gurus and their Sikhs. However,
                      where do these stories originate from? Who has written
                      such accounts?
                    </p>
                    <p>
                      The historical text known as{' '}
                      <i>Sri Suraj Prakash Granth</i> (or
                      <i> Sri Gurpratap Suraj Granth</i>) is a fountain of
                      inspiration, which in today’s date is read and
                      contemplated amongst the diaspora. Written by Kavi Raaj
                      Bhai Santokh Singh, <i>Suraj Prakash Granth</i> (SPG)
                      serves as an important and influential work of literature.
                      Filled with a rich history, the philosophy of the 10 Guru
                      Sahibs can be explored through the numerous volumes of
                      poetic beauty.
                    </p>
                  </div>
                </Grid>
              </Grid>

              {/* Second Row */}
              <Grid
                alignItems="flex-start"
                justify="center"
                customClass={`${Styles.Sec} ${Styles.MobileReverse}`}
              >
                <Grid column={true} sm={12} md={6} lg={6}>
                  <img
                    src="https://i.postimg.cc/28H9Qc6N/kavihiresnoborder-optimized.png"
                    className={Styles.ContentImage}
                  />
                  <p className={Styles.SubText}>
                    Kavi Santokh Singh - Minature painting by{' '}
                    <i>Jatinder Singh Durhailay</i>
                  </p>
                </Grid>
                <Grid column={true} sm={12} md={6} lg={6}>
                  <div className={Styles.SecText}>
                    <p>
                      The work is primarily written in <i>Braj Bhasha</i>, a
                      western Hindi language in the times preceding the 19th
                      century. SPG is structured in a way that it relates to the
                      rays of the Sun itself; as a way of reflecting the Guru’s
                      glory. SPG ranges to over 1600 angs and consists of 51,820
                      verses written in the form of <i>Dohras</i>,{' '}
                      <i>Chhands</i> and additional sophisticated literary
                      devices. The literary work is broken down into 12{' '}
                      <i>raas</i>’ (months), 6 <i>ruts</i> (seasons) and 2{' '}
                      <i>ayans</i> (solstices) in resemblance to the rising and
                      setting of the sun. It is currently available in the form
                      of 14 <i>jildhs</i> (volumes) that have been thoroughly
                      administered by Bhai Vir Singh and include a detailed dive
                      into the life of Kavi Ji.
                    </p>

                    <p>
                      In an ever-evolving world, SPG remains an important
                      central source of reference to the lives of the Gurus and
                      is the most commonly used historical source for discourse
                      amongst the Sikh diaspora. Among the 5 <i>Takhts</i>,
                      discourse on <i>Sri Suraj Prakash</i> is done every day
                      where a reader (<i>Paathi</i>) reads aloud lines from the
                      text and discourse is done from the <i>Katha vachak</i>.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Section 2 - About Kavi Ji */}
        <Grid column={true} sm={12} md={10} lg={10} customClass={Styles.Sec}>
          <Grid
            alignItems="flex-start"
            justify="center"
            customClass={Styles.Reverse}
          >
            {/* Image */}
            <Grid column={true} sm={12} md={6} lg={6}>
              <img
                src="https://shaheedi-spg.s3.amazonaws.com/StaticImages/GianiSantSinghCaligraph_Comp.jpg"
                className={Styles.ContentImage}
              />
              <p className={Styles.SubText}>
                Giani Sant Singh - The <i>vidyaguru</i> of Kavi Santokh Singh
              </p>
            </Grid>
            {/* Text */}
            <Grid column={true} sm={12} md={6} lg={6}>
              <div className={Styles.SecText}>
                <h3>The Great Poet</h3>
                <p>
                  Kavi Raaj Bhai Santokh Singh has played an essential role in
                  today’s Sikh world as one of the most renowned scholars of
                  Sikh history and philosophy. Kavi Ji were from the village
                  Noor Di Saraan in the district of Amritsar; born into the
                  house of father Deva Singh and mother Raezadi Kaur. At an
                  early age, Kavi Ji would be sent to obtain <i>vidya</i> under
                  the tutelage of Giani Sant Singh, head Granthi of Sri
                  Harmandir Sahib and a renowned Gurmat scholar. Through the
                  duration of their <i>vidya</i> under Giani Sant Singh, Kavi Ji
                  would learn <i>Braj Bhasha</i>, <i>Brahmvidya</i> and
                  experience the divine; all of the foundational pieces that
                  attributed to their creation (<i>rachna</i>) of such a
                  wondrous Granth. Alongside <i>Braj Bhasha</i>, Kavi Ji would
                  learn a multitude of languages such as Farsi, Sanskrit, and
                  take part in religious discourse with acknowledged scholars of
                  the Sikh and Hindu faith. Throughout their life, Kavi Ji have
                  been described to be a devout Gursikh who would wake in the
                  early hours of the day and dedicate their time to{' '}
                  <i>bhajan</i>, leading on to writing literary works
                  themselves.
                </p>
                <p>
                  Kavi Ji spent time in various regions across Punjab teaching
                  <i>vidya</i> and serving as an advisor to prominent{' '}
                  <i>Maharajas</i> or a <i>kathakaar</i> to the Sangat. Among
                  these travels, Kavi Ji wrote many sophisticated philosophical
                  literary works including the <i>Naam Kosh</i>,{' '}
                  <i>Sri Guru Nanak Prakash</i>, <i>Garab Ganjani Teeka</i>,{' '}
                  <i>Valmiki Ramayana</i> and many others; a testament to the
                  level of knowledge that they had amassed.
                </p>

                <p>
                  In the latter part of their life, around 1892{' '}
                  <i>Bikrami samat</i> (~1835 Common era), Kavi Ji would begin
                  the wondrous composition of SPG with the help of Sikh
                  scholarly works, support of Maharaja Udai Singh of Kental, and
                  the Guru’s <i>Shaheed Singhs</i> themselves. Kavi Ji would
                  consolidate many various historical accounts of the Guru
                  Sahibs from references including:
                  <ul>
                    <li>
                      <i>Sikhan di Bhagat Mala</i> by Amar Shaheed Bhai Mani
                      Singh
                    </li>
                    <li>Bhagat Ratnavali</li> by Amar Shaheed Bhai Mani Singh
                    <li>
                      <i>Bachittar Natak</i> by Sri Guru Gobind Singh Ji Maharaj
                    </li>
                    <li>
                      <i>Gurbilas Patshahi 10</i> by Kuir Singh
                    </li>
                    <li>
                      <i>Malwa Desh Ratan di Sakhi Pothi</i>
                    </li>
                    <li>
                      <i>Sau Sakhi</i>
                    </li>
                    <li>
                      Accounts of the Guru Sahiban by Bhai Ram Koer Ji (ancestor
                      of Baba Buddha Ji)
                    </li>
                    <li>Accounts by local Gursikhs and many more…</li>
                  </ul>
                </p>
                <p>
                  Shortly before their passing, Kavi Ji completed the Granth, an
                  embodiment of their life’s efforts, and gave ownership to the
                  Guru Panth for the rights of usage at Sri Harmandir Sahib.
                </p>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* Section 2 - About Kavi Ji */}
        <Grid column={true} sm={12} md={10} lg={10} customClass={Styles.Sec}>
          <Grid
            alignItems="flex-start"
            justify="center"
            customClass={Styles.Reverse}
          >
            {/* Nothing */}
            <Grid column={true} sm={12} md={6} lg={6}></Grid>
            {/* Text */}
            <Grid column={true} sm={12} md={6} lg={6}>
              <div className={Styles.SecText}>
                <h3>In the Projects one day</h3>
                <p>
                  This project has been undertaken with the intention to bring
                  Sri Suraj Prakash to the broader audience in a format that is
                  digestible by today’s audience of readers that are well versed
                  in the English language. In today’s digital world, the ability
                  to hear and see the very same text being contemplated holds a
                  large value and makes for an engaging experience. In the same
                  manner, this application intends to develop an experience with
                  the intention of making Kavi Ji’s relevant account of Sikh
                  history accessible to the world. Please forgive us for any
                  mistakes made within the process of digitizing such a piece of
                  work and feel free to provide any comments to{` `}
                  <a href="srisurajprakash@protonmail.com">
                    srisurajprakash@protonmail.com
                  </a>
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
