import styles from "./Button.module.css"
import buttonImage from "../../assets/icon-button.svg"

interface ButtonType {
  onPress: () => void;
}

function Button({onPress}: ButtonType) {
  return (
    <button
      className={styles.container}
      onClick={onPress}>
      <img
        className={styles.image}
        src={buttonImage}
        alt="Botón"/>
    </button>
  );
}

export default Button;