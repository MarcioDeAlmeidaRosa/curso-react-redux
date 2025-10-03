import React from "react";

export default function ComParametro(props) {
  const { titulo, aluno, nota } = props;
  const situacao = nota >= 9 ? "Aprovado" : "de Recuperação";
  return (
    <div>
      <h2>{titulo}</h2>
      <h3>
        <strong>{aluno}</strong> tem nota <strong>{nota}</strong>. O aluno esta{" "}
        {situacao}!
      </h3>
    </div>
  );
}
