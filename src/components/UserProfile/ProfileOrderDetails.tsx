import { Link } from 'react-router-dom';

import { ActivePageType, HistoryOrdersInterface, OrderListDetails } from '../../types';

import { ArrowLeftIcon } from '../common/SvgIcons/ArrowLeftIcon';

import style from './UserProfile.module.css';

interface Props {
  orderList: HistoryOrdersInterface;
  setActivePage: (name: ActivePageType) => void;
}

export const ProfileOrderDetails = ({orderList, setActivePage}: Props) => {

  const products: OrderListDetails[] = JSON.parse(orderList.details.orderList);

  return (
    <>
      <h2 className={style.title}>Zamówienie</h2>
      <div className={style.historyOrderBoxData}>
        <p className={style.text}>Numer zamówienia: <span>{orderList.orderNumber}</span></p>
        <p className={style.text}>Status: <span>{orderList.status}</span></p>
        <p className={style.text}>Data: <span>{orderList.createdAd}</span></p>
        {orderList.trackingNumber
          ? <p className={style.text}>Numer Przesyłki: <span>{orderList.trackingNumber}</span></p>
          : null}
      </div>
      <h2 className={style.title}>Dane do rachunku</h2>
      <div className={style.historyOrderBoxData}>
        <p className={style.text}>Rachunek: <span>{orderList.details.documentType}</span></p>
        <p className={style.text}>Imię: <span>{orderList.details.name}</span></p>
        <p className={style.text}>Nazwisko: <span>{orderList.details.surName}</span></p>
        <p className={style.text}>Ulica: <span>{orderList.details.street}</span></p>
        {orderList.details.companyName
          ? <p className={style.text}>Nazwa firmy: <span>{orderList.details.companyName}</span></p>
          : null}
        {orderList.details.nip
          ? <p className={style.text}>Nip: <span>{orderList.details.nip}</span></p>
          : null}
        {orderList.details.flatNumber
          ? <p className={style.text}>Nr. domu: <span>{orderList.details.flatNumber}</span></p>
          : null}
        <p className={style.text}>Kod pocztowy: <span>{orderList.details.postCode}</span></p>
        <p className={style.text}>Miejscowość: <span>{orderList.details.city}</span></p>
        <p className={style.text}>Telefon: <span>{orderList.details.phone}</span></p>
      </div>
      <h2 className={style.title}>Produkty</h2>
      <div className={style.historyOrderBoxProducts}>
        {products.map(item => (
          <div className={style.orderItemBox} key={item.image + item.count}>
            <Link className={style.orderItemBoxLinkImage} to={`/product/${item.id}`}>
              <img src={`/images/products/${item.category}/${item.image}`} alt={`zdjęcie produktu ${item.name}`}/>
            </Link>
            <p className={style.orderItemBoxName}>{item.name}</p>
            <p className={style.orderItemBoxText}>{item.count} /{item.unit}</p>
            <p className={style.orderItemBoxText}>{item.price} zł</p>
          </div>
        ))}
        <p className={style.orderItemBoxTextDelivery}>Dostawa: <span>{orderList.deliveryCost} zł</span></p>
        <p className={style.orderItemBoxTextSum}>Razem: <span>{orderList.price + orderList.deliveryCost} zł</span></p>
      </div>
      <button
        className={style.buttonBack}
        onClick={() => setActivePage('history')}
      ><ArrowLeftIcon className={style.arrowIcon}/> Powrót
      </button>
    </>
  );
};