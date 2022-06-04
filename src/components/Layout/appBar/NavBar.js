import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

let userRole = null;
let userID = null;

function NavBar() {
  const navigate = useNavigate();

  userRole = localStorage.getItem("role");
  userID = localStorage.getItem("userID");

  handleLogOut = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            Massachusetts Institute of Technology (MIT)
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="me-auto">
              <Nav.Link href="#features">About Us</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
            </Nav> */}
            {userRole === "admin" ? (
              <Nav className="me-auto">
                <Nav.Link href="/admin/students">Students</Nav.Link>
                <Nav.Link href="/admin/staff">Staff</Nav.Link>
                <Nav.Link href="/admin/templates">Document</Nav.Link>
                <Nav.Link href="/addAdmin">AddAdmin</Nav.Link>
              </Nav>
            ) : (
              <Nav className="me-auto">
                <Nav.Link href="#features">About Us</Nav.Link>
                <Nav.Link href="#pricing">Contact Us</Nav.Link>
              </Nav>
            )}
            {userRole ? (
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  {userID}
                </Nav.Link>
                <Nav.Link eventKey={2} onClick={() => handleLogOut()}>
                  LogOut
                </Nav.Link>
              </Nav>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
