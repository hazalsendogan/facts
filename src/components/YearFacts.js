import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import YearFact from "./YearFact";

export default function YearFacts() {
  const [year, setYear] = useState(2022);
  const [yearFacts, setYearFacts] = useState(0);
  const handleChange = (e) => {
    setYear(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setYearFacts(e.target[0].value);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="year">Year</Label>
          <Input name="year" value={year} onChange={handleChange} />
        </FormGroup>
        <Button type="submit" className="btn btn-primary">
          Get Facts
        </Button>
      </Form>
      <Row>
        <Col>
          <Card className="mt-5">
            <CardBody>
              <YearFact yearFacts={yearFacts} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
