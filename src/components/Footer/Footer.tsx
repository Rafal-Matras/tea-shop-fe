import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';

import style from './Footer.module.css';

export const Footer = () => {

  const {activeUser, setActiveUser} = useContext(AppContext);

  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1 className={style.title}>Informacje</h1>
        <p className={style.text}><Link className={style.link} to="/about-us">O Nas</Link></p>
        <p className={style.text}><Link className={style.link} to="/regulations">Regulamin</Link></p>
        <p className={style.text}><Link className={style.link} to="/delivery-and-payment">Dlostawa i Płatnośći</Link>
        </p>
        <p className={style.text}><Link className={style.link} to="/return-policy">Polityka Zwrotów</Link></p>
        <p className={style.text}><Link className={style.link} to="/privacy-policy">Polityka Prywatności</Link></p>
      </div>
      <div className={style.contact}>
        <h1 className={style.title}>Kontakt</h1>
        <p className={style.text}>Herbaciany Zakątek S.C.</p>
        <p className={style.text}> ul. Herbaciana 12 m 1</p>
        <p className={style.text}>01-123 Warszawa</p>
        <p className={style.text}>Pon-Pt 8:00 - 16:00</p>
        <p className={style.text}>Telefon: <span>+48 123 456 789</span></p>
        <p className={style.text}>E-mail: <span>info@herbacianyzakatek.pl</span></p>
        <p className={style.text}>NIP: <span>123 456 78 99</span></p>
        <p className={style.text}>Regon: <span>123456789</span></p>
      </div>
      <div className={style.profile}>
        <h1 className={style.title}>Panel klienta</h1>
        {activeUser
          ? <>
            <p className={style.text}><Link className={style.link} to="/user/profile/orders">Historia Zakupów</Link></p>
            <p className={style.text}><Link className={style.link} to="/user/profile/data">Moje Dane</Link></p>
            <p className={style.text}><Link className={style.link} to="/user/profile/change-password">Zmień Hasło</Link>
            </p>
            <p className={style.text}><Link className={style.link} to="/user/logout"
                                            onClick={() => setActiveUser(false)}>Wyloguj</Link></p>
          </>
          : <p className={style.text}>
            <Link className={style.link} to="/user/login">Logowanie</Link> /
            <Link className={style.link} to="/user/register">Rejestracja</Link>
          </p>
        }
      </div>
    </div>
  );
};