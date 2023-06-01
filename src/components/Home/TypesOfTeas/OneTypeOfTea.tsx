import { Link } from 'react-router-dom';

import { TeaTypeInterface } from '../../../types';

import style from './TypesOfTeas.module.css';

interface Props {
  item: TeaTypeInterface;
  index: number;
  value: number;
  setMoreOfTea: (boolean: boolean) => void;
  setTypeIndex: (name: number) => void;
}

export const OneTypeOfTea = ({item, index, value, setMoreOfTea, setTypeIndex}: Props) => {

  const expandDescription = () => {
    setMoreOfTea(true);
    setTypeIndex(index);
  };

  return (
    <div
      className={style.teaType}
      style={{left: `-${value}px`}}
      key={item.name}>
        <img
          className={style.teaTypeImage}
          src={`/images/tea-types/${item.image}`}
          alt="zdjęcie herbaty"
        />
      <h1 className={style.teaTypeTitle}>{item.name}</h1>
      <p className={style.teaTypeText}>{item.description}</p>
      <button className={style.teaTypeButton} onClick={expandDescription}>Czytaj więcej</button>
    </div>
  );
};