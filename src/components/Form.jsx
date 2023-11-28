import React from "react";
import Greeting from "./Greeting";
import FormInputs from "./FormInputs";
import ButtonForm from "./ButtonForm";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";

function Form() {
  return (
    <Grid item xs={12} sm={8} md={4}>
      <Greeting />
      <form
        name="Form1"
        method="POST"
        action="/~ak6914/try/web_collect.py"
        style={{ padding: "20px", backgroundColor: "#e5e7e9" }}
      >
        <FormInputs />
        <p>message</p>
        <Grid>
          <ButtonForm />
        </Grid>
      </form>
      <Grid container spacing={2} style={{ padding: "20px" }}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <a href="/~ak6914/try/web_display.py" aria-label="link to db">
                <Button size="large" variant="contained" fullWidth>
                  DataBase
                </Button>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Form;
