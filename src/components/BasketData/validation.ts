import { UserInterface } from '../../types';

interface Props {
  accept: boolean;
  setIsAccepted: (name: boolean) => void;
  userData: UserInterface;
  confirmPassword?:string;
  setIsAllData: (name: boolean) => void;
  deliveryActive?: boolean;
}

export const validation = ({accept, setIsAccepted, userData,confirmPassword, setIsAllData, deliveryActive}: Props) => {

  if(confirmPassword === ''){
    setIsAllData(true);
    return false;
  }
  if (!accept) {
    setIsAccepted(true);
    return false;
  }
  setIsAccepted(false);
  if (userData.name === '' || userData.surName === '' || userData.street === '' || userData.homeNumber === '' || userData.postCode === '' || userData.city === '' || userData.phone === '') {
    setIsAllData(true);
    return false;
  }
  if (deliveryActive && (userData.delivery.deliveryName === '' || userData.delivery.deliverySurName === '' || userData.delivery.deliveryCity === '' || userData.delivery.deliveryStreet === '' || userData.delivery.deliveryHomeNumber === '' || userData.delivery.deliveryPostCode === '')) {
    setIsAllData(true);
    return false;
  }
  setIsAllData(false);
  return true;
};