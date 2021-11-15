import NumberFormat from "react-number-format";
import { useStyles } from "../utils";
import Typography from "@mui/material/Typography";

function Input() {
  const classes = useStyles();

  return (
    <>
      <p color="error" className={classes.errorMessage}>Exceeded balance</p>
      <NumberFormat className={classes.input} />
    </>
  );
}

export default Input;
