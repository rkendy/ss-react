import { Button, Form, Card, Row, Col, ListGroup } from "react-bootstrap";

import AcompanhamentoItem from "./AcompanhamentoItem";

const solicitacao = {
  id: 23231,
  titulo: "Problema com servidor de banco de dados",
  descricao: "O servidor de endereco x.y.z.k que hospeda o bd etc ...",
  setor: "Informatica",
  status: "Execução",
  acompanhamento: [
    {
      descricao: "Acompanhamento x",
      hora: "12:01",
      data: "22/01/2001",
      usuario: "Roberto K",
    },
    {
      descricao: "Acompanhamento x",
      hora: "12:01",
      data: "22/01/2001",
      usuario: "Roberto K",
    },
    {
      descricao: "Acompanhamento x",
      hora: "12:01",
      data: "22/01/2001",
      usuario: "Roberto K",
    },
    {
      descricao: "Acompanhamento x",
      hora: "12:01",
      data: "22/01/2001",
      usuario: "Roberto K",
    },
  ],
};

export default function Acompanhamento() {
  return (
    <Row>
      <Col md={6}>
        <Card className="mb-4">
          <Card.Header>Solicitação {solicitacao.id}</Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Readonly input here..."
                readOnly
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Acompanhamento</Form.Label>
              <Form.Control as="textarea" rows={3}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" size="md" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className="mb-4">
          <Card.Header>Acompanhamentos</Card.Header>
          <ListGroup variant="flush">
            {solicitacao.acompanhamento.map((acompanhamento) => (
              <AcompanhamentoItem acompanhamento={acompanhamento} />
            ))}
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}
