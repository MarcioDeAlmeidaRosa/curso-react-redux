import React from "react";

import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragment from "./components/basics/Fragment";
import Fragment1 from "./components/basics/Fragment1";
import Random from "./components/basics/Random";
import Cards from "./components/layout/Cards";

export default () => (
  <div id="app">
    <h1>Fundamentos React (Arrow)</h1>
    <Cards Title="#4 - Desafio aleatório">
      <Random minValue={1} maxValue={100} />
    </Cards>

    <Cards Title="#3.1 - Usando Fragment">
      <Fragment />
    </Cards>

    <Cards Title="#3 - Usando Fragment 2">
      <Fragment1 />
    </Cards>

    <Cards Title="#2 - Situação do Aluno">
      <ComParametro
        titulo="Situação do Aluno"
        aluno="Marcio de Almeida Rosa"
        nota={9.3}
      />
    </Cards>

    <Cards Title="#1 - Usando Primeiro">
      <Primeiro />
    </Cards>
  </div>
);
