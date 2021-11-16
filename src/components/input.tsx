import NumberFormat from "react-number-format";
import { useStyles } from "../utils";
import Typography from "@mui/material/Typography";

type Props = {
  fromInput?: number;
  toInput?: number;
  setFromInput?: (value: number) => void;
  setToInput?: (value: number) => void;
};

function Input(props: Props) {
  const classes = useStyles();

  return (
    <>
      <p color="error" className={classes.errorMessage}>
        Exceeded balance
      </p>
      <NumberFormat
        thousandSeparator
        className={classes.input}
        value={props.fromInput || props.toInput}
        // onChange={(e) => {
        //     props.setToInput!(Number(e.target.value));
        // }}
      />
    </>
  );
}

export default Input;
