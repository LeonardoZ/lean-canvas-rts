import React from "react";
import { Card, Dropdown, Button, Row, Col } from "react-bootstrap";
import Topic from "./Topic";
import { saveTopic, removeTopic } from "../api/api";

const styles = {
  sectionContent: {}
};

export default ({
  canvasId,
  name,
  color,
  extended,
  loadedTopics,
  show = true
}) => {
  const [topics, setTopics] = React.useState(loadedTopics);
  const [textTopic, setTextTopic] = React.useState(null);

  React.useEffect(() => {
    setTopics(loadedTopics);
  }, [loadedTopics]);

  if (!show) return <React.Fragment />;

  function addTopic() {
    let topic = {
      kind: "new"
    };
    setTextTopic(topic);
  }

  async function saveTextTopic(topic, content) {
    topic.canvasId = canvasId;
    topic.content = content;
    topic.section = name;

    await saveTopic(canvasId, topic);
    setTextTopic(null);
  }

  async function removeTextTopic(topic) {
    await removeTopic(canvasId, topic.id);
  }

  function cancelTextTopic() {
    setTextTopic(null);
  }
  if (!topics) {
    return <></>;
  }
  const cardTopics = topics.map((t, k) => (
    <Topic
      key={k}
      color={color}
      topic={t}
      save={saveTextTopic}
      cancel={cancelTextTopic}
      onRemove={removeTextTopic}
    />
  ));

  return (
    <Card style={styles.sectionContent} className="w-100 flex-fill">
      <Card.Body className="p-2">
        <Card.Title>
          <div className="d-flex justify-content-between">
            {name}
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic" />
              <Dropdown.Menu>
                <Dropdown.Item onClick={addTopic}>New Topic</Dropdown.Item>
                <Dropdown.Item>Hide</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Card.Title>
        <div className="d-flex flex-column justify-content-between">
          <div className="d-flex flex-column ">
            {extended ? (
              <Row>
                {topics.map((t, k) => (
                  <Col xs={6} key={k}>
                    <Topic
                      key={k}
                      color={color}
                      topic={t}
                      save={saveTextTopic}
                      cancel={cancelTextTopic}
                      onRemove={removeTextTopic}
                    />
                  </Col>
                ))}
              </Row>
            ) : (
              cardTopics
            )}

            {textTopic && (
              <Topic
                key={999}
                color={color}
                topic={textTopic}
                save={saveTextTopic}
                cancel={cancelTextTopic}
                onRemove={removeTextTopic}
              />
            )}
          </div>
          <Button variant="secondary" onClick={addTopic}>
            New Topic
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
