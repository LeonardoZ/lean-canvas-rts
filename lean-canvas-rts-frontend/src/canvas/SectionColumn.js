import React from "react";
import { Col } from "react-bootstrap";
import Section from "./Section";

export default ({ leanCanvas, topics, sections }) => {
  let filteredSections = sections.filter(s => s.show);
  let multipleSections = filteredSections.length > 1;

  let classes = multipleSections
    ? "d-flex flex-column align-items-stretch "
    : "d-flex align-content-stretch";
  return (
    <Col className={classes}>
      {filteredSections &&
        filteredSections.map((s, i) => (
          <Section
            canvasId={leanCanvas.id}
            loadedTopics={
              topics && topics.filter(t => t.section === s.name)
            }
            key={i}
            name={s.name}
          />
        ))}
    </Col>
  );
};
