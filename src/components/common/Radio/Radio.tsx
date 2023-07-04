import style from './Radio.module.css';
import { NumberOfUnits } from '../../../types';

interface Props {
  data: string[] | number[];
  text: string;
  name:string;
  account: string | number;
  setAccount: (name: string, value: string | number) => void;
  vertical?: boolean;
}

export const Radio = ({data, text,name, account, setAccount, vertical}: Props) => {

  return (
    <div className={style.container}>
      <p className={vertical ? style.titleVertical : style.title}>{text}</p>
      <div className={vertical ? style.radioBoxVertical : style.radioBox}>
        {data.map(item => (
          <label className={style.label} key={item}>{item}
            <input
              className={style.input}
              type="radio"
              name={name}
              value={item}
              checked={account === item}
              onChange={(e) => setAccount(name, e.currentTarget.value)}
            />
            <span className={style.checkmark}></span>
          </label>
        ))}
      </div>
    </div>
  );
};