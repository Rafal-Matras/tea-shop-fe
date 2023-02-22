import { Slider } from './Slider/Slider';
import { ProductsOnFirstPage } from './ProductsOnFirstPage/ProductsOnFirstPage';
import { TypesOfTeas } from './TypesOfTeas/TypesOfTeas';
import { TeaShopDescryption } from './TeaShopDescription/TeaShopDescryption';

import style from './Home.module.css';

export const Home = () => {

  return (
    <main className={style.container}>
      <Slider/>
      <ProductsOnFirstPage/>
      <TypesOfTeas/>
      <TeaShopDescryption/>
    </main>
  );
};