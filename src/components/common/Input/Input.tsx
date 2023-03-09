import { ChangeEvent, useState } from 'react';

import { ShowIcon } from '../SvgIcons/ShowIcon';
import { HideIcon } from '../SvgIcons/HideIcon';

import { REGEX_EMAIL, REGEX_PASSWORD, REGEX_POSTCODE } from '../../../assets/regexFiles';

import style from './Input.module.css';

interface Props {
  type: string;
  name: string;
  displayedName: string;
  value: string;
  change: (name: string, value: string) => void;
  required: boolean;
  correct?: boolean;
}

export const Input = ({type, name, displayedName, value, change, required, correct,}: Props) => {

  const [errorText, setErrorText] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);

  const checkReg = (reg: any) => {
    return value.match(reg);
  };

  const checkData = () => {
    if (required && value === '') {
      setErrorText('To pole jest wymagane.');
    } else if (name === 'email' && !checkReg(REGEX_EMAIL)) {
      setErrorText('Niepoprawny email');
    } else if (name === 'password' && !checkReg(REGEX_PASSWORD)) {
      setErrorText('niepoprawne hasło ');
    } else if (name === 'postCode' && !checkReg(REGEX_POSTCODE)) {
      setErrorText('niepoprawny kod pocztowy');
    } else if (name === 'repeatPassword' && !correct) {
      setErrorText('hasła muszą być takie same');
    } else setErrorText('');
  };

  return (
    <div className={style.container}>
      {type === 'password'
        ? <>
          <input
            id={name}
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