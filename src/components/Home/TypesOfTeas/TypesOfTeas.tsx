import { useEffect, useState } from 'react';

import { UseProductContext } from '../../../context/ProductContext';

import { TitleBar } from '../../common/TitleBar/TitleBar';

import { OneTypeOfTea } from './OneTypeOfTea';

import { ArrowLeftIcon } from '../../common/SvgIcons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../common/SvgIcons/ArrowRightIcon';

import { teaTypes } from '../../../assets/teaTypes';

import style from './TypesOfTeas.module.css';

export const TypesOfTeas = () => {

  const {setProductType, setProductName} = UseProductContext();
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

  const transformToPage = (name: string) => {
    setProductName('herbaty');
    setProductType(name);
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
          <OneTypeOfTea
            key={item.name}
            item={item}
            value={value}
            transformToPage={transformToPage}
          />
        ))}
      </div>
    </section>
  );
};