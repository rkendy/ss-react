import { Row, Col, Card, Button } from "react-bootstrap";

import axios from "axios";

import MenuMain from "./MenuMain";
import TabelaSolicitacoes from "./TabelaSolicitacoes";
import Solicitacao from "./Solicitacao";

const colunas = ["#", "Solicitante", "Título"];
const solicitacoes = [
  {
    id: 100,
    criador: "Roberto Kendy Sawamura",
    titulo: "Titulo do problema da solicitação: um erro misterioso",
    setor: "Serviços Gerais",
    status: "Aberto",
  },
  {
    id: 120,
    criador: "Roberto Kendy Sawamura",
    titulo: "Titulo do problema da solicitação: um erro misterioso",
    setor: "Almoxarifado",
    status: "Cancelado",
  },
  {
    id: 140,
    criador: "Roberto Kendy Sawamura",
    titulo: "Titulo do problema da solicitação: um erro misterioso",
    setor: "Informática",
    status: "Execução",
  },
  {
    id: 501,
    criador: "Roberto Kendy Sawamura",
    titulo: "Titulo do problema da solicitação: um erro misterioso",
    setor: "Transporte",
    status: "Pendente",
  },
];

export default function Home() {
  return (
    <div>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>Nova Solicitação</Card.Header>
            <Card.Body>
              <Solicitacao />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-4">
            <Card.Header bg="primary">Minhas Solicitações</Card.Header>
            <Card.Body>
              <TabelaSolicitacoes
                colunas={["id", "Setor", "Status"]}
                solicitacoes={solicitacoes}
                atributos={["id", "setor", "status"]}
              />
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header>Novas Solicitações</Card.Header>
            <Card.Body>
              <TabelaSolicitacoes
                colunas={colunas}
                solicitacoes={solicitacoes}
                atributos={["id", "criador", "titulo"]}
              />
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
