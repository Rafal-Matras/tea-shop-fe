import { useState } from 'react';

import { UserInterface } from '../../types';

import { Radio } from '../common/Radio/Radio';
import { BasketDataNotLoginRegister } from './BasketDataNotLoginRegister';
import { BasketDataIsNotLoginHaveAccount } from './BasketDataIsNotLoginHaveAccount';
import { BasketDataNotLoginBuyAsGuest } from './BasketDataNotLoginBuyAsGuest';

import style from './BasketData.module.css';

interface Props {
  userData: UserInterface;
  changeUserData: (name: string, value: string | number) => void;
  changeUserDataDelivery: (name: string, value: string) => void;
  accept: 0 | 1;
  setAccept: (number: 0 | 1) => void;
  changeOtherDeliveryAddress: () => void;
  isAllData: boolean;
  setIsAllData: (isAllData: boolean) => void;
  isAccepted: boolean;
  setIsAccepted: (isAccepted: boolean) => void;
  checkEmail: (email: string) => Promise<Response>;
  handleNext: () => void;
  handleBack: () => void;
}

export const BasketDataIsNotLogin = ({
                                       userData,
                                       changeUserData,
                                       changeUserDataDelivery,
                                       accept,
                                       setAccept,
                                       changeOtherDeliveryAddress,
                                       isAllData,
                                       setIsAllData,
                                       isAccepted,
                                       setIsAccepted,
                                       checkEmail,
                                       handleNext,
                                       handleBack,
                                     }: Props) => {

  const [account, setAccount] = useState<string>('Posiadam konto w sklepie');
  let buttonName: string = '';
  const radioData = ['Posiadam konto w sklepie', 'Nie posiadam konta i chcę sie zarejestrować', 'Kontynuuj jako gość'];

  const handleAccount = (name: string, value: string | number) => {
    if(typeof value === 'string')setAccount(value);
  }

  const accountPage = () => {
    switch (account) {
      case 'Posiadam konto w sklepie':
        buttonName = 'Zaloguj';
        return <BasketDataIsNotLoginHaveAccount
          setAccount={setAccount}
        />;
      case 'Nie posiadam konta i chcę sie zarejestrować':
        buttonName = 'Zarejestruj';
        return <BasketDataNotLoginRegister
          userData={userData}
          changeUserData={changeUserData}
          changeUserDataDelivery={changeUserDataDelivery}
          setAccount={setAccount}
          changeOtherDeliveryAddress={changeOtherDeliveryAddress}
          isAllData={isAllData}
          setIsAllData={setIsAllData}
          checkEmail={checkEmail}
        />;
      case 'Kontynuuj jako gość':
        buttonName = 'Kontynuuj';
        return <BasketDataNotLoginBuyAsGuest
          userData={userData}
          changeUserData={changeUserData}
          changeUserDataDelivery={changeUserDataDelivery}
          changeOtherDeliveryAddress={changeOtherDeliveryAddress}
          accept={accept}
          setAccept={setAccept}
          isAllData={isAllData}
          isAccepted={isAccepted}
          setIsAccepted={setIsAccepted}
          checkEmail={checkEmail}
          handleNext={handleNext}
          handleBack={handleBack}
        />;
    }
  };

  return (
    <div className={style.sectionContainer}>
      <h2 className={style.sectionTitle}>Konto w sklepie</h2>
      <div className={style.choiceBox}>
        <Radio
          data={radioData}
          name=""
          text=''
          account={account}
          setAccount={handleAccount}
          vertical={true}
        />
      </div>
      {accountPage()}
    </div>
  );
};