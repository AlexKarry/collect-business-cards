import React from "react"

function Greeting() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  const customStyle = {
    color: "",
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "lightgray";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "gray";
  } else {
    greeting = "Good Night";
    customStyle.color = "darkgray";
  }

  return (
    <h2 className="greeting" style={customStyle}>
      {greeting}
    </h2>
  );
}

export default Greeting