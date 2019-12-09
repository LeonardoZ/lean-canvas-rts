import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Navbar from "./Navbar";

export default function Admin({ children }) {
  return (
    <>
     <Navbar />
      <Container>
        <Row>
          <Col
            sm={12}
            className="d-flex justify-content-md-center align-content-center w-100 h-100 mt-5"
          >
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
}
