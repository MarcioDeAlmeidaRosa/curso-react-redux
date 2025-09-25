import "./index.css";
import React from "react";
import { render } from "react-dom";

import Primeiro from "./components/basics/Primeiro";

const tag = <strong>Olá React!!!</strong>;
render(
  <div>
    <Primeiro />
  </div>,
  document.getElementById("root")
);
