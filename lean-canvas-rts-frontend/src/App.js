import React from "react";
import "./App.css";
import LeanCanvas from "./canvas/LeanCanvas";
import { loadCanvas, loadTopics } from "./api/api";

function App() {
  const [canvas, setCanvas] = React.useState();
  const [topics, setTopics] = React.useState([]);

  React.useEffect(() => {
    async function load() {
      const canvas = await loadCanvas(1);
      const topics = await loadTopics(canvas.data[0].id);
      setCanvas(canvas.data[0]);
      setTopics(topics.data)
    }
    load();
  }, []);

  return (
    <div>
      <LeanCanvas
        leanCanvas={canvas}
        topics={topics}
        className="App d-flex flex-column align-items-center justify-content-center h-100 w-100"
      />
    </div>
  );
}

export default App;
