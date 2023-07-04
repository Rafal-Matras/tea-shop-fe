import { UserRegisterInterface } from '../../../../types';

import { Radio } from '../../Radio/Radio';
import { Input } from '../../Input/Input';

import style from './DataForm.module.css';

interface Props {
  userData: UserRegisterInterface;
  editUserData: (name: string, value: string | number) => void;
}

export const DataForm = ({userData, editUserData}: Props) => {

  return (
    <form className={style.form}>
      <Radio
        data={['Paragon', 'Faktura VAT']}
        name="documentType"
        account={userData.documentType}
        setAccount={editUserData}
        text='Rachunek'
      />
      <div className={style.inputBox}>
        <Input
          type="text"
          name="name"
          value={userData.name}
          displayedName="Imię"
          change={editUserData}
          required={true}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="surName"
          value={userData.surName}
          displayedName="Nazwisko"
          change={editUserData}
          required={true}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="companyName"
          value={userData.companyName}
          displayedName="Nazwa firmy"
          change={editUserData}
          required={false}
        />
      </div>
      {userData.documentType === 'Faktura VAT'
        ? <div className={style.inputBox}>
          <Input
            type="text"
            name="nip"
            value={userData.nip}
            displayedName="Nip"
            change={editUserData}
            required={true}
          />
        </div>
        : null
      }
      <div className={style.inputBox}>
        <Input
          type="text"
          name="street"
          value={userData.street}
          displayedName="Ulica"
          change={editUserData}
          required={true}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="flatNumber"
          value={userData.flatNumber}
          displayedName="Nr. domu"
          change={editUserData}
          required={false}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="postCode"
          value={userData.postCode}
          displayedName="Kod pocztowy"
          change={editUserData}
          required={true}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="city"
          value={userData.city}
          displayedName="Miejscowość"
          change={editUserData}
          required={true}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="text"
          name="phone"
          value={userData.phone}
          displayedName="Telefon"
          change={editUserData}
          required={true}
        />
      </div>
    </form>
  );
};