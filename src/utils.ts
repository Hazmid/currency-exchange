import { createStyles, makeStyles } from "@mui/styles";
export const useStyles = makeStyles(() =>
  createStyles({
    body: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f7fcff",
      width: "100vw",
      height: "100vh",
      flexDirection: "column",
    },
    card: {
      backgroundColor: "#fff",
      width: 600,
      padding: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      "&.MuiPaper-rounded" : {
        borderRadius: 20,
      }
    },
    title: {
      fontSize: 40,
      fontWeight: "bold",
        color: "#1a9cfc",
    },
    rates: {
      width: "30%",
      fontWeight: "bold",
      color: "#3f51b5",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 50,
    },
    input: {
      width: 200,
      padding: 10,
      borderRadius: 5,
    },
    dropdown: {
      marginRight: 30,
      marginBottom: 15,
      height: 40,
    },
    container: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 50,
      flexWrap: "wrap",
    },
    firstContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    secondContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    errorMessage: {
      marginLeft: "auto",
      fontSize: 12,
      color: "red",
    },
    balance: {
      fontWeight: "bold",
      marginLeft: "auto",
    },
    exchangeButton: {
        width: 310,
      backgroundColor: "#1a9cfc",
      color: "#fff",
      padding: 10,
      borderRadius: 5,
      border: "none",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#3f51b5",
      },
    },
  })
);
