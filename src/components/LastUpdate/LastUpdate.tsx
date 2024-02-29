import styles from "./LastUpdate.module.css"

interface LastUpdateType {
  date?: string,
}

function LastUpdate({date}: LastUpdateType) {

  const inputDate = date ? new Date(date) : new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const formattedDate = `Last updated ${months[inputDate.getMonth()]} ${inputDate.getDate()}, ${inputDate.getFullYear()}, ${inputDate.getUTCHours()}:${inputDate.getMinutes().toString().padStart(2, '0')} UTC`;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.text}>
          <a href="https://www.xe.com/currency/eur-euro/" target="_blank">Euro</a><span> to </span>
          <a href="https://www.xe.com/currency/usd-us-dollar/" target="_blank">US Dollar</a>
          <span> to </span>conversion — {formattedDate}
        </p>
      </div>
    </div>
  );
}

export default LastUpdate;