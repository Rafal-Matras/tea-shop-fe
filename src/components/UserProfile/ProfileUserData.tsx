import { useState } from 'react';

import { UserProfileType } from '../../types';

import { Input } from '../common/Input/Input';
import { Checkbox } from '../common/Checkbox/Checkbox';
import { DataForm } from '../common/Forms/DataForm/DataForm';
import { DeliveryForm } from '../common/Forms/DeliveryForm/DeliveryForm';

import style from './UserProfile.module.css';

interface Props {
  userData: UserProfileType;
  changeUserData: (name: string, value: string) => void;
  changeUserDataDelivery: (name: string, value: string) => void;
}

export const ProfileUserData = ({userData, changeUserData, changeUserDataDelivery}: Props) => {

  const [deliveryActive, setDeliveryActive] = useState<boolean>(false);

  return (
    <div className={style.pageContainer}>
      <div className={style.profileDataBox}>
        <h2 className={style.title}>Dane kontaktowe</h2>
        <div className={style.inputBox}>
          <Input
            type="text"
            name="email"
            displayedName="Email"
            value={userData.email}
            change={changeUserData}
            required={false}
          />
        </div>
      </div>
        <h2 className={style.title}>Dane do rachunku</h2>
        <DataForm
          registrationData={userData}
          editRegistrationData={changeUserData}
        />
        <Checkbox
          children="Inne dane do wysyłki"
          active={deliveryActive}
          change={setDeliveryActive}
        />
      {deliveryActive
        ? <>
          <h2 className={style.title}>Dane do wysyłki</h2>
          <DeliveryForm
            registrationData={userData}
            editRegistrationDataDelivery={changeUserDataDelivery}
          />
        </>
        : null
      }
      <button className={style.button}>Zapisz</button>
    </div>
  );
};