import React from "react";
import Greeting from "./Greeting";
import FormInputs from "./FormInputs";
import { SubmitButton, ResetButton, DatabaseButton } from "./ButtonStyles";

function Form() {
  return (
    <div id="contact" className="contact">
      <Greeting />
      <div id="container" className="container">
        <form name="Form1" method="POST" action="/~ak6914/try/web_collect.py">
          <FormInputs />
          <SubmitButton type="submit">Submit</SubmitButton>
          <ResetButton type="reset">Clear</ResetButton>
        </form>
        <p id="msg" className="msg"></p>
        <div className="db">
          <a href="/~ak6914/try/web_display.py" aria-label="link to db">
            <DatabaseButton type="submit">Database</DatabaseButton>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Form;
