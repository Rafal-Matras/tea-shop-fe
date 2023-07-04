import { Radio } from '../../common/Radio/Radio';

import style from './DeliveryAndPayments.module.css';

interface Props {
  formOfPayments: string;
  setFormOfPayments: (name: string, value: string | number) => void;
}

export const Payments = ({formOfPayments, setFormOfPayments}: Props) => {

  const dataPayments: string[] = ['przelewy24.pl', 'visa / mastercard', 'blik', 'tradycyjny przelew', 'za pobraniem'];

  return (
    <div className={style.payments}>
      <Radio
        data={dataPayments}
        text="Forma płatności"
        name=""
        account={formOfPayments}
        setAccount={setFormOfPayments}
        vertical={true}
      />
    </div>
  );
};