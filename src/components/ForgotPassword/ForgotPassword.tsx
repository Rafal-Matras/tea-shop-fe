import { SyntheticEvent, useEffect, useState } from 'react';

import { ChangePasswordForgotInterface } from '../../types';

import { NewPasswordForm } from '../common/Forms/NewPasswordForm/NewPasswordForm';
import { defaultChangePassword } from '../../assets/defaultData';

import style from './ForgotPassword.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { config } from '../../config/config';
import { Spinner } from '../common/Spinner/Spinner';

export const ForgotPassword = () => {

  const navigate = useNavigate();
  const [passwords, setPasswords] = useState<ChangePasswordForgotInterface>(defaultChangePassword);
  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');
  const [spinner, setSpinner] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);
  const {id} = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${config.URL}user/${id}`);
        if (!response.ok) {
          return;
        }
        const {user} = await response.json();
        console.log(user.forgotPwdExpiredAt);
        console.log( new Date(user.forgotPwdExpiredAt).getTime());
        console.log( new Date().getTime());
        console.log((new Date(user.forgotPwdExpiredAt).getTime() > new Date().getTime()));
        setSpinner(false);
        if ((new Date(user.forgotPwdExpiredAt).getTime() > new Date().getTime())) {
          setActive(false);
          return;
        }
      } catch (err) {
        throw new Error('New error message', {cause: err});
      }
    })();
  }, []);

  const changePassword = (name: string, value: string) => {
    setPasswords(passwords => ({
      ...passwords,
      [name]: value,
    }));
  };

  const validate = () => {
    if (passwords.pwd === '') {
      setErrorLogin(true);
      setErrorText('hasło nie może być puste');
      return true;
    }
    if (!passwords.pwd.match(config.REGEX_PASSWORD)) {
      setErrorLogin(true);
      setErrorText('hasło musi mieć co najmniej 6 znaków, zawierać małą i dużą literę oraz cyfrę');
      return true;
    }
    if (passwords.pwd !== passwords.confirmPwd) {
      setErrorLogin(true);
      setErrorText('hasła nie sa takie same');
      return true;
    }
    setErrorLogin(false);
  };

  const newPassword = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (validate()) return;
    try {
      const response = await fetch(`${config.URL}user/change-password/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({pwd: passwords.pwd}),
      });
      if (!response.ok) {
        setErrorLogin(true);
        setErrorText('coś poszło nie tak sprubuj jeszcze raz');
        return;
      }
      setErrorLogin(false);
      setErrorText('');
      navigate('/');
    } catch (err) {
      throw new Error('New error message', {cause: err});
    }
  };

  return (
    spinner
      ? <Spinner/>
      : active
        ? <div className={style.container}>
          <h1>Link do zmiany hasła wygasł</h1>
        </div>
        : <div className={style.container}>
          <h1>Zmiana hasła</h1>
          <NewPasswordForm
            passwords={passwords}
            changePassword={changePassword}
            errorLogin={errorLogin}
            errorText={errorText}
            newPassword={newPassword}
          />
        </div>
  );
};