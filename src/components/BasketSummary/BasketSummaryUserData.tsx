import style from './BasketSummary.module.css';
import { UseUserContext } from '../../context/UserContext';

export const BasketSummaryUserData = () => {

  const {user} = UseUserContext();

  return (
    <>
      <h2 className={style.sectionTitle}>Dane kontaktowe</h2>
      <div className={style.section}>
        <p className={style.sectionText}>E-mail: <span>{user.email}</span></p>
      </div>
      <h2
        className={style.sectionTitle}>{user.otherDeliveryAddress === 0 ? 'Dane do rachunku i dostawy' : 'Dane do rachunku'}
      </h2>
      <div className={style.section}>
        <p className={style.sectionText}>Rachunek: <span>{user.documentType}</span></p>
        <p className={style.sectionText}>Imię: <span>{user.name}</span></p>
        <p className={style.sectionText}>Nazwisko: <span>{user.surName}</span></p>
        {user.companyName !== '' ? <p className={style.sectionText}>Firma: <span>{user.companyName}</span></p> : null}
        {user.nip !== '' ? <p className={style.sectionText}>NIP: <span>{user.nip}</span></p> : null}
        <p className={style.sectionText}>Ulica: <span>{user.street}</span></p>
        {user.flatNumber ? <p className={style.sectionText}>Nr lokalu: <span>{user.flatNumber}</span></p> : null}
        <p className={style.sectionText}>Kod pocztowy: <span>{user.postCode}</span></p>
        <p className={style.sectionText}>Miejscowość: <span>{user.city}</span></p>
        <p className={style.sectionText}>Telefon: <span>{user.phone}</span></p>
      </div>
      {user.otherDeliveryAddress === 1
        ? <>
          <h2 className={style.sectionTitle}>Dane do wysyłki</h2>
          <div className={style.section}>
            <p className={style.sectionText}>Imię: <span>{user.delivery.deliveryName}</span></p>
            <p className={style.sectionText}>Nazwisko: <span>{user.delivery.deliverySurName}</span></p>
            <p className={style.sectionText}>Ulica: <span>{user.delivery.deliveryStreet}</span></p>
            <p className={style.sectionText}>Nr domu: <span>{user.delivery.deliveryFlatNumber}</span></p>
            <p className={style.sectionText}>Kod pocztowy: <span>{user.delivery.deliveryPostCode}</span></p>
            <p className={style.sectionText}>Miejscowość: <span>{user.delivery.deliveryCity}</span></p>
          </div>
        </>
        : null
      }
    </>
  );
};