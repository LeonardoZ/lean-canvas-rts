import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionColumn from "./SectionColumn";

const sections = [
  {
    //1
    show: true,
    name: "Justificativas (passado)",
    color: "bg-info"
  },
  {
    show: true,
    name: "Obj Smart",
    color: "bg-danger"
  },
  {
    show: true,
    name: "Benefícios",
    color: "bg-warning"
  },
  {
    show: true,
    name: "Produto",
    color: "bg-success"
  },
  {
    show: true,
    name: "Requisitos",
    color: "bg-warning"
  },
  {
    show: true,
    name: "Stakeholders",
    color: "bg-warning"
  },
  {
    show: true,
    name: "Equipe",
    color: "bg-info"
  },
  {
    show: true,
    name: "Premissas",
    color: "bg-success"
  },
  {
    show: true,
    name: "Grupo de Entregas",
    color: "bg-info"
  },
  {
    show: true,
    name: "Riscos",
    color: "bg-info"
  },
  {
    show: true,
    name: "Linha do Tempo",
    color: "bg-info"
  },
  {
    show: true,
    name: "Restrições",
    color: "bg-info"
  },
  {
    show: true,
    name: "Custos",
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
  if (canvas.kind_of !== "PROJECT") {
    return (
      <Container>
        <h1>Wrong Canvas type</h1>
      </Container>
    );
  }
  return (
    <div className="App d-flex align-items-center justify-content-center">
      <Container className="w-100 h-100">
        <Row>
          <Col>
            <h1>{canvas.name}</h1>
          </Col>
        </Row>
        <Row noGutters>
          <SectionColumn
            canvas={canvas}
            topics={topics}
            sections={[sections[0], sections[1], sections[2]]}
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
          <SectionColumn
            canvas={canvas}
            topics={topics}
            sections={[sections[7], sections[8], sections[11]]}
          />
          <SectionColumn
            canvas={canvas}
            topics={topics}
            extended={true}
            sections={[sections[9], sections[10], sections[12]]}
          />
        </Row>
        <Row noGutters></Row>
      </Container>
    </div>
  );
};
