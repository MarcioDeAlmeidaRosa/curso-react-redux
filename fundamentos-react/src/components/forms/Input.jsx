import "./Input.css";
import React, { useState } from "react";

export default (props) => {
  const [value, SetValue] = useState("");

  function executeWhenChanged(e) {
    // console.log(e.target.value);
    SetValue(e.target.value);
  }

  return (
    <div className="Input">
      <div>
        <span>Name:</span>
        <input
          value={value}
          placeholder="enter your name"
          onChange={executeWhenChanged}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input value={value} readOnly />

        <input value={undefined} />
      </div>
    </div>
  );
};
