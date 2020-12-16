import { Row, Col, Card, Button } from "react-bootstrap";

import axios from "axios";

import MenuMain from "./MenuMain";
import TabelaSolicitacoes from "./TabelaSolicitacoes";

export default function Home() {
  return (
    <div>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header bg="primary">Minhas Solicitações</Card.Header>
            <Card.Body>
              <TabelaSolicitacoes />
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-4">
            <Card.Header>Novas Solicitações</Card.Header>
            <Card.Body>
              <TabelaSolicitacoes />
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
