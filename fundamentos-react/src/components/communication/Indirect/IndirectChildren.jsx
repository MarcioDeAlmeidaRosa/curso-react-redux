import React from "react";

export default (props) => {
  const { clickHere } = props;
  return (
    <div>
      <div>Filho</div>
      <button onClick={_ => { clickHere("Marcio", 41, true) }} >
        Fornecer informações
      </button>
    </div>
  );
};
