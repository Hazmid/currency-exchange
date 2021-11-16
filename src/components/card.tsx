import React, { useEffect, useState } from "react";
import { Card, Button } from "@mui/material";
import Input from "./input";
import Dropdown from "./dropdown";
import Balance from "./balance";
import { FaExchangeAlt } from "react-icons/fa";
import { useStyles } from "../utils";
import { balance } from "../constants";
import { BASE_URL } from "../api/api";

function ExchangeCard() {
  const classes = useStyles();

  const [currencyOptions, setCurrencyOptions] = useState<any[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>("");
  const [toCurrency, setToCurrency] = useState<string>("");
  const [exchangeRate, setExchangeRate] = useState<number>();
  const [amount, setAmount] = useState<number>(1);
  const [amountInFromCurrency, setAmountInFromCurrency] =
    useState<Boolean>(true);
  const [rates, setRates] = useState<any>({ EUR: 1 });
  const [balanceVal, setBalanceVal] = useState<any>({
    USD: balance.USD,
    EUR: balance.EUR,
    GBP: balance.GBP,
  });
  const [exceededFrom, setExceededFrom] = useState<boolean>(false);
  const [exceededTo, setExceededTo] = useState<boolean>(false);

  let toAmount: number, fromAmount: number;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate!;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate!;
  }

  useEffect(() => {
    fetch(`${BASE_URL}&symbols=USD,GBP&format=1`)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setRates({ ...data.rates, ...rates });
        setExchangeRate(data.rates[firstCurrency]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      setExchangeRate(rates[toCurrency] / rates[fromCurrency]);
    }
  }, [fromCurrency, toCurrency, rates]);

  function handleFromAmountChange(e: any) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
    if (e.target.value > balanceVal[fromCurrency]) {
      setExceededFrom(true);
    } else {
      setExceededFrom(false);
    }
  }

  function handleToAmountChange(e: any) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
    if (e.target.value > balanceVal[fromCurrency]) {
      setExceededTo(true);
    } else {
      setExceededTo(false);
    }
  }

  function handleExchange() {
    setBalanceVal({
      ...balanceVal,
      [toCurrency]: balanceVal[toCurrency] + toAmount,
      [fromCurrency]: balanceVal[fromCurrency] - fromAmount,
    });
    setAmount(0);
  }

  return (
    <>
      <Card className={classes.card}>
        <div className={classes.rates}>
          <span>1 {fromCurrency}</span>
          <FaExchangeAlt />
          <span>
            {exchangeRate?.toFixed(2)} {toCurrency}
          </span>
        </div>
        <div className={classes.container}>
          <div className={classes.firstContainer}>
            <Dropdown
              currencyOptions={currencyOptions}
              selectedCurrency={fromCurrency}
              onChangeCurrency={(e: any) => setFromCurrency(e.target.value)}
            />

            <div className={classes.secondContainer}>
              <Input
                onChangeAmount={handleFromAmountChange}
                amount={fromAmount}
                exceeded={exceededFrom}
              />
              <Balance balance={balanceVal[fromCurrency]} />
            </div>
          </div>

          <div className={classes.firstContainer}>
            <Dropdown
              currencyOptions={currencyOptions}
              selectedCurrency={toCurrency}
              onChangeCurrency={(e: any) => setToCurrency(e.target.value)}
            />
            <div className={classes.secondContainer}>
              <Input
                onChangeAmount={handleToAmountChange}
                amount={toAmount}
                exceeded={exceededTo}
              />
              <Balance balance={balanceVal[toCurrency]} />
            </div>
          </div>
        </div>

        <Button
          disabled={exceededFrom || exceededTo ? true : false}
          className={classes.exchangeButton}
          onClick={handleExchange}
        >
          EXCHANGE
        </Button>
      </Card>
    </>
  );
}

export default ExchangeCard;
