import { Link } from 'react-router-dom';

import { TeaTypeInterface } from '../../../types';

import style from './TypesOfTeas.module.css';

interface Props {
  item: TeaTypeInterface;
  value: number;
  transformToPage: (name: string) => void;
}

export const OneTypeOfTea = ({item, value, transformToPage}: Props) => {

  return (
    <div
      className={style.teaType}
      style={{left: `-${value}px`}}
      key={item.name}>
      <Link to="/shop">
        <img
          className={style.teaTypeImage}
          src={`/images/tea-types/${item.image}`}
          alt="zdjęcie herbaty"
          onClick={() => transformToPage(item.type)}
        />
      </Link>
      <Link to="/shop"
            className={style.teaTypeTitle}
            onClick={() => transformToPage(item.type)}
      >{item.name}
      </Link>
      <p className={style.teaTypeText}>{item.description}</p>
      <Link to="/shop"
            className={style.teaTypeButton}
            onClick={() => transformToPage(item.type)}
      >{item.name}</Link>
    </div>
  );
};