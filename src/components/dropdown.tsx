import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useStyles } from "../utils";


function Dropdown() {
    const classes = useStyles();
    return (
        <>
          <Select
          id="simple-select"
          className={classes.dropdown}
          value={"$"}
          //defaultValue="$"
          //label="Age"
          //onChange={handleChange}
          renderValue={() => "$"}
        >
          <MenuItem value={'USD'}>$</MenuItem>
          <MenuItem value={'GBP'}>£</MenuItem>
          <MenuItem value={'EUR'}>€</MenuItem>
        </Select>  
        </>
    )
}

export default Dropdown;
