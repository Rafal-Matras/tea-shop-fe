import { Radio } from '../../common/Radio/Radio';

import style from './DeliveryAndPayments.module.css';

interface Props {
  formOfDelivery: string;
  setFormOfDelivery: (name: string, value: string) => void;
}

export const Delivery = ({formOfDelivery, setFormOfDelivery}: Props) => {

  const dataDelivery: string[] = ['kurier GLS', 'kurier DHL','kurier Inpost', 'paczkomat Inpost', 'odbiór w żabce'];
  return (
    <div className={style.delivery}>
      <Radio
        data={dataDelivery}
        name="Forma dostawy"
        account={formOfDelivery}
        setAccount={setFormOfDelivery}
        vertical={true}
      />
    </div>
  );
};