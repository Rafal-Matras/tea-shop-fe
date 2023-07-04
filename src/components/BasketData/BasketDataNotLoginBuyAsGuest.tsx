import { UserInterface } from '../../types';

import { DeliveryForm } from '../common/Forms/DeliveryForm/DeliveryForm';
import { DataForm } from '../common/Forms/DataForm/DataForm';
import { Checkbox } from '../common/Checkbox/Checkbox';
import { Input } from '../common/Input/Input';
import { BackAndNextButtons } from '../common/BackAndNextButtons/BackAndNextButtons';
import { BasketDataCheckBox } from './BasketDataCheckBox';

import style from './BasketData.module.css';

interface Props {
  userData: UserInterface;
  changeUserData: (name: string, value: string | number) => void;
  changeUserDataDelivery: (name: string, value: string) => void;
  changeOtherDeliveryAddress: () => void;
  accept: 0 | 1;
  setAccept: (accept: 0 | 1) => void;
  isAllData: boolean;
  isAccepted: boolean;
  setIsAccepted: (isAccepted: boolean) => void;
  checkEmail: (email: string) => Promise<Response>;
  handleNext: () => void;
  handleBack: () => void;
}

export const BasketDataNotLoginBuyAsGuest = ({
                                               userData,
                                               changeUserData,
                                               changeUserDataDelivery,
                                               changeOtherDeliveryAddress,
                                               accept,
                                               setAccept,
                                               isAllData,
                                               isAccepted,
                                               setIsAccepted,
                                               checkEmail,
                                               handleNext,
                                               handleBack,
                                             }: Props) => {


  return (
    <div>
      <h2 className={style.sectionTitle}>Dane kontaktowe</h2>
      <div className={style.emailInputBox}>
        <Input
          type="text"
          name="email"
          displayedName="E-mail"
          value={userData.email}
          change={changeUserData}
          checkEmail={checkEmail}
          required={true}
        />
      </div>
      <h2 className={style.sectionTitle}>Dane do rachunku i dostawy</h2>
      <DataForm
        userData={userData}
        editUserData={changeUserData}
      />
      <div className={style.deliveryBox}>
        <Checkbox
          children="Inne dane do wysyłki"
          active={userData.otherDeliveryAddress}
          change={changeOtherDeliveryAddress}
        />
      </div>
      {userData.otherDeliveryAddress === 1
        ? <>
          <h2 className={style.sectionTitle}>Dane do wysyłki</h2>
          <DeliveryForm
            deliveryData={userData.delivery}
            editDeliveryData={changeUserDataDelivery}
          />
        </>
        : null}
      <p className={isAllData ? style.errorMassageOff : style.errorMassageOn}>Proszę uzupełnić brakujące dane</p>
      <BasketDataCheckBox
        accept={accept}
        setAccept={setAccept}
        setIsAccepted={setIsAccepted}
      />
      <p className={isAccepted ? style.errorMassageOn : style.errorMassageOff}
      >Potwierdz zapoznanie się z regulaminem i polityką prywatności.
      </p>
      <BackAndNextButtons
        textNext="dalej"
        handleBack={handleBack}
        handleNext={handleNext}
      />
    </div>
  );
};