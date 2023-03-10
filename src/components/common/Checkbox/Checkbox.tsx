import style from './Checkbox.module.css';

interface Props {
  name: string;
  active: boolean;
  change: (name: boolean) => void;
}

export const Checkbox = ({name, active, change}: Props) => {

  return (
    <div className={style.container}>
      <label className={style.label}>{name}
        <input
          className={style.input}
          type="checkbox"
          onChange={() => change(!active)}
        />
        <span className={style.checkmark}></span>
      </label>
    </div>
  );
};