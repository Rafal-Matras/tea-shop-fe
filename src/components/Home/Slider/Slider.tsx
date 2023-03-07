import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { SliderInterface } from '../../../types';

import { AppContext } from '../../../context/AppContext';

import style from './Slider.module.css';

import { sliderData } from '../../../assets/sliderList';

export const Slider = () => {

  const {setProductName, setProductType} = useContext(AppContext);
  const [slidersList, setSlidersList] = useState<SliderInterface[]>([]);
  const [activeSlide, setActiveSlide] = useState<SliderInterface | null>(null);

  useEffect(() => {
    // (async () => {
    //   const response = await fetch(URL - slider);
    //   const data = await response.json();
    //   setSlidersList(data);
    // })();


    setSlidersList(sliderData);
  }, []);

  useEffect(() => {
    if (slidersList) {
      setActiveSlide(slidersList[0]);
    }
  }, [slidersList]);

  useEffect(() => {
    if (activeSlide) {
      const interval = setInterval(() => {
        if (activeSlide.id < slidersList.length) {
          const currentSlider = sliderData.find(item => item.id === activeSlide.id + 1);
          if (currentSlider) setActiveSlide(currentSlider);
        } else {
          const currentSlider = sliderData.find(item => item.id === 1);
          if (currentSlider) setActiveSlide(currentSlider);
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [activeSlide]);

  const goToCurrentPage = () => {
    if (activeSlide) {
      setProductName(activeSlide.product);
      if (activeSlide.productType) setProductType(activeSlide.productType);
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
          {slidersList.map(item => (
            <button
              key={item.id}
              className={`
              ${style.sliderNavButton}
              ${item.id === activeSlide.id ? style.active : null}
              `}
              onClick={() => setActiveSlide(item)}
            ></button>
          ))}
        </div>
      </div>
      : <h1>Loading...</h1>
  );
};
