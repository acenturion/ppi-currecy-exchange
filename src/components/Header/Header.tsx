import styles from "./Header.module.css"
function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Currency exchange</h1>
    </div>
  );
}

export default Header;