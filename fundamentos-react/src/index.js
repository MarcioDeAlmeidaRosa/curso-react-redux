import "./index.css";
import React from "react";
import { render } from "react-dom";

import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";

const tag = <strong>Olá React!!!</strong>;
render(
  <div>
    <Primeiro />
    <ComParametro
      titulo="Meu título vai aqui"
      subtitulo="Aqui vai meu subtitulo"
    />
  </div>,
  document.getElementById("root")
);
