export const config = {
  URL: 'http://localhost:3000/',
  REGEX_EMAIL: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/,
  REGEX_PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*()_=+/-?.,<>;:'"|~`]{8,32}$/,
  REGEX_POSTCODE: /^([0-9]{2})(-[0-9]{3})?$/i,
  REGEX_PHONE: /^[0-9-+ ]{9,20}/,
  REGEX_NIP: /^[0-9 ]{10}/
};