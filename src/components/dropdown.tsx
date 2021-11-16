import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useStyles } from "../utils";

type Props = {
  onChangeCurrency: (e: any) => void;
  selectedCurrency: string;
  currencyOptions: any[];
};

function Dropdown(props: Props) {
  const classes = useStyles();

  return (
    <>
      <Select
        id="select"
        className={classes.dropdown}
        value={props.selectedCurrency}
        onChange={props.onChangeCurrency}
      >
        {props.currencyOptions?.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}

export default Dropdown;
