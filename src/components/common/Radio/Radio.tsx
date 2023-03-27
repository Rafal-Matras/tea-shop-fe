import style from './Radio.module.css';

interface Props {
  data: string[];
  name: string;
  account: string;
  setAccount: (name: string) => void;
  vertical?: boolean;
}

export const Radio = ({data, name, account, setAccount, vertical}: Props) => {

  return (
    <div className={style.container}>
      <p className={vertical ? style.titleVertical : style.title}>{name}</p>
      <div className={vertical ? style.radioBoxVertical : style.radioBox}>
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