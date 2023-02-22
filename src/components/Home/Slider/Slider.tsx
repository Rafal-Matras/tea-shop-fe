import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { SliderInterface } from '../../../types';

import style from './Slider.module.css';
import { AppContext } from '../../../context/AppContext';

export const Slider = () => {

  const sliderData: SliderInterface[] = [
    {id: 1, image: 'blackTea.jpg', page: '/store', product: 'herbaty', productType: 'czarna'},
    {id: 2, image: 'newProducts.jpg', page: '/store', product: 'nowosci', productType: ''},
    {id: 3, image: 'coffeeClassic.jpg', page: '/store', product: 'kawy', productType: 'klasyczne'},
    {id: 4, image: 'greenTea.jpg', page: '/store', product: 'herbaty', productType: 'zielona'},
    {id: 5, image: 'redTea.jpg', page: '/store', product: 'herbaty', productType: 'czerwona'},
    {id: 6, image: 'coffee.jpg', page: '/store', product: 'kawy', productType: ''},
    {id: 7, image: 'blueTea.jpg', page: '/store', product: 'herbaty', productType: 'niebieska'},
    {id: 8, image: 'gift.jpg', page: '/store', product: 'na prezent', productType: ''},
  ];

  const {setProductName, setProductType} = useContext(AppContext);
  const [activeSlide, setActiveSlide] = useState<SliderInterface>({
    id: 1,
    image: 'blackTea.jpg',
    page: '/store',
    product: 'herbaty',
    productType: 'czarna',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeSlide.id < 8) {
        const currentSlider = sliderData.find(item => item.id === activeSlide.id + 1);
        if (currentSlider) setActiveSlide(currentSlider);
      } else {
        const currentSlider = sliderData.find(item => item.id === 1);
        if (currentSlider) setActiveSlide(currentSlider);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  const goToCurrentPage = () => {
    setProductName(activeSlide.product);
    if (activeSlide.productType) setProductType(activeSlide.productType);
  };

  return (
    <div className={style.container}>
      <Link className={style.slider} to="/shop" onClick={goToCurrentPage}>
        <img
          src={`/images/slider/${activeSlide.image}`}
          alt={activeSlide.image}
        />
      </Link>
      <div className={style.sliderNav}>
        {sliderData.map(item => (
          <button
            key={item.id}
            className={`${style.sliderNavButton} ${item.id === activeSlide.id ? style.active : null}`}
            onClick={() => setActiveSlide(item)}
          ></button>
        ))}
      </div>
    </div>
  );
};
