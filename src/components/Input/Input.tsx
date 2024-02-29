import styles from "./Input.module.css"
import {HTMLInputTypeAttribute} from "react";

interface InputType {
  label: string;
  type: HTMLInputTypeAttribute;
  onChange: (e: any) => void;
  value: any;
  name?:string;
  id?:string;
}

function Input(
  {
    label,
    type,
    onChange,
    value,
    name,
    id,
  }: InputType) {

  const formattedValue = (() => {
    return value.toString();
  })();

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        value={formattedValue}
        onChange={onChange}
        type={type}
        name={name}
        id={id}
      />
    </div>
  );
}

export default Input;