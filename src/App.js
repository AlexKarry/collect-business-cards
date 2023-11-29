// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Form from "./components/Form";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: "100vh",
        margin: "8px",
        width: "auto",
        backgroundColor: "rgb(252 252 252)",
      }}
    >
      <Form />
    </Grid>
  );
}

export default App;
