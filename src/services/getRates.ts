import Fetch from "../utils/fetch.ts";

const getRates = async () => {
  const ratesResult = await Fetch({
    method: "get",
    path: "rates?base=USD"
  });

  console.log("service - getRates", ratesResult)
  return ratesResult;
}

const changeRates = async (from: string) => {
  const ratesResult = await Fetch({
    method: "get",
    path: `rates?base=${from}`
  });

  console.log("service - changeRates", ratesResult)
  return ratesResult;
}

export {
  getRates,
  changeRates
};