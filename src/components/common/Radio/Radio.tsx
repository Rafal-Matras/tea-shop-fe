import style from './Radio.module.css';

interface Props {
  data: string[];
  name: string;
  account: string;
  setAccount: (name: string) => void;
}

export const Radio = ({data, name, account, setAccount}: Props) => {

  return (
    <div className={style.container}>
      <p className={style.title}>{name}</p>
      <div className={style.radioBox}>
        {data.map(item => (
            <label className={style.label} key={item}>{item}
            <input
              className={style.input}
              type="radio"
              name={name}
              value={item}
              checked={account === item}
              onChange={(e) => setAccount(e.currentTarget.value)}
            />
              <span className={style.checkmark}></span>
            </label>
        ))}
      </div>
    </div>
  );
};