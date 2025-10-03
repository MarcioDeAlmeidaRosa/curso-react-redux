import React from "react";

export default (props) => {
  const { value } = props;
  return <div>{value % 2 === 0 ? <span>Par</span> : <span>Impar</span>}</div>;
};
