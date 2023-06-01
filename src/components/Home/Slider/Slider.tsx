import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { SliderInterface } from '../../../types';

import { UseProductContext } from '../../../context/ProductContext';

import style from './Slider.module.css';

import { sliderList } from '../../../assets/data';
import { Spinner } from '../../common/Spinner/Spinner';

export const Slider = () => {

  const {setProductName, setProductType,setActiveProductType} = UseProductContext();
  const [activeSlide, setActiveSlide] = useState<SliderInterface>(sliderList[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeSlide.id < sliderList.length) {
        const currentSlider = sliderList.find(item => item.id === activeSlide.id + 1);
        if (currentSlider) setActiveSlide(currentSlider);
      } else {
        const currentSlider = sliderList.find(item => item.id === 1);
        if (currentSlider) setActiveSlide(currentSlider);
      }
    }, 5000);
    return () => clearInterval(interval);

  }, [activeSlide]);

  const goToCurrentPage = () => {
    setProductName('');
    setProductType('');
    if (activeSlide) {
      setProductName(activeSlide.product);
      if (activeSlide.productType) {
        setProductType(activeSlide.productType);
      }
    }
  };

  return (
    activeSlide
      ? <div className={style.container}>
        <Link className={style.slider} to="/shop" onClick={goToCurrentPage}>
          <img
            src={`/images/slider/${activeSlide.image}`}
            alt={activeSlide.image}
          />
        </Link>
        <div className={style.sliderNav}>
          {sliderList.map(item => (
            <button
              key={item.id}
              className={item.id === activeSlide.id ? style.sliderNavButtonActive : style.sliderNavButton}
              onClick={() => setActiveSlide(item)}
            ></button>
          ))}
        </div>
      </div>
      : <Spinner/>
  );
};
