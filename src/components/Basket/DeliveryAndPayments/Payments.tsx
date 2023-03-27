import { Radio } from '../../common/Radio/Radio';

import style from './DeliveryAndPayments.module.css';

interface Props {
  formOfPayments: string;
  setFormOfPayments: (name: string) => void;
}

export const Payments = ({formOfPayments, setFormOfPayments}: Props) => {

  const dataPayments: string[] = ['Przelewy24.pl', 'Visa / Mastercard', 'Blik', 'Tradycyjny przelew', 'Za pobraniem'];

  return (
    <div className={style.payments}>
      <Radio
        data={dataPayments}
        name="Forma płatności"
        account={formOfPayments}
        setAccount={setFormOfPayments}
        vertical={true}
      />
    </div>
  );
};