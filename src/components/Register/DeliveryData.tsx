import { UserRegistrationDataType } from '../../types';

import { Input } from '../common/Input/Input';

import style from './Register.module.css';

interface Props {
  registrationData: UserRegistrationDataType;
  editRegistrationData: (name: string, value: string) => void;
}

export const DeliveryData = ({registrationData, editRegistrationData}: Props) => {

  return (
    <div className={style.dataDeliveryBox}>
      <h2 className={style.title}>Dane do wysyłki</h2>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliveryName"
          value={registrationData.delivery.deliveryName}
          displayedName="Imię"
          change={editRegistrationData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliverySurName"
          value={registrationData.delivery.deliverySurName}
          displayedName="Nazwisko"
          change={editRegistrationData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliveryCompanyName"
          value={registrationData.delivery.deliveryCompanyName}
          displayedName="Nazwa firmy"
          change={editRegistrationData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliveryStreet"
          value={registrationData.delivery.deliveryStreet}
          displayedName="Ulica"
          change={editRegistrationData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliveryHomeNumber"
          value={registrationData.delivery.deliveryHomeNumber}
          displayedName="Nr. domu"
          change={editRegistrationData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliveryPostCode"
          value={registrationData.delivery.deliveryPostCode}
          displayedName="Kod pocztowy"
          change={editRegistrationData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliveryCity"
          value={registrationData.delivery.deliveryCity}
          displayedName="Miejscowość"
          change={editRegistrationData}
          required={false}
        />
      </div>
    </div>
  );
};