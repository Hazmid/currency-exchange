import React, { useEffect, useState } from "react";
import { Card, Grid, Button } from "@mui/material";
import Input from "./input";
import Dropdown from "./dropdown";
import Balance from "./balance";
import { FaExchangeAlt } from "react-icons/fa";
import { useStyles } from "../utils";
import { balance, fromAccount, toAccount } from "../constants";
import { getLatest } from "../api/api";

function ExchangeCard() {
  const classes = useStyles();
  const [currencies, setCurrencies] = useState<any>({
    dollar: { value: balance.usd, sign: "$" },
    euro: { value: balance.eur, sign: "€" },
    pound: { value: balance.gbp, sign: "£" },
  });

  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");

  const [fromInput, setFromInput] = useState<number>(0);
  const [toInput, setToInput] = useState<number>(0);

  const [displayFromBalance, setDisplayFromBalance] = useState<any>({
    symbol: "",
    amount: 0,
  });
  const [displayToBalance, setDisplayToBalance] = useState<any>({
    symbol: "",
    amount: 0,
  });

  const [rates, setRates] = useState<any>({
    euro: 1,
    pound: 1,
    dollar: 1,
  });

  useEffect(() => {
    setFrom(currencies.dollar.sign);
    setTo(currencies.euro.sign);
    setDisplayFromBalance({
      symbol: currencies.dollar.sign,
      amount: currencies.dollar.value,
    });
    setDisplayToBalance({
      symbol: currencies.euro.sign,
      amount: currencies.euro.value,
    });

    async function fetchData() {
      const res = await getLatest();
      setRates({
        euro: 1,
        dollar: res.rates.USD,
        pound: res.rates.GBP,
      });
    }
    fetchData();
  }, []);

  const swap = (obj: any) => {
    const reversed_obj: any = {};
    for (let key in obj) {
      reversed_obj[obj[key]] = key;
    }
    return reversed_obj;
  };

  const changeAccount = (e: any, mode: string) => {
    const reversed_obj = swap(fromAccount);
    Object.keys(reversed_obj).filter((key) => {
      if (key === e.target.value) {
        const currency_values: any = Object.values(currencies);
        const filtered_values: any = Object.values(currencies).filter(
          (item) => item !== from
        );

        for (let i = 0; i < currency_values.length; i++) {
          if (currency_values[i].sign === key) {
            console.log(currency_values[i]);
            if (mode === "from") {
              setDisplayFromBalance({
                symbol: currency_values[i].sign,
                amount: currency_values[i].value,
              });
            }
          }
        }

        if (mode === "to") {
          for (let i = 0; i < filtered_values.length; i++) {
            if (filtered_values[i].sign === key) {
              console.log(filtered_values[i]);

              setDisplayToBalance({
                symbol: filtered_values[i].sign,
                amount: filtered_values[i].value,
              });
            }
          }
        }
      }
    });
  };

  return (
    <>
      <Card className={classes.card}>
        <div className={classes.rates}>
          <span>€{rates.euro}</span>
          <FaExchangeAlt />
          <span>£{rates.pound}</span>
        </div>
        <div className={classes.container}>
          <div className={classes.firstContainer}>
            <Dropdown
              from={from}
              symbols={Object.values(fromAccount)}
              setFrom={setFrom}
              changeAccount={changeAccount}
            />

            <div className={classes.secondContainer}>
              <Input fromInput={fromInput} setFromInput={setFromInput} />
              <Balance balance={displayFromBalance} />
            </div>
          </div>

          <div className={classes.firstContainer}>
            <Dropdown
              to={to}
              symbols={Object.values(toAccount).filter((item) => item !== from)}
              setTo={setTo}
              changeAccount={changeAccount}
            />
            <div className={classes.secondContainer}>
              <Input toInput={toInput} setToInput={setToInput}/>
              <Balance balance={displayToBalance} />
            </div>
          </div>
        </div>

        <button className={classes.exchangeButton}>EXCHANGE</button>
      </Card>
    </>
  );
}

export default ExchangeCard;
