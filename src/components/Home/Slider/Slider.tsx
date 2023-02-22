import { useEffect, useState } from 'react';

import style from './Slider.module.css';

export const Slider = () => {

  const [activeImage, setActiveImage] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeImage < 7) {
        setActiveImage(prev => prev + 1);
      } else {
        setActiveImage(1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeImage]);

  return (
    <div className={style.container}>
      <div className={style.slider}>
        <img src={`/images/slider/image_${activeImage}.jpg`} alt=""/>
        <div className={style.sliderNav}>
          <button
            className={`${style.sliderNavButton} ${activeImage === 1 ? style.active : null}`}
            onClick={() => setActiveImage(1)}>
          </button>
          <button
            className={`${style.sliderNavButton} ${activeImage === 2 ? style.active : null}`}
            onClick={() => setActiveImage(2)}>
          </button>
          <button
            className={`${style.sliderNavButton} ${activeImage === 3 ? style.active : null}`}
            onClick={() => setActiveImage(3)}>
          </button>
          <button
            className={`${style.sliderNavButton} ${activeImage === 4 ? style.active : null}`}
            onClick={() => setActiveImage(4)}>
          </button>
          <button
            className={`${style.sliderNavButton} ${activeImage === 5 ? style.active : null}`}
            onClick={() => setActiveImage(5)}>
          </button>
          <button
            className={`${style.sliderNavButton} ${activeImage === 6 ? style.active : null}`}
            onClick={() => setActiveImage(6)}>
          </button>
          <button
            className={`${style.sliderNavButton} ${activeImage === 7 ? style.active : null}`}
            onClick={() => setActiveImage(7)}>
          </button>
        </div>
      </div>
    </div>
  );
};