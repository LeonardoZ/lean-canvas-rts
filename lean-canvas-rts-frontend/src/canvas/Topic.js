import React from "react";
import { Form, ListGroupItem } from "react-bootstrap";

const styles = {
  root: {
    maxWidth: "260px"
  },
  text: {
    wardWrap: "break-word",
    "white-space": "pre-wrap"
  }
};

export default ({ topic, onRemove, color, save, cancel, type = "primary" }) => {
  // edit or new fns
  const [input, setInput] = React.useState();

  React.useEffect(() => {
    if (input) {
      input.focus();
      if (topic.content) {
        input.value = topic.content;
      }
    }
  });

  let newTopic = (
    <Form.Control onKeyPress={saveTopic} onBlur={cancel} ref={setInput} />
  );

  let viewTopic = (
    <div className="d-flex justify-content-between">
      <div className={styles.text}>{topic.content}</div>

      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={() => onRemove(topic)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );

  function saveTopic(e) {
    if (e.key === "Enter") {
      save(topic, input.value);
    }
  }

  // return (
  //   <Card variant="primary" c>
  //     <Card.Body>
  //       <Card.Text className={styles.cardText}>
  //         {topic.kind === "new" ? newTopic : viewTopic}
  //       </Card.Text>
  //     </Card.Body>
  //   </Card>
  // );

  return (
    <ListGroupItem className={"p-3 mb-2 " + color} style={styles.root}>
      {topic.kind === "new" ? newTopic : viewTopic}
    </ListGroupItem>
  );
};
