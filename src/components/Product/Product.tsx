import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ProductInterface } from '../../types';

import { AppContext } from '../../context/AppContext';

import { useConvertPriceToString } from '../../hooks/useConvertPriceToString';
import { useFirstLetterBig } from '../../hooks/useFirstLetterBig';

import { OrderDetails } from './OrderDetails';
import { AddedToBasket } from './AddedToBasket';

import style from './Product.module.css';

import { productDefault, exemplaryProduct } from '../../assets/allProducts';

export const Product = () => {

  const {setProductType} = useContext(AppContext);
  const [product, setProduct] = useState<ProductInterface>(productDefault);
  const [packSize, setPackSize] = useState<number>(1);
  const [quantityOfProduct, setQuantityOfProducts] = useState<number>(1);
  const [addToBasket, setAddToBasket] = useState<boolean>(false);

  useEffect(() => {

    setProduct(exemplaryProduct);

  }, []);

  return (
    <div className={style.container}>
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
                {useFirstLetterBig(product.category)}&nbsp;{useFirstLetterBig(item)}
              </Link>
            ))
            : ''
          }
        </div>
      </div>
      <img className={style.image} src={`/images/products/${product.image}`} alt=""/>
      <div className={style.productDetail}>
        <div className={style.priceAndOrderBox}>
          <div className={style.priceBox}>
            <p className={style.price}>{product.promo
              ? useConvertPriceToString(Math.ceil(product.promo * packSize * quantityOfProduct * 100) / 100)
              : useConvertPriceToString(Math.ceil(product.price * packSize * quantityOfProduct * 100) / 100)
            } zł&nbsp;
            </p>
            <p
              className={style.numberOfUnits}
            >/ {product.numberOfUnits * packSize * quantityOfProduct} {product.unit}
            </p>
          </div>
          <OrderDetails
            numberOfUnits={product.numberOfUnits}
            price={product.price}
            packSize={packSize}
            setPackSize={setPackSize}
            quantityOfProduct={quantityOfProduct}
            setQuantityOfProducts={setQuantityOfProducts}
            unit={product.unit}
            state={product.state}
            id={product.id}
            setAddToBasket={setAddToBasket}
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
      {addToBasket
        ? <AddedToBasket
          image={product.image}
          name={product.name}
          category={product.category}
          type={product.type}
          price={product.price * packSize * quantityOfProduct}
          unit={product.numberOfUnits * packSize * quantityOfProduct + product.unit}
          setAddToBasket={setAddToBasket}
        />
        : null
      }
    </div>
  );
};