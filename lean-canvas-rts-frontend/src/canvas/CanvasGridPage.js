import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import ContentBox from "../template/ContentBox";
import { LinkContainer } from "react-router-bootstrap";

export default function CanvasGridPage({ canvases }) {
  console.log("x" + canvases);
  return (
    <ContentBox size="large">
      <CardColumns>
        {canvases &&
          canvases.map((canvas, v) => (
            <Card key={v}>
              {canvas.kind_of === "PROJECT" ? (
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/imgs/proj.jpeg`}
                />
              ) : (
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/imgs/lean.png`} 
                />
              )}
              <Card.Body>
                <Card.Title>{canvas.name}</Card.Title>
                <Card.Text>
                  {canvas.kind_of === "PROJECT"
                    ? "Project Canvas Model"
                    : "Lean Canvas Model"}
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <LinkContainer to="#">
                  <Card.Link>Edit</Card.Link>
                </LinkContainer>
                <LinkContainer
                  to={`/${canvas.kind_of.toLowerCase()}-canvas/${canvas.id}`}
                >
                  <Card.Link>Open Canvas</Card.Link>
                </LinkContainer>
              </Card.Body>
            </Card>
          ))}
      </CardColumns>
    </ContentBox>
  );
}
