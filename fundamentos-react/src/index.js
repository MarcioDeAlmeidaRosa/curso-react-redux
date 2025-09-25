import "./index.css";
import React from "react";
import { render } from "react-dom";

import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragment from "./components/basics/Fragment";
import Fragment1 from "./components/basics/Fragment1";

const tag = <strong>Olá React!!!</strong>;
render(
  <div>
    <Primeiro />
    <ComParametro
      titulo="Meu título vai aqui"
      subtitulo="Aqui vai meu subtitulo"
    />
    <Fragment />
    <Fragment1 />
  </div>,
  document.getElementById("root")
);
