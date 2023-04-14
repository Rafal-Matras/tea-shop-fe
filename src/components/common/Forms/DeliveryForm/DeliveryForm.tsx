import { UserProfileType } from '../../../../types';

import { Input } from '../../Input/Input';

import style from './DeliveryForm.module.css';

interface Props {
  registrationData: UserProfileType;
  editRegistrationDataDelivery: (name: string, value: string) => void;
}

export const DeliveryForm = ({registrationData, editRegistrationDataDelivery}: Props) => {

  return (
    <div className={style.form}>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliveryName"
          value={registrationData.delivery.deliveryName}
          displayedName="Imię"
          change={editRegistrationDataDelivery}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliverySurName"
          value={registrationData.delivery.deliverySurName}
          displayedName="Nazwisko"
          change={editRegistrationDataDelivery}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliveryStreet"
          value={registrationData.delivery.deliveryStreet}
          displayedName="Ulica"
          change={editRegistrationDataDelivery}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliveryHomeNumber"
          value={registrationData.delivery.deliveryHomeNumber}
          displayedName="Nr. domu"
          change={editRegistrationDataDelivery}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliveryPostCode"
          value={registrationData.delivery.deliveryPostCode}
          displayedName="Kod pocztowy"
          change={editRegistrationDataDelivery}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliveryCity"
          value={registrationData.delivery.deliveryCity}
          displayedName="Miejscowość"
          change={editRegistrationDataDelivery}
          required={false}
        />
      </div>
    </div>
  );
};