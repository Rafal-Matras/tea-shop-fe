import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserLoginDataInterface } from '../../types';

import { UseUserContext } from '../../context/UserContext';

import { LoginForm } from '../common/Forms/LoginForm/LoginForm';

import { BasketDataAcceptanceAndButtons } from './BasketDataAcceptanceAndButtons';

import { defaultUserActive } from '../../assets/defaultData';

import style from './BasketData.module.css';

interface Props {
  loginDetails: UserLoginDataInterface;
  changeLoginDetails: (name: string, value: string) => void;
  accept:boolean;
  setAccept: (value:boolean) => void;
}

export const BasketDataIsNotLoginHaveAccount = ({loginDetails, changeLoginDetails,accept,setAccept}: Props) => {

  const {setUser} = UseUserContext();
  const navigate = useNavigate();
  const [errorLogin, setErrorLogin] = useState<boolean>(false);

  const handleLogin = async () => {
    // const response = await fetch(URL);
    // const data = await response.json();
    // if(!data) return setErrorLogin(true);
    // setErrorLogin(false);
     setUser(defaultUserActive);
    navigate('/basket/data');
    window.scrollTo(0, 0);
  };

  return (
    <div className={style.notLoginSection}>
      <h2 className={style.sectionTitle}>Zaloguj się</h2>
      <LoginForm
        loginDetails={loginDetails}
        editLoginDetails={changeLoginDetails}
        handleLogin={handleLogin}
        errorLogin={errorLogin}
      />
      <BasketDataAcceptanceAndButtons
        accept={accept}
        setAccept={setAccept}
        handleNext={handleLogin}
        buttonName='Zaloguj'
        showAccepted={false}
      />
    </div>
  );
};