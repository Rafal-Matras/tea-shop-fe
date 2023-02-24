import { useContext, useEffect, useState } from 'react';

import { TitleBar } from '../../common/TitleBar/TitleBar';

import { ArrowLeftIcon } from '../../common/SvgIcons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../common/SvgIcons/ArrowRightIcon';

import { teaTypes } from '../../../assets/teaTypes';

import style from './TypesOfTeas.module.css';
import { AppContext } from '../../../context/AppContext';
import { Link } from 'react-router-dom';

export const TypesOfTeas = () => {

  const {setProductType, setProductName} = useContext(AppContext);
  const [positionNumber, setPositionNumber] = useState<number>(0);
  const [value, setValue] = useState<number>(0);
  let multiplier = 1;

  useEffect(() => {
    setValue(multiplier * positionNumber);
  }, [positionNumber]);

  if (window.screen.width < 480) {
    multiplier = 225;
  } else if (window.screen.width < 720) {
    multiplier = 470;
  } else if (window.screen.width < 992) {
    multiplier = 705;
  } else multiplier = 940;

  const positionNumberUp = () => {
    if (window.screen.width < 480) {
      if (positionNumber < 9) {
        setPositionNumber(positionNumber => positionNumber + 1);
      } else setPositionNumber(0);
    } else if (window.screen.width < 720) {
      if (positionNumber < 4) {
        setPositionNumber(positionNumber => positionNumber + 1);
      } else setPositionNumber(0);
    } else if (window.screen.width < 992) {
      if (positionNumber < 3) {
        setPositionNumber(positionNumber => positionNumber + 1);
      } else setPositionNumber(0);
    } else {
      if (positionNumber < 2) {
        setPositionNumber(positionNumber => positionNumber + 1);
      } else setPositionNumber(0);
    }
  };

  const transformToPage = (name: string) => {
    setProductType('herbaty');
    setProductName(name);
  };

  const positionNumberDown = () => {
    if (window.screen.width < 480) {
      if (positionNumber === 0) {
        setPositionNumber(9);
      } else setPositionNumber(positionNumber => positionNumber - 1);
    } else if (window.screen.width < 720) {
      if (positionNumber === 0) {
        setPositionNumber(4);
      } else setPositionNumber(positionNumber => positionNumber - 1);
    } else if (window.screen.width < 992) {
      if (positionNumber === 0) {
        setPositionNumber(3);
      } else setPositionNumber(positionNumber => positionNumber - 1);
    } else {
      if (positionNumber === 0) {
        setPositionNumber(2);
      } else setPositionNumber(positionNumber => positionNumber - 1);
    }
  };

  return (
    <section className={style.container}>
      <TitleBar title="rodzaje herbat">
        <button className={style.leftButton}>
          <ArrowLeftIcon className={style.arrowIcon} onClick={positionNumberDown}/></button>
        <button className={style.rightButton}>
          <ArrowRightIcon className={style.arrowIcon} onClick={positionNumberUp}/></button>
      </TitleBar>
      <div className={style.teaTypeBox}>
        {teaTypes.map(item => (
          <div
            className={style.teaType}
            style={{left: `-${value}px`}}
            key={item.name}>
            <Link to="/shop">
              <img
                className={style.teaTypeImage}
                src={`/images/tea-types/${item.image}`}
                alt="zdjęcie herbaty"
                onClick={() => transformToPage(item.name)}
              />
            </Link>
            <Link to="/shop"
                  className={style.teaTypeTitle}
                  onClick={() => transformToPage(item.name)}
            >{item.name}
            </Link>
            <p className={style.teaTypeText}>{item.description}</p>
            <Link to="/shop"
                  className={style.teaTypeButton}
                  onClick={() => transformToPage(item.name)}
            >{item.name}</Link>
          </div>
        ))}
      </div>
    </section>
  );
};