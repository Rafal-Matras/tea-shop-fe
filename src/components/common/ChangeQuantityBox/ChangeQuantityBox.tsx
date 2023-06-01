import style from './ChangeQuantityBox.module.css';

interface Props {
  numberOfUnits: number;
  packSize: number;
  unit: 'g' | 'szt';
  state: number;
  count: number;
  setCount: (value: number) => void;
  value: string;
  setValue: (name: string) => void;
}

export const ChangeQuantityBox = ({numberOfUnits, packSize, unit, count, setCount, state, value, setValue,}: Props) => {

  const changeValue = (e: any) => {
    const valueNumber = Number(e);
    const number = numberOfUnits * packSize;
    if (isNaN(valueNumber)) {
      setValue((number * count).toString());
    }
    if(valueNumber > state){
      setValue(state.toString())
    } else
    {
      if (valueNumber % (number) < (number / 2)) {
        setValue((valueNumber - (valueNumber % number)).toString());
        setCount((valueNumber - (valueNumber % number)) / number);
      } else {
        setValue((valueNumber - (valueNumber % number) + number).toString());
        setCount((valueNumber - (valueNumber % number) + number) / number);
      }
    }
  };

  const quantityUp = () => {
    if ((numberOfUnits * packSize) <= (state - packSize * numberOfUnits * count)) {
      setCount(count + 1);
    }
  };

  const quantityDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className={style.changeQuantity}>
      <button className={style.changeQuantityButton} onClick={quantityDown}>-</button>
      <div className={style.changeQuantityInputBox}>
        <input
          className={style.changeQuantityInput}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={(e) => changeValue(e.target.value)}
        />{unit}
      </div>
      <button className={style.changeQuantityButton} onClick={quantityUp}>+</button>
    </div>
  );
};