import ExchangeCard from "./components/card";
import { useStyles } from "./utils";
import Title from "./components/Title";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Title title={"CURRENCY EXCHANGE"} />
      <ExchangeCard />
    </div>
  );
}

export default App;
