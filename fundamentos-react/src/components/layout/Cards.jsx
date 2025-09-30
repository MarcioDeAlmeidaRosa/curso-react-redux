import "./Cards.css";
import React from "react";

export default (props) => {
  const cardStyle = {
    backgroundColor: props.color || "#f00",
    borderColor: props.color || "#f00",
  };
  const { title } = props;
  return (
    <div
      className="Card"
      style={cardStyle}
      // style={{
      //   backgroundColor: props.color || "#f00",
      //   borderColor: props.color || "#f00",
      // }}
    >
      <div className="Title"><strong>{title}</strong></div>
      <div className="Content">{props.children}</div>
    </div>
  );
};
