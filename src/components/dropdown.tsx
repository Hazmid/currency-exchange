import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useStyles } from "../utils";
import { SymbolDisplayPartKind } from "typescript";

type Props = {
  from?: string;
  to?: string;
  symbols?: string[];
  setFrom?: (symbol: string) => void;
  setTo?: (symbol: string) => void;
  changeAccount?: (arg: any, mode: string) => void;
};

function Dropdown(props: Props) {
  const classes = useStyles();

  const handleChange = (event: SelectChangeEvent) => {
    if (props.setFrom) {
      props.setFrom(event.target.value);
      props.changeAccount!(event, "from");
    } else if (props.setTo) {
      props.setTo(event.target.value);
      props.changeAccount!(event, "to");
    }
  };

  return (
    <>
      <Select
        id="simple-select"
        className={classes.dropdown}
        value={props.from || props.to}
        defaultValue={
          props.from
            ? props.symbols?.filter((item) => item !== props.to).join("")
            : props.symbols?.filter((item) => item !== props.from).join("")
        }
        //label="Age"
        onChange={handleChange}
        renderValue={() => {
          return props.symbols
            ?.filter((item) => item === props.from || item === props.to)
            .join("");
        }}
      >
        {props.symbols?.map((symbol) => (
          <MenuItem key={symbol} value={symbol}>
            {symbol}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}

export default Dropdown;
