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
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "darkblue";
  }

  return (
    <h2 className="greeting" style={customStyle}>
      {greeting}
    </h2>
  );
}

export default Greeting