import React from "react";
import { saveTopic, removeTopic } from "../api/api";
import Section from "./Section";

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
  
  return (
    <Section
      canvasId={canvasId}
      name={name}
      topics={topics}
      textTopic={textTopic}
      color={color}
      extended={extended}
      addTopic={addTopic}
      loadedTopics={loadedTopics}
      saveTextTopic={saveTextTopic}
      cancelTextTopic={cancelTextTopic}
      removeTextTopic={removeTextTopic}
    />
  );
};
