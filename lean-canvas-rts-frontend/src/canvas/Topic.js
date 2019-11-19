import React from "react";
import { ListGroup, Dropdown, Form } from "react-bootstrap";

const styles = {
  root: {
    maxWidth: "240px"
  }
};

export default ({
  topic,
  onRemove,
  save,
  cancel,
  type = "primary"
}) => {
  // edit or new fns
  const [input, setInput] = React.useState();

  React.useEffect(() => {
    if (input) {
      input.focus();
      if (topic.content) {
        input.value = topic.content;
      }
    }
  }, [input, topic]);

 
  let newTopic = (
    <Form.Control
      onKeyPress={saveTopic}
      onBlur={cancel}
      ref={setInput}
    />
  );

  let viewTopic = (
    <div className="d-flex justify-content-between ">
      {topic.content}
      <Dropdown>
        <Dropdown.Toggle variant="default" id="dropdown-basic" />
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => onRemove(topic)}>Remove</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );

  function saveTopic(e) {
    if (e.key === "Enter") {
      save(topic, input.value);
    }
  }

  return (
    <ListGroup.Item
      variant="primary"
      className="w-auto p-1 mb-2"
      style={styles.root}>
      {topic.kind === "new" ? newTopic : viewTopic}
    </ListGroup.Item>
  );
};
