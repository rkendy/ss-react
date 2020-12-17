import { Card, Row, Col, ListGroup } from "react-bootstrap";

export default function Acompanhamento() {
  return (
    <Card className="mb-4">
      <Card.Header>Acompanhamentos</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <div class="d-flex justify-content-between">
            <p>
              Um texto qualquer de um chamado de acompanhamento dfaj
              faskfjslafjslak flas jflsaj flas jfklas jflas jflas jflsa jflsaj
              lf jslsf jaslk jflasj fl sadkfj
            </p>
            <small className="text-muted">
              Qui, 14:43
              <br />
              25/05/2002
            </small>
          </div>
          <footer className="align-text-top">
            <small className="text-muted">Nome do Usuário</small>
          </footer>
        </ListGroup.Item>
        <ListGroup.Item>
          <div class="d-flex justify-content-between">
            <p>Um texto qualquer de um chamado de acompanhamento dfaj</p>
            <small className="text-muted">
              Qui, 14:43
              <br />
              25/05/2002
            </small>
          </div>
          <footer className="align-text-top">
            <small className="text-muted">Nome do Usuário</small>
          </footer>
        </ListGroup.Item>
        <ListGroup.Item>
          <div class="d-flex justify-content-between">
            <p>
              Um texto qualquer de um chamado de acompanhamento dfaj
              faskfjslafjslak flas jflsaj flas jfklas jflas jflas jflsa jflsaj
              lf jslsf jaslk jflasj fl sadkfj
            </p>
            <small className="text-muted">
              Qui, 14:43
              <br />
              25/05/2002
            </small>
          </div>
          <footer className="align-text-top">
            <small className="text-muted">Nome do Usuário</small>
          </footer>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
