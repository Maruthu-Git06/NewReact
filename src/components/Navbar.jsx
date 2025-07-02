import React from "react";
import { Navbar, Container, Form, FormControl, Nav, Image, Badge } from "react-bootstrap";
import { FiBell } from "react-icons/fi";
import ProfileImage from "../assets/img/profile.jpg"; // Replace with your path

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm px-4 w-100 py-2 sticky-top">
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Search Bar */}
        <Form className="d-flex me-auto" style={{ maxWidth: "300px" }}>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>

        <Nav className="align-items-center">
          {/* Notification Icon */}
          <Nav.Link href="#" className="position-relative me-3">
            <FiBell size={20} />
            <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
              3
            </Badge>
          </Nav.Link>

          {/* Profile */}
          <Nav.Link href="#" className="d-flex align-items-center">
            <Image
              src={ProfileImage}
              roundedCircle
              width={35}
              height={35}
              className="me-2"
            />
            <span className="fw-semibold">Jane Doe</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
