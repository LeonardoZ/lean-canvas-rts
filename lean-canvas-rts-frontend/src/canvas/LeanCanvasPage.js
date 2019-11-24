import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionColumn from "./SectionColumn";

const sections = [
  {
    show: true,
    name: "Problem",
    color: "bg-info"
  },
  {
    show: true,
    name: "Solution",
    color: "bg-danger"
  },
  {
    show: true,
    name: "Key Metrics",
    color: "bg-warning"
  },
  {
    show: true,
    name: "Unique Value Proposition",
    color: "bg-success"
  },
  {
    show: true,
    name: "Outcome",
    color: "bg-warning"
  },
  {
    show: true,
    name: "Unfair Advantage",
    color: "bg-warning"
  },
  {
    show: true,
    name: "Customer Segments",
    color: "bg-info"
  },
  {
    show: true,
    name: "Cost Structure",
    color: "bg-success"
  },
  {
    show: true,
    name: "Revenue Stream",
    color: "bg-info"
  }
];

export default ({ canvas, topics }) => {
  if (!canvas) {
    return (
      <Container>
        <h1>No canvas loaded!</h1>
      </Container>
    );
  }
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center h-100 w-100">
      <Container>
        <Row>
          <Col>
            <h1>{canvas.name}</h1>
          </Col>
        </Row>
        <Row noGutters>
          <SectionColumn
            canvas={canvas}
            topics={topics}
            sections={[sections[0]]}
          />
          <SectionColumn
            canvas={canvas}
            topics={topics}
            sections={[sections[1], sections[2]]}
          />
          <SectionColumn
            canvas={canvas}
            topics={topics}
            sections={[sections[3], sections[4]]}
          />
          <SectionColumn
            canvas={canvas}
            topics={topics}
            sections={[sections[5], sections[6]]}
          />
        </Row>
        <Row noGutters>
          <SectionColumn
            canvas={canvas}
            topics={topics}
            extended={true}
            sections={[sections[7]]}
          />
          <SectionColumn
            canvas={canvas}
            topics={topics}
            extended={true}
            sections={[sections[8]]}
          />
        </Row>
      </Container>
    </div>
  );
};
