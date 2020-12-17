import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import { Power } from "react-bootstrap-icons";

export default function MenuMain() {
  return (
    <div>
      <Navbar bg="dark" expand="md" className="navbar-dark bg-dark mb-3">
        <Navbar.Brand href="/">SS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="solicitacao">Abrir</Nav.Link>
            <Nav.Link href="#home">Consultar</Nav.Link>
            <Nav.Link href="#link">Administrativo</Nav.Link>
            <NavDropdown title="Administrativo" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Número da Solicitação"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Consulta</Button>
          </Form>
        </Navbar.Collapse>
        <a href="/login">
          <OverlayTrigger
            key="bottom"
            placement="bottom"
            overlay={<Tooltip>Sair do Sistema</Tooltip>}
          >
            <Power size={34} color="white" className="ml-3" />
          </OverlayTrigger>
        </a>
      </Navbar>
    </div>
  );
}
