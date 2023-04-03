import { useContext, useState } from 'react';

import { UserLoginDataInterface } from '../../types';

import { UserContext } from '../../context/UserContext';

import { BasketDataAcceptanceAndButtons } from './BasketDataAcceptanceAndButtons';
import { LoginForm } from '../common/Forms/LoginForm/LoginForm';

import style from './BasketData.module.css';

interface Props {
  loginDetails: UserLoginDataInterface;
  changeLoginDetails: (name: string, value: string) => void;
  accept:boolean;
  setAccept: (value:boolean) => void;
}

export const BasketDataIsNotLoginHaveAccount = ({loginDetails, changeLoginDetails,accept,setAccept}: Props) => {

  const {setUser} = useContext(UserContext);
  const [errorLogin, setErrorLogin] = useState<boolean>(false);

  const handleLogin = async () => {
    // const response = await fetch(URL);
    // const data = await response.json()
    // if(!data){
    //  return setErrorLogin(true)
    // }
    // setErrorLogin(false)
    // setUser(data)
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
      />
    </div>
  );
};