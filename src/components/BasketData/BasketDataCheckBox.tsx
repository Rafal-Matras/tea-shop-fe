import { Link } from 'react-router-dom';

import { Checkbox } from '../common/Checkbox/Checkbox';

import style from './BasketData.module.css';

interface Props {
  accept: 0 | 1;
  setAccept: (accept: 0 | 1) => void;
  setIsAccepted: (isAccepted: boolean) => void;
}

export const BasketDataCheckBox = ({accept, setAccept, setIsAccepted}: Props) => {

  const changeActiveCheckbox = (accept: 0 | 1) => {
    setAccept(accept);
    setIsAccepted(!accept);
  };

  return (
    <div className={style.acceptanceCheckbox}>
      <Checkbox
        active={accept}
        change={changeActiveCheckbox}
      ><p
      >Zapoznałem się i akceptuję &nbsp;
        <Link
          className={style.acceptanceLink}
          to="/regulations"
          target="_blank">
          regulamin
        </Link> oraz&nbsp;
        <Link
          className={style.acceptanceLink}
          to="/privacy-policy"
          target="_blank">
          politykę prywatności
        </Link>
      </p>
      </Checkbox>
    </div>
  );
};