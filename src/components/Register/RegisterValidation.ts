import { config } from '../../config/config';
import { DeliveryRegisterInterface, UserRegisterInterface } from '../../types';

export const RegisterValidation = (userRegistrationData: UserRegisterInterface, deliveryRegistrationData: DeliveryRegisterInterface, confirmPassword: string) => {
  const {
    email,
    pwdHash,
    name,
    surName,
    companyName,
    nip,
    street,
    flatNumber,
    postCode,
    city,
    phone,
    otherDeliveryAddress,
    documentType,
  } = userRegistrationData;
  const {
    deliveryName,
    deliverySurName,
    deliveryStreet,
    deliveryPostCode,
    deliveryCity,
  } = deliveryRegistrationData;
  if (email === '' || !email.match(config.REGEX_EMAIL) || pwdHash === '' || !pwdHash.match(config.REGEX_PASSWORD) || confirmPassword !== pwdHash) {
    return false;
  } else if (name !== '' || surName !== '' || companyName !== '' || nip !== '' || street !== '' || flatNumber !== '' || postCode !== '' || city !== '' || phone !== '') {
    if (documentType === 'Faktura VAT') {
      if (nip === '') return false;
    }
    if (name === '' && surName === '' && street === '' && !postCode.match(config.REGEX_POSTCODE) && city === '' && !phone.match(config.REGEX_PHONE)) return false;
  } else if (otherDeliveryAddress === 1) {
    if (deliveryName === '' && deliverySurName === '' && deliveryStreet === '' && deliveryPostCode === '' && deliveryCity === '') return false;
  } else return true;
};