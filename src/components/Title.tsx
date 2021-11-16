import { useStyles } from "../utils";

type Props = {
  title: string;
};

function Title(props: Props) {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.title}>{props.title}</h1>
    </>
  );
}

export default Title;
