import React from "react";

export default (props) => {
  const { name, age, nerd } = props;
  return (
    <div>
      <span>
        {" "}
        <strong>Name:</strong> {name}
      </span>
      <span>
        {" "}
        <strong>Age:</strong> {age}{" "}
      </span>
      <span>
        {" "}
        <strong>Nerd:</strong> {nerd ? "Verdadeiro" : "Falso"}
      </span>
    </div>
  );
};
