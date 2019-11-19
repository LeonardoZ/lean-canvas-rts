import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionColumn from "./SectionColumn";

const sections = [
  {
    show: true,
    name: "Problem"
  },
  {
    show: true,
    name: "Solution"
  },
  {
    show: true,
    name: "Key Metrics"
  },
  {
    show: true,
    name: "Unique Value Proposition"
  },
  {
    show: true,
    name: "Unfair Advantage"
  },
  {
    show: true,
    name: "Customer Segments"
  },
  {
    show: true,
    name: "Cost Structure"
  },
  {
    show: true,
    name: "Revenue Stream"
  }
];

export default ({ leanCanvas, topics }) => {
  
  if (!leanCanvas) {
    return (
      <Container>
        <h1>No canvas loaded!</h1>
      </Container>
    );
  }
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>{leanCanvas.name}</h1>
          </Col>
        </Row>
        <Row noGutters>
          <SectionColumn
            leanCanvas={leanCanvas}
            topics={topics}
            sections={[sections[0]]}
          />
          <SectionColumn
            leanCanvas={leanCanvas}
            topics={topics}
            sections={[sections[1], sections[2]]}
          />
          <SectionColumn
            leanCanvas={leanCanvas}
            topics={topics}
            sections={[sections[3]]}
          />
          <SectionColumn
            leanCanvas={leanCanvas}
            topics={topics}
            sections={[sections[4], sections[5]]}
          />
        </Row>
        <Row noGutters>
          <SectionColumn
            leanCanvas={leanCanvas}
            topics={topics}
            sections={[sections[6]]}
          />
          <SectionColumn
            leanCanvas={leanCanvas}
            topics={topics}
            sections={[sections[7]]}
          />
        </Row>
      </Container>
    </>
  );
};
