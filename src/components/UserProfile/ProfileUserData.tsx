import { useState } from 'react';

import { UserInterface } from '../../types';

import { config } from '../../config/config';

import { Input } from '../common/Input/Input';
import { Checkbox } from '../common/Checkbox/Checkbox';
import { DataForm } from '../common/Forms/DataForm/DataForm';
import { DeliveryForm } from '../common/Forms/DeliveryForm/DeliveryForm';

import style from './UserProfile.module.css';

interface Props {
  userData: UserInterface;
  changeUserData: (name: string, value: string | number) => void;
  changeUserDataDelivery: (name: string, value: string) => void;
  handleSave: () => Promise<void>;
}

export const ProfileUserData = ({userData, changeUserData, changeUserDataDelivery, handleSave}: Props) => {

  const checkEmail = async (email: string) => {
    const response = await fetch(`${config.URL}user/is-in-database/${email}`);
    return response.json();
  };

  const [accept, setAccept] = useState<0 | 1>(0);

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
            checkEmail={checkEmail}
            required={true}
          />
        </div>
      </div>
      <h2 className={style.title}>Dane do rachunku</h2>
      <DataForm
        userData={userData}
        editUserData={changeUserData}
      />
      <Checkbox
        children="Inne dane do wysyłki"
        active={userData.otherDeliveryAddress}
        change={setAccept}
      />
      {accept
        ? <>
          <h2 className={style.title}>Dane do wysyłki</h2>
          <DeliveryForm
            deliveryData={userData.delivery}
            editDeliveryData={changeUserDataDelivery}
          />
        </>
        : null
      }
      <button className={style.button} onClick={handleSave}>Zapisz</button>
    </div>
  );
};