import React, { useState, useEffect } from "react";
import { Col, Container, Form, FormGroup, Label, Row } from "reactstrap";

export default function DateFacts() {
  return (
    <Container>
      <Form>
        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="year">Year</Label>
            </FormGroup>
          </Col>
          <Col md="6">
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
