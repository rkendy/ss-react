import { Table } from "react-bootstrap";

export default function TabelaSolicitacoes({
  colunas,
  solicitacoes,
  atributos,
}) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          {colunas.map((col, idx) => (
            <th>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {solicitacoes.map((sol, idx) => (
          <tr>
            <td>{sol[atributos[0]]}</td>
            <td>{sol[atributos[1]]}</td>
            <td>{sol[atributos[2]]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
