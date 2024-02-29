import styles from "./InputSelect.module.css"
import {ChangeEventHandler} from "react";
import {OptionsSelectType} from "../../context/rates.tsx";

export interface Currency {
  value: number;
  key: string;
  name: string;
}

interface InputSelectType {
  label: string;
  name: string;
  id: string;
  value: Currency;
  options: OptionsSelectType[],
  onChange: ChangeEventHandler;
}

function InputSelect(
  {
    label,
    onChange,
    value,
    options = [],
    name,
    id,
  }: InputSelectType) {

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <select className={styles.input}
              name={name}
              id={id}
              value={value.key}
              onChange={onChange}>
        {options.map(({key, name}) => {
          return (
            <option key={key} value={key}>{name}</option>
          );
        })}
      </select>
    </div>
  );
}

export default InputSelect;