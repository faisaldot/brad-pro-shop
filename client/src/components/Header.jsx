import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="md">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>ProShop 🛍</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <LinkContainer to="/cart">
                  <Nav.Link>🛒Cart</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link href="/login">👤Sign In</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
