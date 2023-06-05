import { useContext } from 'react';
import { Link } from 'react-router-dom';


import style from './Footer.module.css';

import { defaultUser } from '../../assets/defaultData';
import { UseUserContext } from '../../context/UserContext';

export const Footer = () => {

  const {user, setUser} = UseUserContext();

  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  const logout = () => {
    setUser(defaultUser);
    scrollUp();
  };

  return (
    <div className={style.container}>
      <div className={style.containerBox}>
        <div className={style.info}>
          <h1 className={style.title}>Informacje</h1>
          <p className={style.text}>
            <Link className={style.link} to="/about-us" onClick={scrollUp}>O Nas</Link></p>
          <p className={style.text}>
            <Link className={style.link} to="/regulations" onClick={scrollUp}>Regulamin</Link></p>
          <p className={style.text}>
            <Link className={style.link} to="/delivery-and-payment" onClick={scrollUp}>Dlostawa i Płatnośći</Link>
          </p>
          <p className={style.text}>
            <Link className={style.link} to="/how-do-we-package" onClick={scrollUp}>Jak Pakujemy</Link>
          </p>
          <p className={style.text}>
            <Link className={style.link} to="/return-policy" onClick={scrollUp}>Polityka Zwrotów</Link></p>
          <p className={style.text}>
            <Link className={style.link} to="/privacy-policy" onClick={scrollUp}>Polityka Prywatności</Link></p>
        </div>
        <div className={style.contact}>
          <h1 className={style.title}>Kontakt</h1>
          <p className={style.text}>Herbaciany Zakątek S.C.</p>
          <p className={style.text}> ul. Herbaciana 12 m 1</p>
          <p className={style.text}>01-123 Warszawa</p>
          <p className={style.text}>Pon - Pt: <span>8:00 - 16:00</span></p>
          <p className={style.text}>Telefon: <span><a href="tel:+48 123 456 789">+48 123 456 789</a></span></p>
          <p className={style.text}>E-mail: <span><a
            href="mailto:info@herbacianyzakatek.pl">info@herbacianyzakatek.pl</a></span>
          </p>
          <p className={style.text}>NIP: <span>123 456 78 99</span></p>
          <p className={style.text}>Regon: <span>123456789</span></p>
        </div>
        <div className={style.profile}>
          <h1 className={style.title}>Panel klienta</h1>
          {user.role
            ? <>
              <p className={style.text}>
                <Link
                  className={style.link}
                  to="/user/profile"
                  state={'history'}
                  onClick={scrollUp}
                >Historia Zakupów
                </Link>
              </p>
              <p className={style.text}>
                <Link
                  className={style.link}
                  to="/user/profile"
                  state={'data'}
                  onClick={scrollUp}
                >Moje Dane
                </Link>
              </p>
              <p className={style.text}>
                <Link
                  className={style.link}
                  to="/user/profile"
                  state={'password'}
                  onClick={scrollUp}
                >
                  Zmień Hasło
                </Link>
              </p>
              <p className={style.text}>
                <Link
                  className={style.link}
                  to="/user/logout"
                  onClick={logout}
                >Wyloguj
                </Link>
              </p>
            </>
            : <p className={style.text}>
              <Link className={style.link} to="/user/login" onClick={scrollUp}>Logowanie</Link> /
              <Link className={style.link} to="/user/register" onClick={scrollUp}>Rejestracja</Link>
            </p>
          }
        </div>
      </div>
    </div>
  );
};
