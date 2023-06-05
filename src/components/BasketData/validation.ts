import { UserInterface } from '../../types';

export const validation = (accept: 0 | 1, setIsAccepted: (isAllData: boolean) => void, userData: UserInterface, confirmPassword: string | null, setIsAllData: (isAllData: boolean) => void, next: boolean) => {

  const {
    documentType,
    nip,
    name,
    surName,
    companyName,
    street,
    flatNumber,
    postCode,
    city,
    phone,
    otherDeliveryAddress,
  } = userData;
  const {
    deliveryName,
    deliverySurName,
    deliveryStreet,
    deliveryPostCode,
    deliveryCity,
  } = userData.delivery;


  if (next) {
    if (name === '') {
      setIsAllData(false);
      return false;
    }
  }

  if (confirmPassword === '') {
    setIsAllData(false);
    return false;
  }
  if (documentType === 'Faktura VAT') {
    if (nip !== '') {
      setIsAllData(false);
      return false;
    }
  }
  if (name !== '' || surName !== '' || companyName !== '' || street !== '' || flatNumber !== '' || postCode !== '' || city !== '' || phone !== '') {
    if (name === '' || surName === '' || street === '' || postCode === '' || city === '' || phone === '') {
      setIsAllData(false);
      return false;
    }
  }
  if (otherDeliveryAddress === 1) {
    if (deliveryName === '' || deliverySurName === '' || deliveryCity === '' || deliveryStreet === '' || deliveryPostCode === '') {
      setIsAllData(false);
      return false;
    }
  }
  if (!accept) {
    setIsAllData(true);
    setIsAccepted(true);
    return false;
  } else {
    setIsAccepted(false);
  }
  return true;
};
