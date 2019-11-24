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

export default ({ leanCanvas, topics, socket }) => {
  const [filteredTopics, setTopics] = React.useState([]);
  React.useEffect(() => {
    setTopics(topics);
    socket.on("insert", topics => {      
      if (!topics) return;
      setTopics(topics);
    });

    socket.on("remove", topics => {
      if (!topics) return;
      setTopics(topics);
    });
  }, [topics, setTopics, socket]);

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
            topics={filteredTopics}
            sections={[sections[0]]}
          />
          <SectionColumn
            leanCanvas={leanCanvas}
            topics={filteredTopics}
            sections={[sections[1], sections[2]]}
          />
          <SectionColumn
            leanCanvas={leanCanvas}
            topics={filteredTopics}
            sections={[sections[3], sections[4]]}
          />
          <SectionColumn
            leanCanvas={leanCanvas}
            topics={filteredTopics}
            sections={[sections[5], sections[6]]}
          />
        </Row>
        <Row noGutters>
          <SectionColumn
            leanCanvas={leanCanvas}
            topics={filteredTopics}
            extended={true}
            sections={[sections[7]]}
          />
          <SectionColumn
            leanCanvas={leanCanvas}
            topics={filteredTopics}
            extended={true}
            sections={[sections[8]]}
          />
        </Row>
      </Container>
    </>
  );
};
