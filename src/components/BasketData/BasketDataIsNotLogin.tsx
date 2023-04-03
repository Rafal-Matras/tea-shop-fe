import { useState } from 'react';

import { UserLoginDataInterface, UserProfileType } from '../../types';

import { Progress } from '../common/Progress/Progress';
import { Radio } from '../common/Radio/Radio';
import { BasketDataNotLoginRegister } from './BasketDataNotLoginRegister';
import { BasketDataIsNotLoginHaveAccount } from './BasketDataIsNotLoginHaveAccount';
import { BasketDataNotLoginBuyAsGuest } from './BasketDataNotLoginBuyAsGuest';

import style from './BasketData.module.css';

interface Props {
  userData: UserProfileType;
  changeUserData: (name: string, value: string) => void;
  changeUserDataDelivery: (name: string, value: string) => void;
  loginDetails: UserLoginDataInterface;
  changeLoginDetails: (name: string, value: string) => void;
  deliveryActive: boolean;
  setDeliveryActive: (name: boolean) => void;
  accept: boolean;
  setAccept: (name: boolean) => void;
}

export const BasketDataIsNotLogin = ({
                                       userData,
                                       changeUserData,
                                       changeUserDataDelivery,
                                       loginDetails,
                                       changeLoginDetails,
                                       deliveryActive,
                                       setDeliveryActive,
                                       accept,
                                       setAccept,
                                     }: Props) => {

  const [account, setAccount] = useState<string>('Posiadam konto w sklepie');
  let buttonName: string = '';
  const radioData = ['Posiadam konto w sklepie', 'Nie posiadam konta i chcę sie zarejestrować', 'Kontynuuj jako gość']

  const handleAccount = (name: string, value: string) => setAccount(value);

  const accountPage = () => {
    switch (account) {
      case 'Posiadam konto w sklepie':
        buttonName = 'Zaloguj';
        return <BasketDataIsNotLoginHaveAccount
          loginDetails={loginDetails}
          changeLoginDetails={changeLoginDetails}
          accept={accept}
          setAccept={setAccept}
        />;
      case 'Nie posiadam konta i chcę sie zarejestrować':
        buttonName = 'Zarejestruj';
        return <BasketDataNotLoginRegister
          userData={userData}
          changeUserData={changeUserData}
          changeUserDataDelivery={changeUserDataDelivery}
          deliveryActive={deliveryActive}
          setDeliveryActive={setDeliveryActive}
          accept={accept}
          setAccept={setAccept}
        />;
      case 'Kontynuuj jako gość':
        buttonName = 'Kontynuuj';
        return <BasketDataNotLoginBuyAsGuest
          userData={userData}
          changeUserData={changeUserData}
          changeUserDataDelivery={changeUserDataDelivery}
          deliveryActive={deliveryActive}
          setDeliveryActive={setDeliveryActive}
          accept={accept}
          setAccept={setAccept}
        />;
    }
  };

  return (
    <div className={style.container}>
      <Progress
        name="Rejestracja"
        progressNumber={2}
      />
      <h1 className={style.title}>Prosimy o wypełnienie formularza oraz o podanie adresu dostawy zamówionych
        produktów.</h1>
      <h2 className={style.sectionTitle}>Konto w sklepie</h2>
      <div className={style.choiceBox}>
        <Radio
          data={radioData}
          name="" account={account} setAccount={handleAccount} vertical={true}/>
      </div>
      {accountPage()}
    </div>
  );
};