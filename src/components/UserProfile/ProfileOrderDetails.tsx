import { Link } from 'react-router-dom';

import { ActivePageType, HistoryOrdersInterface } from '../../types';

import style from './UserProfile.module.css';
import { ArrowLeftIcon } from '../common/SvgIcons/ArrowLeftIcon';

interface Props {
  orderList: HistoryOrdersInterface;
  setActivePage: (name: ActivePageType) => void;
}

export const ProfileOrderDetails = ({orderList, setActivePage}: Props) => {

  return (
    <>
      <h2 className={style.title}>Zamówienie</h2>
      <div className={style.historyOrderBoxData}>
        <p className={style.text}>Numer: <span>{orderList.orderNumber}</span></p>
        <p className={style.text}>Status: <span>{orderList.status}</span></p>
        <p className={style.text}>Data: <span>{orderList.data}</span></p>
      </div>
      <h2 className={style.title}>Dane do rachunku</h2>
      <div className={style.historyOrderBoxData}>
        <p className={style.text}>Rachunek: <span>{orderList.dataToAccount.accountType}</span></p>
        <p className={style.text}>Imię: <span>{orderList.dataToAccount.name}</span></p>
        <p className={style.text}>Nazwisko: <span>{orderList.dataToAccount.surName}</span></p>
        <p className={style.text}>Ulica: <span>{orderList.dataToAccount.street}</span></p>
        {orderList.dataToAccount.companyName
          ? <p className={style.text}>Nazwa firmy: <span>{orderList.dataToAccount.companyName}</span></p>
          : null}
        {orderList.dataToAccount.nip
          ? <p className={style.text}>Nip: <span>{orderList.dataToAccount.nip}</span></p>
          : null}
        <p className={style.text}>Nr. domu: <span>{orderList.dataToAccount.homeNumber}</span></p>
        <p className={style.text}>Kod pocztowy: <span>{orderList.dataToAccount.postCode}</span></p>
        <p className={style.text}>Miejscowość: <span>{orderList.dataToAccount.city}</span></p>
        <p className={style.text}>Telefon: <span>{orderList.dataToAccount.phone}</span></p>
      </div>
      <h2 className={style.title}>Produkty</h2>
      <div className={style.historyOrderBoxProducts}>
        {orderList.order.map(item => (
          <div className={style.orderItemBox} key={item.productId}>
            <Link className={style.orderItemBoxLinkImage} to={`/product/${item.productId}`}>
              <img src={`/images/products/${item.image}`} alt={`zdjęcie produktu ${item.name}`}/>
            </Link>
            <Link className={style.orderItemBoxLinkName} to={`/product/${item.productId}`}>
              {item.name}
            </Link>
            <p className={style.orderItemBoxText}>{item.amount}</p>
            <p className={style.orderItemBoxText}>{item.price} zł</p>
          </div>
        ))}
        <p className={style.orderItemBoxTextDelivery}>Dostawa: <span>{orderList.deliveryPrice} zł</span></p>
        <p className={style.orderItemBoxTextSum}>Razem: <span>{orderList.price} zł</span></p>
      </div>
      <button
        className={style.buttonBack}
        onClick={() => setActivePage('history')}
      ><ArrowLeftIcon className={style.arrowIcon}/> Powrót
      </button>
    </>
  );
};