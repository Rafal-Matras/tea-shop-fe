import { UserProfileType } from '../../../../types';

import { Radio } from '../../Radio/Radio';
import { Input } from '../../Input/Input';

import style from './DataForm.module.css';
interface Props {
  registrationData: UserProfileType;
  editRegistrationData: (name: string, value: string) => void;
}

export const DataForm = ({registrationData, editRegistrationData}: Props) => {

  return (
    <form className={style.form}>
      <Radio
        data={['Paragon', 'Faktura VAT']}
        name="Rachunek"
        account={registrationData.accountType}
        setAccount={editRegistrationData}
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
      {registrationData.accountType === 'Faktura VAT'
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
    </form>
  );
};