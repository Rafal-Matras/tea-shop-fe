import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ProductInterface } from '../../types';

import { UseProductContext } from '../../context/ProductContext';

import { useConvertPriceToString } from '../../hooks/useConvertPriceToString';
import { useFirstLetterBig } from '../../hooks/useFirstLetterBig';

import { config } from '../../config/config';

import { OrderDetails } from './OrderDetails';
import { PopupAddedToBasket } from '../common/Popups/PopupAddedToBasket/PopupAddedToBasket';

import { productDefault } from '../../assets/defaultData';

import style from './Product.module.css';
import { Spinner } from '../common/Spinner/Spinner';

export const Product = () => {

  const {setProductType} = UseProductContext();
  const [product, setProduct] = useState<ProductInterface>(productDefault);
  const [packSize, setPackSize] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [addedToBasket, setAddedToBasket] = useState<boolean>(false);
  const {id} = useParams();


  useEffect(() => {
    (async () => {
      const response = await fetch(`${config.URL}shop/product/${id}`);
      if (!response.ok) return;
      const data = await response.json();
      setProduct(data);
    })();
  }, []);

  const categoryText = () => {
    if (product.category === 'herbaty') return 'Herbata';
    if (product.category === 'kawy') return 'Kawa';
    if (product.category === 'zioła') return 'Zioła';
    if (product.category === 'akcesoria') return 'Akcesoria';
  };

  return (
    product.id === ''
      ? <Spinner/>
      : <div className={style.container}>
        <div className={style.titleBox}>
          <h1 className={style.title}>{product.name}</h1>
          <div className={style.categoryTypeBox}>
            {product.type?.length !== 0
              ? product.type?.map(item => (
                <Link
                  className={style.categoryType}
                  key={item}
                  to="/shop"
                  onClick={() => setProductType(item)}
                >
                  {categoryText()}&nbsp;{useFirstLetterBig(item)}
                </Link>
              ))
              : null
            }
          </div>
        </div>
        <img className={style.image} src={`/images/products/${product.category}/${product.image}`} alt=""/>
        <div className={style.productDetail}>
          <div className={style.priceAndOrderBox}>
            <div className={style.priceBox}>
              <p className={style.price}>{product.promo
                ? useConvertPriceToString(product.promo * packSize * count)
                : useConvertPriceToString(product.price * packSize * count)
              } zł&nbsp;
              </p>
              <p className={style.numberOfUnits}>
                / {product.numberOfUnits * packSize * count} {product.unit}
              </p>
            </div>
            <OrderDetails
              numberOfUnits={product.numberOfUnits}
              packSize={packSize}
              setPackSize={setPackSize}
              count={count}
              setCount={setCount}
              unit={product.unit}
              state={product.state}
              id={product.id}
              setAddedToBasket={setAddedToBasket}
            />
          </div>
          <p className={style.productDetailTitle}>{product.name}</p>
          <p className={style.productDetailDescription}>{product.description}</p>
          <p
            className={`${product.ingredients ? style.productDetailInfo : style.none}`}
          ><strong>Składniki: </strong>{product.ingredients}
          </p>
          <p
            className={`${product.countryOrigin ? style.productDetailInfo : style.none}`}
          ><strong>Kraj pochodzenia: </strong>{product.countryOrigin}
          </p>
          <div className={`${product.amountBrew ? style.brewBox : style.none}`}>
            <div className={style.brew}>
              <img className={style.brewImage} src="/images/icons/icoAmount.png" alt=""/>
              <p className={style.brewTitle}>Ilość herbaty</p>
              <p className={style.brewText}>{product.amountBrew}</p>
            </div>
            <div className={style.brew}>
              <img className={style.brewImage} src="/images/icons/icoTemp.png" alt=""/>
              <p className={style.brewTitle}>Temperatura</p>
              <p className={style.brewText}>{product.temperatureBrew} ºC</p>
            </div>
            <div className={style.brew}>
              <img className={style.brewImage} src="/images/icons/icoTime.png" alt=""/>
              <p className={style.brewTitle}>Czas</p>
              <p className={style.brewText}>{product.timeBrew}</p>
            </div>
            <div className={style.brew}>
              <img className={style.brewImage} src="/images/icons/icoTimes.png" alt=""/>
              <p className={style.brewTitle}>Ilość zaparzeń</p>
              <p className={style.brewText}>{product.numberBrews}</p>
            </div>
          </div>
          <p
            className={`${product.howToBrew ? style.productDetailInfo : style.none}`}
          ><strong>Jak zaparzać </strong><br/>{product.howToBrew}
          </p>
          <p
            className={`${product.coffeeSpecies ? style.productDetailInfo : style.none}`}
          ><strong>Gatunek: </strong>{product.coffeeSpecies}
          </p>
          <p
            className={`${product.size ? style.productDetailInfo : style.none}`}
          ><strong>Wymiary: </strong>{product.size}
          </p>
          <p
            className={`${product.wayStore ? style.productDetailInfo : style.none}`}
          ><strong>Sposób przehowywania </strong><br/>{product.wayStore}
          </p>
        </div>
        {addedToBasket
          ? <PopupAddedToBasket
            image={product.image}
            name={product.name}
            category={product.category}
            type={product.type}
            price={product.price * packSize * count}
            unit={product.numberOfUnits * packSize * count + product.unit}
            setAddedToBasket={setAddedToBasket}
          />
          : null
        }
      </div>
  );
};
