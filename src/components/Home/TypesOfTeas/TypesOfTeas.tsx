import { useEffect, useState } from 'react';

import { UseProductContext } from '../../../context/ProductContext';

import { TitleBar } from '../../common/TitleBar/TitleBar';

import { OneTypeOfTea } from './OneTypeOfTea';

import { ArrowLeftIcon } from '../../common/SvgIcons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../common/SvgIcons/ArrowRightIcon';

import { teaTypes } from '../../../assets/data';

import style from './TypesOfTeas.module.css';
import { useNavigate } from 'react-router-dom';
import { CloseIcon } from '../../common/SvgIcons/CloseIcon';

export const TypesOfTeas = () => {

  const navigate = useNavigate();
  const {setProductType, setProductName} = UseProductContext();
  const [positionNumber, setPositionNumber] = useState<number>(0);
  const [value, setValue] = useState<number>(0);
  const [moreOfTea, setMoreOfTea] = useState<boolean>(false);
  const [typeIndex, setTypeIndex] = useState<number>(0);
  let multiplier: number;

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
    if (moreOfTea) {
      if (typeIndex < 9) {
        setTypeIndex(typeIndex + 1);
      } else {
        setTypeIndex(0);
      }
    } else {
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
    }
  };

  const positionNumberDown = () => {
    if (moreOfTea) {
      if (typeIndex > 0) {
        setTypeIndex(typeIndex - 1);
      } else {
        setTypeIndex(9);
      }
    }if (window.screen.width < 480) {
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

  const goToTeas = () => {
    setMoreOfTea(false);
    setProductName('herbaty');
    setProductType(teaTypes[typeIndex].type);
    navigate('/shop');
  };

  return (
    <section className={style.container}>
      <TitleBar title="rodzaje herbat">
        <button className={style.leftButton}>
          <ArrowLeftIcon className={style.arrowIcon} onClick={positionNumberDown}/></button>
        <button className={style.rightButton}>
          <ArrowRightIcon className={style.arrowIcon} onClick={positionNumberUp}/></button>
      </TitleBar>
      {moreOfTea
        ? <div className={style.description}>
          <button
            className={style.descriptionClose}
            onClick={() => setMoreOfTea(false)}
          ><CloseIcon className={style.descriptionIcon}/>
          </button>
          <div className={style.descriptionBox}>
            <h1 className={style.descriptionTitle}>{teaTypes[typeIndex].name}</h1>
            <img
              className={style.descriptionImage}
              src={`/images/tea-types/${teaTypes[typeIndex].image}`}
              alt="zdjęcie herbaty"
            />
          </div>
          <div className={style.descriptionText}>{teaTypes[typeIndex].fullDescription}</div>
          <button className={style.descriptionButton} onClick={goToTeas}>Przejdź do herbat</button>
        </div>
        : <div className={style.teaTypeBox}>
          {teaTypes.map((item, index) => (
            <OneTypeOfTea
              key={item.name}
              item={item}
              index={index}
              value={value}
              setMoreOfTea={setMoreOfTea}
              setTypeIndex={setTypeIndex}
            />
          ))}
        </div>
      }
    </section>
  );
};