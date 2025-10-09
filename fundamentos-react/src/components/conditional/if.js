import React, { cloneElement } from "react";
/*
Componente responsável por impimir conteúdo passado caso a expressão informada seja verdadeira

*/
export default (props) => {
  //   console.log(props.children);
  const elseChild = props.children.filter((child) => {
    return child.type && child.type.name === "Else";
  })[0];

  //   console.log(elseChild);

  const ifChildren = props.children.filter((child) => {
    return child != elseChild;
  });

  //   console.log(ifChildren);

  if (props.test) {
    return ifChildren;
  } else if (elseChild) {
    return elseChild;
  } else {
    return false;
  }
};

export const Else = (props) => {
  return props.children;
};
