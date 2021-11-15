import { useStyles } from "../utils";

function Title() {
    const classes = useStyles();

    return (
        <>
         <h1 className={classes.title}>CURRENCY EXCHANGE</h1>  
        </>
    )
}

export default Title
