import { useStyles } from "../utils";

type Props = {
  balance?: any;
}

function Balance(props: Props) {
    const classes = useStyles();
    return(
    <p className={classes.balance}>Balance: {props.balance.symbol}{props.balance.amount}</p>
  )
}

export default Balance;
