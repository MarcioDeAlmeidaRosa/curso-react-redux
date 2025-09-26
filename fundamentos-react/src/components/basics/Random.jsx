import React from "react";

export default (props) => {
  function randomFloat(min, max) {
    if (min > max) [min, max] = [max, min];
    return Math.random() * (max - min) + min; // [min, max)
  }
  const { minValue, maxValue } = props;
  return (
    <div>
      Seu número da sorte nesta rodada foi:{" "}
      <strong>{randomFloat(minValue, maxValue).toFixed(2)}</strong>
    </div>
  );
};
