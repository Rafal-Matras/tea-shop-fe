import style from './Register.module.css';
import { Input } from '../common/Input/Input';
import { UserDeliveryDataInterface } from '../../types';

interface Props {
  deliveryData: UserDeliveryDataInterface;
  editDeliveryData: (name: string, value: string) => void;
}

export const DeliveryData = ({deliveryData, editDeliveryData}: Props) => {

  return (
    <div className={style.dataDeliveryBox}>
      <h2 className={style.title}>Dane do wysyłki</h2>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="name"
          value={deliveryData.name}
          displayedName="Imię"
          change={editDeliveryData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="surName"
          value={deliveryData.surName}
          displayedName="Nazwisko"
          change={editDeliveryData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="companyName"
          value={deliveryData.companyName}
          displayedName="Nazwa firmy"
          change={editDeliveryData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="street"
          value={deliveryData.street}
          displayedName="Ulica"
          change={editDeliveryData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="homeNumber"
          value={deliveryData.homeNumber}
          displayedName="Nr. domu"
          change={editDeliveryData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="postCode"
          value={deliveryData.postCode}
          displayedName="Kod pocztowy"
          change={editDeliveryData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="city"
          value={deliveryData.city}
          displayedName="Miejscowość"
          change={editDeliveryData}
          required={false}
        />
      </div>
    </div>
  );
};