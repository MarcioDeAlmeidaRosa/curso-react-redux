import "./App.css";
import React from "react";

import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragment from "./components/basics/Fragment";
import Fragment1 from "./components/basics/Fragment1";
import Random from "./components/basics/Random";
import Cards from "./components/layout/Cards";
import Family from "./components/basics/Family";
import Membrer from "./components/basics/Membrer";
import StudentList from "./components/repetition/studentList";
import ProductsTable from "./components/repetition/productsTable";
import EvenOrOdd from "./components/conditional/evenOrOdd";
import UserInfo from "./components/conditional/UserInfo";

export default () => (
  <div className="App">
    <h1>Fundamentos React (Arrow)</h1>

    <div className="Cards">
      <Cards title="#9 - Condicional" color="#B0918D">
        <UserInfo user={{ name: "Marcio" }} />
        <UserInfo user={{}} />
        <UserInfo />
      </Cards>

      <Cards title="#8 - Par ou impar" color="#F54927">
        <EvenOrOdd value={1} />
        <EvenOrOdd value={2} />
        <EvenOrOdd value={3} />
        <EvenOrOdd value={100} />
      </Cards>

      <Cards title="#7 - Desafio Repetição" color="#F54927">
        <ProductsTable />
      </Cards>

      <Cards title="#6 - Repetição" color="#51e2f5">
        <StudentList />
      </Cards>

      <Cards title="#5 - Membros da Família" color="#ffa8B6">
        <Family surname="Rosa">
          <Membrer name="Marcio" />
          <Membrer name="Elaine" />
          <Membrer name="Helena" />
        </Family>
      </Cards>

      <Cards title="#4 - Desafio aleatório" color="#a0d2eb">
        <Random minValue={1} maxValue={100} />
      </Cards>

      <Cards title="#3.1 - Usando Fragment" color="#e5eaf5">
        <Fragment />
      </Cards>

      <Cards title="#3 - Usando Fragment 2" color="#d0bdf4">
        <Fragment1 />
      </Cards>

      <Cards title="#2 - Situação do Aluno" color="#8458B3">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Marcio de Almeida Rosa"
          nota={9.3}
        />
      </Cards>

      <Cards title="#1 - Usando Primeiro" color="#a28089">
        <Primeiro />
      </Cards>
    </div>
  </div>
);
