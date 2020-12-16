import { Form, Row, Col, Button } from "react-bootstrap";

export default function Solicitacao() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Setor</Form.Label>
        <Form.Control as="select" size="md"></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Título</Form.Label>
        <Form.Control type="text" placeholder="Título da Solicitação" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Descrição</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
