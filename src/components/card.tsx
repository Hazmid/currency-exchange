import React, { useEffect, useState } from "react";
import { Card, Grid, Button } from "@mui/material";
import Input from "./input";
import Dropdown from "./dropdown";
import Balance from "./balance";
import { FaExchangeAlt } from "react-icons/fa";
import { useStyles } from "../utils";
import { balance } from "../constants";

function ExchangeCard() {
  const classes = useStyles();
  const [dollar, setDollar] = useState(0);
  const [euro, setEuro] = useState(0);
  const [pound, setPound] = useState(0);

  useEffect(() => {
    setDollar(balance.usd);
    setEuro(balance.eur);
    setPound(balance.gbp);
  }, []);

  return (
    <>
      <Card className={classes.card}>
        <div className={classes.rates}>
          <span>#1</span>
          <FaExchangeAlt />
          <span>@570</span>
        </div>
        <div className={classes.container}>
          <div className={classes.firstContainer}>
            <Dropdown />

            <div className={classes.secondContainer}>
              <Input />
              <Balance balance={dollar}/>
            </div>
          </div>

          <div className={classes.firstContainer}>
            <Dropdown />
            <div className={classes.secondContainer}>
              <Input />
              <Balance  balance={dollar}/>
            </div>
          </div>
        </div>

        <button className={classes.exchangeButton}>EXCHANGE</button>
      </Card>
    </>
  );
}

export default ExchangeCard;
