import { Form, Row, Col, Button } from "react-bootstrap";

export default function NovaSolicitacao() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Setor</Form.Label>
        <Form.Control as="select" size="md" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Título</Form.Label>
        <Form.Control type="text" placeholder="Título da Solicitação" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Descrição da Solicitação"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
