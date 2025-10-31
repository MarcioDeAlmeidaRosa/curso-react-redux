import React, { useState } from "react";
import IndirectChildren from "./IndirectChildren";

export default (props) => {
  const [name, setName] = useState("?");
  const [age, setAge] = useState(0);
  const [nerd, setNerd] = useState(false);

  // console.log(setName);

  function receiveInformation(name, age, nerd) {
    // console.log(name, age, nerd);
    setName(name);
    setAge(age);
    setNerd(nerd);
  }
  return (
    <div>
      <span>Name: {name} </span>
      <span>Years: {age} </span>
      <span>Nerd: {nerd ? "Yes" : "No"}</span>
      <IndirectChildren clickHere={receiveInformation} />
    </div>
  );
};
