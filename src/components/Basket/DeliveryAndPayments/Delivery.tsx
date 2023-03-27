import { Radio } from '../../common/Radio/Radio';

import style from './DeliveryAndPayments.module.css';

interface Props {
  formOfDelivery: string;
  setFormOfDelivery: (name: string) => void;
}

export const Delivery = ({formOfDelivery, setFormOfDelivery}: Props) => {

  const dataDelivery: string[] = ['Kurier GLS', 'Kurier DHL', 'Paczkomaty 24/7', 'Kurier Inpost', 'Odbiór w Żabce (DHL)'];

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