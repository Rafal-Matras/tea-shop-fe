import { useState } from 'react';

import { ProfileUserDataType } from '../../types';

import { Input } from '../common/Input/Input';
import { Radio } from '../common/Radio/Radio';
import { Checkbox } from '../common/Checkbox/Checkbox';

import style from './UserProfile.module.css';

interface Props {
  userData: ProfileUserDataType;
  changeUserData: (name: string, value: string) => void;
  changeUserDataDelivery: (name: string, value: string) => void;
}

export const ProfileUserData = ({userData, changeUserData, changeUserDataDelivery}: Props) => {

  const [account, setAccount] = useState<string>(userData.accountType);
  const [deliveryActive, setDeliveryActive] = useState<boolean>(false);

  return (
    <div className={style.pageContainer}>
      <div className={style.profileDataBox}>
        <h2 className={style.title}>Dane kontaktowe</h2>
        <div className={style.inputBox}>
          <Input
            styles={{fontSize: '18px'}}
            type="text"
            name="email"
            displayedName="Email"
            value={userData.email}
            change={changeUserData}
            required={false}
          />
        </div>
      </div>
      <div className={style.profileDataBox}>
        <h2 className={style.title}>Dane do rachunku</h2>
        <Radio
          data={['Paragon', 'Faktura VAT']}
          name="Rachunek"
          account={account}
          setAccount={setAccount}
        />
        <div className={style.inputBox}>
          <Input
            styles={{fontSize: '18px'}}
            type="text"
            name="name"
            displayedName="Imię"
            value={userData.name}
            change={changeUserData}
            required={false}
          />
        </div>
        <div className={style.inputBox}>
          <Input
            styles={{fontSize: '18px'}}
            type="text"
            name="surName"
            displayedName="Nazwisko"
            value={userData.surName}
            change={changeUserData}
            required={false}
          />
        </div>
        <div className={style.inputBox}>
          <Input
            styles={{fontSize: '18px'}}
            type="text"
            name="companyName"
            displayedName="Nazwa firmy"
            value={userData.companyName}
            change={changeUserData}
            required={false}
          />
        </div>
        {account === 'Faktura VAT'
          ? <div className={style.inputBox}>
            <Input
              styles={{fontSize: '18px'}}
              type="text"
              name="nip"
              displayedName="NIP"
              value={userData.nip}
              change={changeUserData}
              required={false}
            />
          </div>
          : null
        }
        <div className={style.inputBox}>
          <Input
            styles={{fontSize: '18px'}}
            type="text"
            name="street"
            displayedName="Ulica"
            value={userData.street}
            change={changeUserData}
            required={false}
          />
        </div>
        <div className={style.inputBox}>
          <Input
            styles={{fontSize: '18px'}}
            type="text"
            name="homeNumber"
            displayedName="Nr. domu"
            value={userData.homeNumber}
            change={changeUserData}
            required={false}
          />
        </div>
        <div className={style.inputBox}>
          <Input
            styles={{fontSize: '18px'}}
            type="text"
            name="postCode"
            displayedName="Kod pocztowy"
            value={userData.postCode}
            change={changeUserData}
            required={false}
          />
        </div>
        <div className={style.inputBox}>
          <Input
            styles={{fontSize: '18px'}}
            type="text"
            name="city"
            displayedName="Miejscowość"
            value={userData.city}
            change={changeUserData}
            required={false}
          />
        </div>
        <div className={style.inputBox}>
          <Input
            styles={{fontSize: '18px'}}
            type="text"
            name="phone"
            displayedName="Telefon"
            value={userData.phone}
            change={changeUserData}
            required={false}
          />
        </div>
        <Checkbox
          name="Inne dane do wysyłki"
          active={deliveryActive}
          change={setDeliveryActive}
        />
        {deliveryActive
          ? <>
            <h2 className={style.title}>Dane do wysyłki</h2>
            <div className={style.inputBox}>
              <Input
                styles={{fontSize: '18px'}}
                type="text"
                name="deliveryName"
                displayedName="Imię"
                value={userData.delivery.deliveryName}
                change={changeUserDataDelivery}
                required={false}
              />
            </div>
            <div className={style.inputBox}>
              <Input
                styles={{fontSize: '18px'}}
                type="text"
                name="deliverySurName"
                displayedName="Nazwisko"
                value={userData.delivery.deliverySurName}
                change={changeUserDataDelivery}
                required={false}
              />
            </div>
            <div className={style.inputBox}>
              <Input
                styles={{fontSize: '18px'}}
                type="text"
                name="deliveryCompanyName"
                displayedName="Nazwa firmy"
                value={userData.delivery.deliveryCompanyName}
                change={changeUserDataDelivery}
                required={false}
              />
            </div>
            <div className={style.inputBox}>
              <Input
                styles={{fontSize: '18px'}}
                type="text"
                name="deliveryStreet"
                displayedName="Ulica"
                value={userData.delivery.deliveryStreet}
                change={changeUserDataDelivery}
                required={false}
              />
            </div>
            <div className={style.inputBox}>
              <Input
                styles={{fontSize: '18px'}}
                type="text"
                name="deliveryHomeNumber"
                displayedName="Nr. domu"
                value={userData.delivery.deliveryHomeNumber}
                change={changeUserDataDelivery}
                required={false}
              />
            </div>
            <div className={style.inputBox}>
              <Input
                styles={{fontSize: '18px'}}
                type="text"
                name="deliveryPostCode"
                displayedName="Kod pocztowy"
                value={userData.delivery.deliveryPostCode}
                change={changeUserDataDelivery}
                required={false}
              />
            </div>
            <div className={style.inputBox}>
              <Input
                styles={{fontSize: '18px'}}
                type="text"
                name="deliveryCity"
                displayedName="Miejscowość"
                value={userData.delivery.deliveryCity}
                change={changeUserDataDelivery}
                required={false}
              />
            </div>
          </>
          : null
        }
      </div>
      <button className={style.button}>Zapisz</button>
    </div>
  );
};