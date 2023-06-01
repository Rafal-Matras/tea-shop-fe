import style from './Spinner.module.css';

export const Spinner = () => {

  return (
    <div className={style.container}>
    <span className={style.loader}></span>
    </div>
  );
};