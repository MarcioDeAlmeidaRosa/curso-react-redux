import React from "react";
import IndirectChildren from "./IndirectChildren";

export default (props) => {
  let _name = "";
  let _age = 0;
  let _nerd = false;
  function receiveInformation(name, age, nerd) {
    console.log(name, age, nerd);
    _name = name;
    _age = age;
    _nerd = nerd;
  }
  return (
    <div>
      <span>Nome: {_name} </span>
      <span>Idade: {_age} </span>
      <span>Nerd: {_nerd ? "Sim" : "Não"}</span>
      <IndirectChildren clickHere={receiveInformation} />
    </div>
  );
};
