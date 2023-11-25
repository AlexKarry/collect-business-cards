import React from "react";
import Greeting from "./Greeting";
import FormInputs from "./FormInputs";
import { BootstrapButton, ButtonContainer } from "./Styles";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function Form() {
  return (
    <div id="contact" className="contact">
      <Greeting />
      <div id="container" className="container">
        <form name="Form1" method="POST" action="/~ak6914/try/web_collect.py">
          <FormInputs />
          <ButtonContainer>
            <Button variant="contained">Contained</Button>
            <Button variant="contained" href="#contained-buttons">
              Link
            </Button>
          </ButtonContainer>
        </form>
        <p id="msg" className="msg"></p>
        <div className="db">
          <a href="/~ak6914/try/web_display.py" aria-label="link to db">
            <BootstrapButton
              variant="contained"
              type="submit"
              endIcon={<SendIcon />}
            >
              Database
            </BootstrapButton>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Form;
