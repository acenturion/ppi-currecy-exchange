import styles from "./MessageBox.module.css"

function MessageBox() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>We use the mid-market rate for our Converter.
        This is for informational purposes only.
        You won’t receive this rate when sending money.</p>
    </div>
  );
}

export default MessageBox;