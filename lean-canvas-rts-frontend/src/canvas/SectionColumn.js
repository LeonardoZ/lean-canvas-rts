import React from "react";
import { Col } from "react-bootstrap";
import SectionContainer from "./SectionContainer";

export default ({ canvas, extended, topics, sections, xs }) => {
  let filteredSections = sections;//sections.filter(s => s.show);
  let multipleSections = filteredSections.length > 1;

  let classes = multipleSections
    ? "d-flex flex-column align-items-stretch "
    : "d-flex align-content-stretch";
  return (
    <Col className={classes} xs={xs}>
      {filteredSections &&
        filteredSections.map((s, i) => (
          <SectionContainer
            canvasId={canvas.id}
            loadedTopics={topics && topics.filter(t => t.section === s.name)}
            extended={extended}
            key={i}
            color={s.color}
            name={s.name}
          />
        ))}
    </Col>
  );
};
