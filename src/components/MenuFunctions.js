import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

// ToDo: https://getbootstrap.com/docs/4.0/examples/dashboard/#
export default function MenuFunctions() {
  return (
    <Nav
      defaultActiveKey="/home"
      className="flex-column mr-auto navbar-light bg-light"
      style={{ width: "200px", height: "100vh" }}
    >
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}
