import React from "react";
import Greeting from "./Greeting";
import Button from "./Button";

function Form() {
  return (
    <div id="contact" className="contact">
      <Greeting />
      <div id="container" className="container">
        <form name="Form1" method="POST" action="/~ak6914/try/web_collect.py">
          <label className="fnameLabel" htmlFor="fname">
            First Name
          </label>
          <input
            type="text"
            className="fname"
            name="fname"
            placeholder="Your name.."
          />

          <label className="lnameLabel" htmlFor="lname">
            Last Name
          </label>
          <input
            type="text"
            className="lname"
            name="lname"
            placeholder="Your last name.."
          />

          <label className="emailLabel" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            className="email"
            name="email"
            placeholder="Your email.."
          />
          
          <Button type="submit" value="Submit" />
          <Button type="reset" value="Clear" />
        </form>
        <p id="msg" className="msg"></p>
        <div className="db">
          <a href="/~ak6914/try/web_display.py" aria-label="link to db">
            <Button type="submit" value="DATABASE" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Form;
