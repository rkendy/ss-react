import { Form, Card, Row, Col, Button } from "react-bootstrap";
import Acompanhamento from "./Acompanhamento";
import NovaSolicitacao from "./NovaSolicitacao";

export default function Solicitacao({ solicitacao }) {
  return (
    <div>
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

      <Acompanhamento />
    </div>
  );
}
