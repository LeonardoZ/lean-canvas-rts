import React from "react";
import "./App.css";
import LeanCanvas from "./canvas/LeanCanvas";
import { loadCanvas, loadTopics } from "./api/api";
import io from "socket.io-client";

function App() {
  const [canvas, setCanvas] = React.useState();
  const [socket, setSocket] = React.useState(undefined);
  const [topics, setTopics] = React.useState([]);

  React.useEffect(() => {
    async function load() {
      const canvas = await loadCanvas(1);
      const dataTopics = await loadTopics(canvas.data[0].id);
      const socket = io("http://localhost:4000", {
        query: { canvasId: canvas.data[0].id }
      });
      setCanvas(canvas.data[0]);
      setTopics([...dataTopics.data]);
      setSocket(socket);
    }
    load();
  }, []);

  
  if (!canvas || canvas.id === 0 || !socket) {
    return <p>No board created</p>;
  }
  return (
    <div>
      <LeanCanvas
        leanCanvas={canvas}
        topics={topics}
        socket={socket}
        className="App d-flex flex-column align-items-center justify-content-center h-100 w-100"
      />
    </div>
  );
}

export default App;
