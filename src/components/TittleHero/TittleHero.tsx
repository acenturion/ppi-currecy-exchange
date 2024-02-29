import styles from "./TittleHero.module.css"
import {Currency} from "../InputSelect/InputSelect.tsx";

export interface TittleHeroTpye {
  amount: number,
  from: Currency,
  to: Currency,
}

function TittleHero(
  {
    amount,
    from,
    to,
  }: TittleHeroTpye) {

  const titleString = `${amount.toFixed(2)} ${from.key} to ${to.key}`;

  return (
    <div className={styles.container}>
      <h2 className={styles.tittle}>
        {titleString} - Convert Euros to US Dollars
      </h2>
    </div>
  );
}

export default TittleHero;