import style from './PopupRegistered.module.css';

interface Props {
  handleNext: () => void
}
export const PopupRegistered = ({handleNext}:Props) => {

  return(
    <div className={style.popup}>
      <div className={style.popupBox}>
        <p className={style.popupText}>Konto zostało utworzone, można się zalogować </p>
        <button className={style.popupButton} onClick={handleNext}>Zaloguj</button>
      </div>
    </div>
  )
}