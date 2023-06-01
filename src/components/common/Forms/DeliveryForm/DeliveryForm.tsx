import { DeliveryRegisterInterface } from '../../../../types';

import { Input } from '../../Input/Input';

import style from './DeliveryForm.module.css';

interface Props {
  deliveryData: DeliveryRegisterInterface;
  editDeliveryData: (name: string, value: string) => void;
}

export const DeliveryForm = ({deliveryData, editDeliveryData}: Props) => {

  return (
    <form className={style.form}>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliveryName"
          value={deliveryData.deliveryName}
          displayedName="Imię"
          change={editDeliveryData}
          required={true}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliverySurName"
          value={deliveryData.deliverySurName}
          displayedName="Nazwisko"
          change={editDeliveryData}
          required={true}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliveryCompanyName"
          value={deliveryData.deliveryCompanyName}
          displayedName="Nazwa firmy"
          change={editDeliveryData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliveryStreet"
          value={deliveryData.deliveryStreet}
          displayedName="Ulica"
          change={editDeliveryData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliveryFlatNumber"
          value={deliveryData.deliveryFlatNumber}
          displayedName="Nr. lokalu"
          change={editDeliveryData}
          required={true}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliveryPostCode"
          value={deliveryData.deliveryPostCode}
          displayedName="Kod pocztowy"
          change={editDeliveryData}
          required={true}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="deliveryCity"
          value={deliveryData.deliveryCity}
          displayedName="Miejscowość"
          change={editDeliveryData}
          required={true}
        />
      </div>
    </form>
  );
};