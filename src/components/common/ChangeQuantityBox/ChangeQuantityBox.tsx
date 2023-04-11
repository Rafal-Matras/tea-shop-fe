import style from './ChangeQuantityBox.module.css';

interface Props {
  numberOfUnits: number;
  packSize: number;
  unit: 'g' | 'szt';
  state: number;
  quantityOfProduct: number;
  setQuantityOfProducts: (number: number) => void;
  value: string;
  setValue: (name: string) => void;
}

export const ChangeQuantityBox = ({numberOfUnits, packSize, unit, quantityOfProduct, setQuantityOfProducts, state, value, setValue,}: Props) => {

  const changeValue = (e: any) => {
    const valueNumber = Number(e);
    const number = numberOfUnits * packSize;
    if (isNaN(valueNumber)) {
      setValue((number * quantityOfProduct).toString());
    }
    if(valueNumber > state){
      setValue(state.toString())
    } else
    {
      if (valueNumber % (number) < (number / 2)) {
        setValue((valueNumber - (valueNumber % number)).toString());
        setQuantityOfProducts((valueNumber - (valueNumber % number)) / number);
      } else {
        setValue((valueNumber - (valueNumber % number) + number).toString());
        setQuantityOfProducts((valueNumber - (valueNumber % number) + number) / number);
      }
    }
  };

  const quantityUp = () => {
    if ((numberOfUnits * packSize) <= (state - packSize * numberOfUnits * quantityOfProduct)) {
      setQuantityOfProducts(quantityOfProduct + 1);
    }
  };

  const quantityDown = () => {
    if (quantityOfProduct > 1) {
      setQuantityOfProducts(quantityOfProduct - 1);
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