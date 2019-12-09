import React from "react";
import { Card } from "react-bootstrap";

export default function ContentBox({ children, size = "small" }) {
  let width;
  switch (size) {
    case "small":
      width = "w-50";
      break;
    case "med":
      width = "w-75";
      break;
    case "large":
      width = "w-100";
      break;
    default:
      break;
  }
  return (
    <Card className={width}>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}
