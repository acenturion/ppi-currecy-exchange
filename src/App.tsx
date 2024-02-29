import {useState} from "react";
import Header from "./components/Header/Header.tsx";
import TittleHero from "./components/TittleHero/TittleHero.tsx";
import Card from "./components/Card/Card.tsx";
import DisplayAmount from "./components/DisplayAmount/DisplayAmount.tsx";
import Calculator from "./components/Calculator/Calculator.tsx";
import LastUpdate from "./components/LastUpdate/LastUpdate.tsx";
import {useRates} from "./context/rates.tsx";
import './App.css'

function App() {

  const {rates, calcRates, options} = useRates();
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleOnChangeAmount = (
    setFieldValue: (field: string, value: number) => void,
    value: string,
    values: { from: never; to: never }
  ) => {

    if (!/^\d+(\.\d{0,2})?$/.test(value)) {
      return;
    }


    const floatValue = parseFloat(value);

    if (floatValue <= 0 || isNaN(floatValue) || value === '') {
      setFieldValue('amount', '');
      return;
    }

    setFieldValue('amount', value)

    if (timer) clearTimeout(timer)

    const newTimer = setTimeout(() => {
      calcRates(floatValue, values.from, values.to);
    }, 500)

    setTimer(newTimer)
  }


  const handleOnChangeSelectFrom = (
    setFieldValues: (field: string, value: any,) => void,
    selected: string
  ) => {
    const result = options.find(option => option.key === selected);
    setFieldValues('from', result);
  }

  const handleOnChangeSelectTo = (
    setFieldValues: (field: string, value: never) => void,
    selected: string
  ) => {
    const result = options.find(option => option.key === selected);
    setFieldValues('to', result);
  }

  const handleOnSwapRates = (
    setFieldValues: (field: string, value: any) => void,
    values: { from: any; to: any }
  ) => {
    setFieldValues('from', values.to);
    setFieldValues('to', values.from);
  }
  return (
    <>
      <Header/>
      <TittleHero {...rates}/>
      <Card>
        <Calculator
          {...rates}
          onChangeAmount={handleOnChangeAmount}
          onChangeSelectFrom={handleOnChangeSelectFrom}
          onChangeSelectTo={handleOnChangeSelectTo}
          onSwapSelect={handleOnSwapRates}
          options={options}
        />
        <DisplayAmount
          {...rates}
        />
      </Card>
      <LastUpdate {...rates}/>
    </>
  )
}

export default App
