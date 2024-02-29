import styles from "./Calculator.module.css"
import Input from "../Input/Input.tsx";
import InputSelect, {Currency} from "../InputSelect/InputSelect.tsx";
import Button from "../Button/Button.tsx";
import {Formik, FormikHelpers} from "formik";
import {OptionsSelectType} from "../../context/rates.tsx";

interface CalculatorType {
  amount: number;
  from: Currency;
  to: Currency;
  onSubmit: () => void;
  onChangeAmount: (setFieldValue: FormikHelpers<unknown>["setFieldValue"], value: string, values: unknown) => void;
  onChangeSelectFrom: (setFieldValue: FormikHelpers<unknown>["setFieldValue"], selected: any) => void;
  onChangeSelectTo: (setFieldValue: FormikHelpers<unknown>["setFieldValue"], selected: any) => void;
  onSwapSelect: (setFieldValue: FormikHelpers<unknown>["setFieldValue"], values: any) => void;
  options: OptionsSelectType[]
}

function Calculator(
  {
    amount,
    from,
    to,
    onChangeAmount,
    onChangeSelectFrom,
    onChangeSelectTo,
    onSwapSelect,
    options
  }: CalculatorType) {

  const initialValues = {
    amount: amount || 1,
    from,
    to,
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {
      }}
    >
      {({
          values,
          setFieldValue,
        }) => (
        <div className={styles.container}>
          <Input
            name={"amount"}
            id={"amount"}
            label={"Amount"}
            value={values.amount}
            type={"text"}
            onChange={(e) => onChangeAmount(setFieldValue, e.target.value, values)}
          />
          <InputSelect
            label={"from"}
            name={"from"}
            id={"From"}
            value={values.from}
            options={options}
            onChange={(e) => onChangeSelectFrom(setFieldValue, e.target.value)}
          />
          <Button onPress={() => onSwapSelect(setFieldValue, values)}/>
          <InputSelect
            label={"to"}
            name={"to"}
            id={"To"}
            value={values.to}
            options={options}
            onChange={(e) => onChangeSelectTo(setFieldValue, e.target.value)}
          />
        </div>
      )}
    </Formik>
  );
}

export default Calculator;