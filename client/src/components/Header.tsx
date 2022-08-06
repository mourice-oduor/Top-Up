import { SyntheticEvent } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useAppDispatch } from "../redux/hooks/hooks";
import { logout } from "../redux/actions/userActions";

interface Props {
  firstName: string;
  setFirstName: (firstName: string) => void;
}

// function Header({ firstName, setFirstName }: Props) {
function Header() {

  const dispatch = useAppDispatch();

  const logoutHandler = async (e: SyntheticEvent) => {
    e.preventDefault();

    dispatch(logout());
    // setFirstName("");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect sticky="top">
      <Container>
        <Navbar.Brand href="/">Top-Up Mama</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>

          <Nav>
            {{} ? (
              <Nav className="ms-auto">
                <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Header;
