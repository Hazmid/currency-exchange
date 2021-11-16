import { useStyles } from "../utils";

type Props = {
  balance?: number;
};

function Balance(props: Props) {
  const classes = useStyles();
  return (
    <p className={classes.balance}>
      Balance:
      {props.balance?.toFixed(2)}
    </p>
  );
}

export default Balance;
