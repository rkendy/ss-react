import { Button, Form, Card, Row, Col, ListGroup } from "react-bootstrap";

const solicitacao = {
  id: 23231,
  titulo: "Problema com servidor de banco de dados",
  descricao: "O servidor de endereco x.y.z.k que hospeda o bd etc ...",
  setor: "Informatica",
  status: "Execução",
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
            <ListGroup.Item>
              <div class="d-flex justify-content-between">
                <p>
                  Um texto qualquer de um chamado de acompanhamento dfaj
                  faskfjslafjslak flas jflsaj flas jfklas jflas jflas jflsa
                  jflsaj lf jslsf jaslk jflasj fl sadkfj
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
                  faskfjslafjslak flas jflsaj flas jfklas jflas jflas jflsa
                  jflsaj lf jslsf jaslk jflasj fl sadkfj
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
                <p>
                  Um texto qualquer de um chamado de acompanhamento dfaj
                  faskfjslafjslak flas jflsaj flas jfklas jflas jflas jflsa
                  jflsaj lf jslsf jaslk jflasj fl sadkfj
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
                <p>
                  Um texto qualquer de um chamado de acompanhamento dfaj
                  faskfjslafjslak flas jflsaj flas jfklas jflas jflas jflsa
                  jflsaj lf jslsf jaslk jflasj fl sadkfj
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
                <p>
                  Um texto qualquer de um chamado de acompanhamento dfaj
                  faskfjslafjslak flas jflsaj flas jfklas jflas jflas jflsa
                  jflsaj lf jslsf jaslk jflasj fl sadkfj
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
                <p>
                  Um texto qualquer de um chamado de acompanhamento dfaj
                  faskfjslafjslak flas jflsaj flas jfklas jflas jflas jflsa
                  jflsaj lf jslsf jaslk jflasj fl sadkfj
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
                <p>
                  Um texto qualquer de um chamado de acompanhamento dfaj
                  faskfjslafjslak flas jflsaj flas jfklas jflas jflas jflsa
                  jflsaj lf jslsf jaslk jflasj fl sadkfj
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
                <p>
                  Um texto qualquer de um chamado de acompanhamento dfaj
                  faskfjslafjslak flas jflsaj flas jfklas jflas jflas jflsa
                  jflsaj lf jslsf jaslk jflasj fl sadkfj
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
      </Col>
    </Row>
  );
}
