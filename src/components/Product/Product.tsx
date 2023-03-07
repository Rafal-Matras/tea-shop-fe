import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Category, ProductInterface } from '../../types';

import { AppContext } from '../../context/AppContext';

import { useConvertPriceToString } from '../../hooks/useConvertPriceToString';
import { useFirstLetterBig } from '../../hooks/useFirstLetterBig';

import { OrderDetails } from './OrderDetails';
import { AddedToBasket } from './AddedToBasket';

import style from './Product.module.css';

export const Product = () => {

  const {setProductType, setProductName} = useContext(AppContext);
  const [product, setProduct] = useState<ProductInterface>({
    id: '123',
    name: 'Earl Grey Rainbow',
    category: Category.tea,
    type: ['czarna', 'ear grey'],
    image: 'eargreyrainbow.webp',
    price: 10.99,
    promo: null,
    numberOfUnits: 50,
    unit: 'g',
    state: 8000,
    forGift: null,
    onHomePage: 1,
    new: null,
    description: 'Herbata Earl Grey Rainbow to barwna i smaczna czarna herbata o wyjątkowym, owocowym i przyjemnym smaku i aromacie. Niezwykłe walory smakowe i aromatyczne są zasługą bławatka, szafranu, płatków słonecznika i róży. Herbata wyjątkowa w smaku o nietuzinkowym wyglądzie. Polecana sympatykom Earl Grey’a.',
    ingredients: 'Herbata czarna, bławatek, nagietek, dziki szafran, płatki róży, aromat',
    countryOrigin: 'Sri Lanka',
    amountBrew: 'pół łyżeczki / filiżanka',
    temperatureBrew: '95',
    timeBrew: '2-3 min',
    numberBrews: 'raz',
    wayStore: 'Przechowywać w zamkniętym opakowaniu, w suchym i chłodnym miejscu',
    coffeeSpecies: null,
    howToBrew: null,
    size: null,
  });

  const {
    id,
    name,
    category,
    type,
    image,
    price,
    promo,
    numberOfUnits,
    unit,
    state,
    description,
    ingredients,
    countryOrigin,
    amountBrew,
    temperatureBrew,
    timeBrew,
    numberBrews,
    wayStore,
    coffeeSpecies,
    howToBrew,
    size,
  } = product;

  const [packSize, setPackSize] = useState<number>(1);
  const [quantityOfProduct, setQuantityOfProducts] = useState<number>(1);
  const [addToBasket, setAddToBasket] = useState<boolean>(false);

  // useEffect(()=>{
  //
  //
  //   setProduct()
  // },[])

  const categoryType = type?.map((item, index) => (
    <Link
      className={style.categoryType}
      key={item}
      to="/shop"
      onClick={() => setProductType(item)}
    >
      {useFirstLetterBig(category)}&nbsp;{useFirstLetterBig(item)}
      {index < type?.length - 1 ? <span> ,</span> : null}
    </Link>
  ));

  return (
    <div className={style.container}>
      <div className={style.titleBox}>
        <h1 className={style.title}>{name}</h1>
        <div className={style.categoryTypeBox}>
          {type
            ? categoryType
            : <Link
              className={style.categoryType}
              to="/shop"
              onClick={() => setProductName(category)}
            >{useFirstLetterBig(category)}
            </Link>
          }
        </div>
      </div>
      <img className={style.image} src={`/images/products/${image}`} alt=""/>
      <div className={style.productDetail}>
        <div className={style.priceAndOrderBox}>
          <div className={style.priceBox}>
            <p className={style.price}>{promo
              ? useConvertPriceToString(Math.ceil(promo * packSize * quantityOfProduct * 100) / 100)
              : useConvertPriceToString(Math.ceil(price * packSize * quantityOfProduct * 100) / 100)
            } zł&nbsp;
            </p>
            <p
              className={style.numberOfUnits}
            >/ {numberOfUnits * packSize * quantityOfProduct} {unit}
            </p>
          </div>
          <OrderDetails
            numberOfUnits={numberOfUnits}
            price={price}
            packSize={packSize}
            setPackSize={setPackSize}
            quantityOfProduct={quantityOfProduct}
            setQuantityOfProducts={setQuantityOfProducts}
            unit={unit}
            state={state}
            id={id}
            setAddToBasket={setAddToBasket}
          />
        </div>
        <p className={style.productDetailTitle}>{name}</p>
        <p className={style.productDetailDescription}>{description}</p>
        <p
          className={`${ingredients ? style.productDetailInfo : style.none}`}
        ><strong>Składniki: </strong>{ingredients}
        </p>
        <p
          className={`${countryOrigin ? style.productDetailInfo : style.none}`}
        ><strong>Kraj pochodzenia: </strong>{countryOrigin}
        </p>
        <div className={`${amountBrew ? style.brewBox : style.none}`}>
          <div className={style.brew}>
            <img className={style.brewImage} src="/images/icons/icoAmount.png" alt=""/>
            <p className={style.brewTitle}>Ilość herbaty</p>
            <p className={style.brewText}>{amountBrew}</p>
          </div>
          <div className={style.brew}>
            <img className={style.brewImage} src="/images/icons/icoTemp.png" alt=""/>
            <p className={style.brewTitle}>Temperatura</p>
            <p className={style.brewText}>{temperatureBrew} ºC</p>
          </div>
          <div className={style.brew}>
            <img className={style.brewImage} src="/images/icons/icoTime.png" alt=""/>
            <p className={style.brewTitle}>Czas</p>
            <p className={style.brewText}>{timeBrew}</p>
          </div>
          <div className={style.brew}>
            <img className={style.brewImage} src="/images/icons/icoTimes.png" alt=""/>
            <p className={style.brewTitle}>Ilość zaparzeń</p>
            <p className={style.brewText}>{numberBrews}</p>
          </div>
        </div>
        <p
          className={`${howToBrew ? style.productDetailInfo : style.none}`}
        ><strong>Jak zaparzać </strong><br/>{howToBrew}
        </p>
        <p
          className={`${coffeeSpecies ? style.productDetailInfo : style.none}`}
        ><strong>Gatunek: </strong>{coffeeSpecies}
        </p>
        <p
          className={`${size ? style.productDetailInfo : style.none}`}
        ><strong>Wymiary: </strong>{size}
        </p>
        <p
          className={`${wayStore ? style.productDetailInfo : style.none}`}
        ><strong>Sposób przehowywania </strong><br/>{wayStore}
        </p>
      </div>
      {addToBasket
        ? <AddedToBasket
          image={image}
          name={name}
          category={category}
          type={type}
          price={price * packSize * quantityOfProduct}
          unit={numberOfUnits * packSize * quantityOfProduct + unit}
          setAddToBasket={setAddToBasket}
        />
        : null
      }
    </div>
  );
};