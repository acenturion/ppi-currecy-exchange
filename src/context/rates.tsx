import {useState, createContext, useContext, PropsWithChildren, useEffect} from "react";
import {changeRates, getRates} from "../services/getRates.ts";
import {Currency} from "../components/InputSelect/InputSelect.tsx";


export interface RatesType {
  date: string;
  amount: number;
  totalAmount: number;
  from: Currency;
  to: Currency;
}

export interface OptionsSelectType {
  key: string;
  name: string;
}

interface RatesContextType {
  rates: RatesType;
  options: OptionsSelectType[];
  getRatesInit: () => void;
  calcRates: (v: number, a: OptionsSelectType, b: OptionsSelectType) => void;
}

const RatesContext = createContext<RatesContextType | null>(null);

export function useRates(): RatesContextType {
  const context = useContext(RatesContext);
  if (!context) {
    throw new Error("useRates must be used within an RatesProvider.");
  }
  return context;
}

export function RatesProvider({children}: PropsWithChildren) {

  const emptyRates: RatesType = {
    date: new Date().toString(),
    amount: 1.00,
    totalAmount: 1,
    from: {
      value: 1.00,
      key: "USD",
      name: "Dollar"
    },
    to: {
      value: 1.00,
      key: "EUR",
      name: "Euro"
    },
  }

  const [rates, setRates] = useState<RatesType>(emptyRates);

  useEffect(() => {
    getRatesInit();
  }, [])

  const getRatesInit = async () => {
    try {
      const ratesResult = await getRates()

      const formatted: RatesType = {
        date: ratesResult.date,
        amount: ratesResult.rates.USD,
        totalAmount: ratesResult.rates.USD * ratesResult.rates.EUR,
        from: {
          value: ratesResult.rates.USD,
          key: "USD",
          name: "Dollar"
        },
        to: {
          value: ratesResult.rates.EUR,
          key: "EUR",
          name: "Euro"
        },
      }
      setRates(formatted);
    } catch (e) {
      console.error("getRates - context", e)
    }
  }

  const calcRates = async (newAmount: number, from: OptionsSelectType, to: OptionsSelectType) => {
    try {
      const ratesResult = await changeRates(from.key);
      setRates(prevState => {
        return {
          ...prevState,
          from: {
            ...from,
            value: ratesResult.rates[from.key],
          },
          to: {
            ...to,
            value: ratesResult.rates[to.key],
          },
          amount: newAmount,
          totalAmount: newAmount * ratesResult.rates[to.key],
        }
      })

    } catch (e) {
      console.error("calcRates - context", e)
    }

  }

  const options: OptionsSelectType[] = [
    {
      key: "USD",
      name: "Dollar"
    },
    {
      key: "EUR",
      name: "Euro"
    }
  ]


  const contextValue: RatesContextType = {
    rates,
    options,
    calcRates,
    getRatesInit
  };

  return (
    <RatesContext.Provider value={contextValue}>
      {children}
    </RatesContext.Provider>
  )
}