import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navibar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Component/GlobalStore";
import "../index.css";
import { useEffect, useState } from "react";

function Navibar() {
  const [isFakeDark, setIsFakeDark] = useState(false);
  const { isLogged, logout } = useAuth();

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className="nav fixed-top z-3">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img src="/images/4.jpg" alt="Logo" />
          </Navbar.Brand>
          <Nav className="p-2">
            <Nav.Link as={NavLink} to="/books">
              Books
            </Nav.Link>
            {isLogged ? null : (
              <Nav.Link as={NavLink} disabled={isLogged} to="/Register">
                Register
              </Nav.Link>
            )}
            {isLogged ? (
              <Nav.Link onClick={logout} className="login">
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={NavLink} to="/login" className="login">
                Login
              </Nav.Link>
            )}
            <button
              onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
              className="btn-fake-dark-mode"
            >
              {isFakeDark ? "☀️" : "🌙"}
            </button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navibar;
