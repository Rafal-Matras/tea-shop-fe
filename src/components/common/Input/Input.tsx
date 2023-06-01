import { ChangeEvent, CSSProperties, useState } from 'react';

import { config } from '../../../config/config';

import { ShowIcon } from '../SvgIcons/ShowIcon';
import { HideIcon } from '../SvgIcons/HideIcon';

import style from './Input.module.css';

interface Props {
  styles?: CSSProperties;
  type: string;
  name: string;
  displayedName: string;
  value: string;
  change: (name: string, value: string) => void;
  required: boolean;
  samePassword?: () => boolean;
  checkEmail?: (email: string) => Promise<Response>;
}

export const Input = ({
                        styles,
                        type,
                        name,
                        displayedName,
                        value,
                        change,
                        required,
                        samePassword,
                        checkEmail,
                      }: Props) => {

  const [errorText, setErrorText] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);

  const checkReg = (reg: RegExp) => {
    return value.match(reg);
  };

  const checkData = async () => {
    if (required && value === '') {
      setErrorText('To pole jest wymagane.');
      return;
    }
    if (name === 'email' && !checkReg(config.REGEX_EMAIL)) {
      setErrorText('Niepoprawny email');
      return;
    }
    if (name === 'email' && checkEmail) {
      const data = await checkEmail(value);
      if (data.ok) {
        setErrorText('Taki email już istnieje');
        return;
      }
    }
    if ((name === 'pwdHash' || name === 'confirmPassword') && !checkReg(config.REGEX_PASSWORD)) {
      setErrorText('niepoprawne hasło ');
      return;
    }
    if (name === 'postCode' && !checkReg(config.REGEX_POSTCODE)) {
      setErrorText('niepoprawny kod pocztowy ( 00-000 )');
      return;
    }
    if (name === 'phone' && !checkReg(config.REGEX_PHONE)) {
      setErrorText('niepoprawny numer telefonu');
      return;
    }
    if (name === 'nip' && !checkReg(config.REGEX_NIP)) {
      setErrorText('niepoprawny numer nip');
      return;
    }
    if (name === 'confirmPassword' && samePassword) {
      if (!samePassword()) {
        setErrorText('Hasła muszą być takie same');
        return;
      }
    }
    setErrorText('');
  };

  return (
    <div className={style.container}>
      {type === 'password'
        ? <>
          <input
            id={name}
            style={styles}
            type={active ? 'text' : 'password'}
            name={name}
            className={style.inputPassword}
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => change(name, e.target.value)}
            onBlur={checkData}
            required={required}
            placeholder=" "
          />
          <label htmlFor={name} className={style.label}>{displayedName}</label>
          <div className={style.iconBox}>
            {active
              ? <ShowIcon className={style.icon} onClick={() => setActive(prev => !prev)}/>
              : <HideIcon className={style.icon} onClick={() => setActive(prev => !prev)}/>
            }
          </div>
          <p className={style.error}>{errorText}</p>
        </>
        : <>
          <input
            id={name}
            style={styles}
            type={type}
            name={name}
            className={style.input}
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => change(name, e.target.value)}
            onBlur={checkData}
            required={required}
            placeholder=" "
          />
          <label htmlFor={name} className={style.label}>{displayedName}</label>
          <p className={style.error}>{errorText}</p>
        </>
      }
    </div>
  );
};