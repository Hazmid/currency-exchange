import NumberFormat from "react-number-format";
import { useStyles } from "../utils";

type Props = {
  amount: number;
  onChangeAmount: (e: any) => void;
  exceeded?: boolean;
};

function Input(props: Props) {
  const classes = useStyles();

  return (
    <>
      <p
        color="error"
        className={classes.errorMessage}
        style={{ visibility: props.exceeded ? "visible" : "hidden" }}
      >
        Exceeded balance
      </p>
      <NumberFormat
        allowNegative={false}
        decimalScale={2}
        className={classes.input}
        value={props.amount}
        onChange={props.onChangeAmount}
      />
    </>
  );
}

export default Input;
