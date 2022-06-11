import React, {useState} from "react";
import "./Header.css"
import { Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const BottomNav = () => {

  const history = useHistory();
  const [activeKey, setActiveKey] = useState("home");

  const handleItemClick = (eventKey) => {
    eventKey === "home" ? history.push(`/`) : history.push(`/${eventKey}`);
    setActiveKey(eventKey);
  };

  return (
    <Container >
    <Navbar expand="md">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" activeKey={activeKey} onSelect={handleItemClick}>
        <Nav.Link className="nav-bottom-links" eventKey="home">
          Home
        </Nav.Link>
        <Nav.Link className="nav-bottom-links" eventKey="about">
          About
        </Nav.Link>
        <Nav.Link className="nav-bottom-links" eventKey="location">
          Location
        </Nav.Link>
        <Nav.Link className="nav-bottom-links" eventKey="contact">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </Container>
  );
};

export default BottomNav;
