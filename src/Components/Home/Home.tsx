// Import React and necessary libraries
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

// Home Component
const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center">
        <Col>
          <h1>Welcome to the Home Page</h1>
          <p className="mt-3">
            This is the main landing page for your application. Feel free to explore!
          </p>
          <Button variant="primary" className="mt-3">
            Get Started
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
