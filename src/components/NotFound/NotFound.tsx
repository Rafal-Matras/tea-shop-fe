import { Link } from 'react-router-dom';

import style from './NotFound.module.css';

export const NotFound = () => {

  return (
    <div className={style.container}>
      <h3 className={style.title}>404</h3>
      <p className={style.text}>
        Strona o podanym adresie nie istnieje.
      </p>
      <Link to="/" className={style.button}>Powrót do strony głównej</Link>
    </div>
  );
};