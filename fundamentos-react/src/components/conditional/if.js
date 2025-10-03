import React, { cloneElement } from "react";
/*
Componente responsável por impimir conteúdo passado caso a expressão informada seja verdadeira

*/
export default (props) => {
  if (props.test) {
    return props.children;
  } else {
    return false;
  }
};
