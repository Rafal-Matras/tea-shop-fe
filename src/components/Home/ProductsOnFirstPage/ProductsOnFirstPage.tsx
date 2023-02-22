import { useEffect, useState } from 'react';

import { ProductsListInterface } from '../../../types';

import { OneProductInList } from '../../OneProductInList/OneProductInList';

import style from './ProductsOnFirstPage.module.css';

export const ProductsOnFirstPage = () => {

  const productDefault:ProductsListInterface[] = [
    {id:'123',name:'Earl Grey Rainbow',image:'eargreyrainbow',price:10.99,numberOfUnits:'50',unit:'g',state:42,promo:null},
    {id:'124',name:'Wiśnia i Rum',image:'wiśniairum',price:9.95,numberOfUnits:'50',unit:'g',state:48,promo:9.45},
    {id:'125',name:'Kawa Snickers',image:'kawasnickers',price:11.70,numberOfUnits:'100',unit:'g',state:20,promo:null},
    {id:'126',name:'Duch Poranka',image:'duchporanka',price:9.39,numberOfUnits:'50',unit:'g',state:36,promo:null},
    {id:'127',name:'Pomarańcze w czekoladzie',image:'pomaranczawczekoladzie',price:11.70,numberOfUnits:'100',unit:'g',state:42,promo:null},
    {id:'128',name:'Łyk Szczęścia',image:'łykszczęścia',price:9.90,numberOfUnits:'50',unit:'g',state:100,promo:null},
    {id:'129',name:'Mango Tango Super Owocowa',image:'mangotangosuperowocowa',price:11.10,numberOfUnits:'50',unit:'g',state:70,promo:null},
    {id:'130',name:'Odporność',image:'odporność',price:9.90,numberOfUnits:'50',unit:'g',state:90,promo:null},
    {id:'131',name:'Samo Zdrowie',image:'samozdrowie',price:11.10,numberOfUnits:'50',unit:'g',state:120,promo:9.99},
    {id:'132',name:'Irish Whisky',image:'irishwhisky',price:11.70,numberOfUnits:'100',unit:'g',state:7,promo:null},
    {id:'133',name:'Zaparzacz do herbaty silikonowy SILICO TRUSKAWKA',image:'zaparzaczdoherbatysilikonowysilicotruskawka',price:10.90,numberOfUnits:'1',unit:'szt',state:21,promo:null},
    {id:'134',name:'Kwitnąca bombonierka - Czarna',image:'kwitnącabombonierka-czarna',price:55.90,numberOfUnits:'1',unit:'szt',state:0,promo:null},
  ]

  const [products, setProducts] = useState<ProductsListInterface[]>([]);

  useEffect(() => {


    setProducts(productDefault)
  }, []);

  const listItems = products.map(item => <OneProductInList key={item.id} item={item}/>)
  
  return (
    <section className={style.container}>
      {listItems}
    </section>
  );
};