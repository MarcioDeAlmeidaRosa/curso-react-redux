import React from "react";
import IF, { Else } from "./if";

export default (props) => {
  const { name } = props?.user || {};
  return (
    <div>
      <IF test={name}>
        Seja bem vindo <strong>{name}</strong>!
        <Else>Seja bem vindo Sr. misterioso!</Else>
      </IF>
    </div>
  );
};
