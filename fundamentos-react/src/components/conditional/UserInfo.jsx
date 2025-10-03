import React from "react";
import IF from "./if";

export default (props) => {
  const { name } = props?.user || {};
  return (
    <div>
      <IF test={name}>Seja bem vindo <strong>{name}</strong>!</IF>
      <IF test={!name}>Seja bem vindo Sr. misteioso!</IF>
    </div>
  );
};
