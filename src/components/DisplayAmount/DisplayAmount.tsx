import styles from "./DisplayAmount.module.css"
import MessageBox from "../MessageBox/MessageBox.tsx";
import {Currency} from "../InputSelect/InputSelect.tsx";

interface DisplayAmountType {
  from: Currency;
  to: Currency;
  amount: number;
  totalAmount: number;
}

function DisplayAmount(
  {
    from,
    to,
    amount,
    totalAmount
  }: DisplayAmountType
) {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.result}>
          {amount.toFixed(2)} {from.name} = <br/>
          {totalAmount.toFixed(2)} {to.name}
        </p>
        <p className={styles.single}>
          {from.value.toFixed(2)} {from.key} = {to.value.toFixed(2)} {to.key}
        </p>
      </div>
      <div>
        <MessageBox/>
      </div>
    </div>
  );
}

export default DisplayAmount;