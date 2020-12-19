import { Button, Form, Card, Row, Col, ListGroup } from "react-bootstrap";

export default function AcompanhamentoItem({ acompanhamento }) {
  return (
    <ListGroup.Item>
      <div class="d-flex justify-content-between">
        <p>{acompanhamento.descricao}</p>
        <small className="text-muted ml-2">
          {acompanhamento.hora}
          <br />
          {acompanhamento.data}
        </small>
      </div>
      <footer className="align-text-top">
        <small className="text-muted">{acompanhamento.usuario}</small>
      </footer>
    </ListGroup.Item>
  );
}
