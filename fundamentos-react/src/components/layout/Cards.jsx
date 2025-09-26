import "./Cards.css";
import React from "react";

export default (props) => {
  const { Title } = props;
  return (
    <div className="Card">
      <div className="Title">{Title}</div>
      <div className="Content">
        {props.children}
      </div>
    </div>
  );
};
