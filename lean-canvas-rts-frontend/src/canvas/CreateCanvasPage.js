import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import ContentBox from "../template/ContentBox";
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  name: Yup.string()
    .max(200)
    .required(),
  kind_of: Yup.string()
    .required()
    .oneOf(["lean", "project"])
});

export default function CreateCanvasPage({ onSubmitCallback }) {
  return (
    <Formik
      validationSchema={schema}
      validateOnChange
      onSubmit={onSubmitCallback}
      initialValues={{
        name: "",
        kind_of: "lean"
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors
      }) => (
        <ContentBox>
          <h2>New Canvas</h2>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formCanvas" as={Row}>
              <Col sm={12}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isValid={touched.name && !errors.name}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Label>Kind of Canvas</Form.Label>
            <Form.Group>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Lean Canvas"
                  name="kind_of"
                  value="lean"
                  checked
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  label="Project Canvas"
                  name="kind_of"
                  value="project"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Button variant="primary" type="submit">
              Create new Canvas
            </Button>
          </Form>
        </ContentBox>
      )}
    </Formik>
  );
}
