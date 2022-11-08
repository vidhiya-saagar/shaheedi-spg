import React, { useContext } from 'react';
import Grid from '../../components/Grid';
import Styles from './BookIndexScreenStyle.module.css';
import { fetchGet } from '../../helper/fetchHelper';
import { Context as ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

const BookIndexScreen = () => {
  const { state: themeState } = useContext(ThemeContext);
  const isDarkMode = themeState.currentTheme === 'DARK';

  return (
    <>
      <Grid
        alignItems="center"
        justify="center"
        customClass={isDarkMode ? `${Styles.DarkMode}` : ''}
      >
        <Grid column={true} sm={12} md={12} lg={10}>
          <Grid alignItems="center" justify="center">
            <Grid
              column={true}
              sm={12}
              md={7}
              lg={12}
              customClass={Styles.MorePad}
            >
              <h3 className={Styles.PageTitle}>Books</h3>
            </Grid>

            {/* Raas 12 */}
            <Grid
              column={true}
              sm={12}
              md={7}
              lg={6}
              customClass={
                isDarkMode
                  ? `${Styles.DarkMode} ${Styles.MorePad}`
                  : Styles.MorePad
              }
            >
              <div className={Styles.BookContainer}>
                <Link to={`/books/nanak-prakash-purbardh`}>
                  <div className={Styles.ImageContainer}>
                    <div className={Styles.BookDescText}>
                      <p>
                        <span className={Styles.BGBlack}>Nanak Prakaash</span>
                      </p>
                      <p>~1469</p>
                    </div>
                    <img
                      height={260}
                      width="100%"
                      loading="lazy"
                      decoding="async"
                      className={Styles.Cover}
                      src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Mural_painting_of_Guru_Nanak_from_Gurdwara_Baba_Atal_Rai.jpg"
                    />
                    <div className={Styles.NewBadge}>
                      <span className={Styles.Dot}></span>
                      New
                    </div>
                  </div>
                </Link>
                <div className={Styles.BookInfo}>
                  <p>
                    In gaining insight through studying Sikh historical texts
                    and listening to the oral histories provided by villagers of
                    the sites where Guru Nanak Dev Ji travelled, Kavi Santokh
                    Singh Ji begins work on his <i>magnum opus</i>.
                  </p>
                  <Link to={`/books/nanak-prakash-purbardh`}>
                    <button>Read Nanak Prakaash - Purbardh</button>
                  </Link>
                </div>
              </div>
            </Grid>

            {/* Raas 12 */}
            <Grid
              column={true}
              sm={12}
              md={7}
              lg={6}
              customClass={
                isDarkMode
                  ? `${Styles.DarkMode} ${Styles.MorePad}`
                  : Styles.MorePad
              }
            >
              <div className={Styles.BookContainer}>
                <Link to={`/books/raas-12`}>
                  <div className={Styles.ImageContainer}>
                    <div className={Styles.BookDescText}>
                      <p>
                        <span className={Styles.BGBlack}>
                          The Life of the 9th Guru
                        </span>
                      </p>
                      <p>~1666</p>
                    </div>
                    <img
                      height={260}
                      width="100%"
                      loading="lazy"
                      decoding="async"
                      className={Styles.Cover}
                      src="https://upload.wikimedia.org/wikipedia/commons/0/09/Portrait_of_Guru_Tegh_Bahadur_by_painter_Ahsan.jpg"
                    />
                  </div>
                </Link>
                <div className={Styles.BookInfo}>
                  <p>
                    The vita of Guru Tegh Bahadur can be found in the SPG in the
                    final two Raas'; Raas 11 and Raas 12. In the twelfth Raas,
                    we will witness the Guru's travel, the <i>avtaar</i> of
                    their son, Gobind Daas and various adventures leading up to
                    their martyrdom in Delhi.
                  </p>
                  <Link to={`/books/raas-12`}>
                    <button>Read Raas 12</button>
                  </Link>
                </div>
              </div>
            </Grid>

            {/* Rut 6 */}
            <Grid
              column={true}
              sm={12}
              md={7}
              lg={6}
              customClass={isDarkMode ? `${Styles.DarkMode}` : ''}
            >
              <div className={Styles.BookContainer}>
                <Link to={`/books/rut-6`}>
                  <div className={Styles.ImageContainer}>
                    <div className={Styles.BookDescText}>
                      <p>
                        <span className={Styles.BGBlack}>
                          Guru Gobind Singh & The Greatest Battle
                        </span>
                      </p>
                      <p>~1704</p>
                    </div>
                    <img
                      height={260}
                      width="100%"
                      loading="lazy"
                      decoding="async"
                      className={Styles.Cover}
                      src="https://cdn.discordapp.com/attachments/785696929664466964/791159814126436352/Untitled_Artwork.PNG"
                    />
                  </div>
                </Link>
                <div className={Styles.BookInfo}>
                  <p>
                    The six <i>ruts</i> - meaning seasons - are all centered
                    around Guru Gobind Singh Ji. The Battle of Chamkaur can be
                    found in the sixth Rut of the Suraj Prakash Granth.
                  </p>
                  <Link to={`/books/rut-6`}>
                    <button>Read Rut 6</button>
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BookIndexScreen;
