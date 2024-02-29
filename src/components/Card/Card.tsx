import styles from "./Card.module.css"
import {ReactNode} from "react";

interface CardType {
  children: ReactNode;
}

function Card({children}: CardType) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default Card;