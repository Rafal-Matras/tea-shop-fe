import style from './Register.module.css';
import { UserRegistrationDataInterface } from '../../types';
import { Input } from '../common/Input/Input';
import { Radio } from '../common/Radio/Radio';
import { useState } from 'react';
import { Checkbox } from '../common/Checkbox/Checkbox';

interface Props {
  registrationData: UserRegistrationDataInterface;
  editRegistrationData: (name: string, value: string) => void;
  deliveryActive: boolean;
  setDeliveryActive: (name: boolean) => void;
}

export const AccountData = ({registrationData, editRegistrationData, deliveryActive, setDeliveryActive}: Props) => {

  const [account, setAccount] = useState<string>('Paragon');

  return (
    <div className={style.dataAccountBox}>
      <h2 className={style.title}>Dane do rachunku</h2>
      <Radio
        data={['Paragon', 'Faktura VAT']}
        name="Rachunek"
        account={account}
        setAccount={setAccount}
      />
      <div className={style.inputBox}>
        <Input
          type="text"
          name="name"
          value={registrationData.name}
          displayedName="Imię"
          change={editRegistrationData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="surName"
          value={registrationData.surName}
          displayedName="Nazwisko"
          change={editRegistrationData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="companyName"
          value={registrationData.companyName}
          displayedName="Nazwa firmy"
          change={editRegistrationData}
          required={false}
        />
      </div>
      {account === 'Faktura VAT'
        ? <div className={style.inputBox}>
          <Input
            type="text"
            name="nip"
            value={registrationData.nip}
            displayedName="Nip"
            change={editRegistrationData}
            required={false}
          />
        </div>
        : null
      }
      <div className={style.inputBox}>
        <Input
          type="text"
          name="street"
          value={registrationData.street}
          displayedName="Ulica"
          change={editRegistrationData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="homeNumber"
          value={registrationData.homeNumber}
          displayedName="Nr. domu"
          change={editRegistrationData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="postCode"
          value={registrationData.postCode}
          displayedName="Kod pocztowy"
          change={editRegistrationData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="city"
          value={registrationData.city}
          displayedName="Miejscowość"
          change={editRegistrationData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="phone"
          value={registrationData.phone}
          displayedName="Telefon"
          change={editRegistrationData}
          required={false}
        />
      </div>
      <Checkbox
        name="Inne dane do wysyłki"
        active={deliveryActive}
        change={setDeliveryActive}
      />
    </div>
  );
};