import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './Footercomponent'; // Import komponen footer

function Dashboard() {
  return (
    <>
      <Navbar variant="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#home">React CRUD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/dashboard">Home</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/showuser">Show User</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5 pt-4">
        <h1>Welcome to Dashboard</h1>
      </Container>
      {/* Tambahkan komponen footer */}
      <FooterComponent />
    </>
  );
}

export default Dashboard;
