import React from "react";

export default (props) => {
  const { clickHere } = props;
  const minAge = 30;
  const maxAge = 60;
  const randomAge = () => parseInt(Math.random() * (maxAge - minAge) + minAge);
  const randomNerd = () => Math.random() >= 0.6;
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(_) => {
          clickHere("Marcio", randomAge(), randomNerd());
        }}
      >
        Fornecer informações
      </button>
    </div>
  );
};
