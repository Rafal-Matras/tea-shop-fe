import { DeliveryRegisterInterface, UserInterface } from '../../types';

import { DataForm } from '../common/Forms/DataForm/DataForm';
import { DeliveryForm } from '../common/Forms/DeliveryForm/DeliveryForm';
import { Checkbox } from '../common/Checkbox/Checkbox';
import { BackAndNextButtons } from '../common/BackAndNextButtons/BackAndNextButtons';
import { BasketDataCheckBox } from './BasketDataCheckBox';

import style from './BasketData.module.css';

interface Props {
  userData: UserInterface;
  changeUserData: (name: string, value: string | number | DeliveryRegisterInterface) => void;
  changeUserDataDelivery: (name: string, value: string) => void;
  accept: 0 | 1;
  setAccept: (number: 1 | 0) => void;
  changeOtherDeliveryAddress: () => void;
  isAllData: boolean;
  isAccepted: boolean;
  setIsAccepted: (isAccepted: boolean) => void;
  handleNext: () => void;
  handleBack: () => void;
}

export const BasketDataIsLogin = ({
                                    userData,
                                    changeUserData,
                                    changeUserDataDelivery,
                                    accept,
                                    setAccept,
                                    changeOtherDeliveryAddress,
                                    isAllData,
                                    isAccepted,
                                    setIsAccepted,
                                    handleNext,
                                    handleBack,
                                  }: Props) => {

  return (
    <div className={style.sectionContainer}>
      <h2 className={style.sectionTitle}>Dane kontaktowe</h2>
      <p className={style.userEmail}>E-mail: <span>{userData.email}</span></p>
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
        : null
      }
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