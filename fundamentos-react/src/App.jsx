import React from "react";

import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragment from "./components/basics/Fragment";
import Fragment1 from "./components/basics/Fragment1";
import Random from './components/basics/Random';

export default () => (
  <div id="app">
    <h1>Fundamentos React (Arrow)</h1>
    <Random minValue={1} maxValue={100}/>
    <Fragment />
    <Fragment1 />
    <ComParametro
      titulo="Situação do Aluno"
      aluno="Marcio de Almeida Rosa"
      nota={9.3}
    />
    <Primeiro />
  </div>
);
