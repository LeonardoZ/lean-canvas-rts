import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { loadCanvas } from "../api/api";
import LeanCanvasPage from "./LeanCanvasPage";

export default () => {
  const [data, setData] = useState();
  const [socket, setSocket] = useState();
  const { canvasId } = useParams();

  useEffect(() => {
    async function loadInitData() {
      let loaded = await loadCanvas(canvasId);
      setData(loaded.data);
      if (loaded.data && !socket) {
        const socket = io("http://localhost:4000", {
          query: { canvasId: canvasId }
        });
        setSocket(socket);
      }
    }

    loadInitData();
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("insert", topics => {
      if (!topics) return;
      setData({
        canvas: data.canvas,
        topics: topics
      });
    });

    socket.on("remove", topics => {
      if (!topics) return;
      setData({
        canvas: data.canvas,
        topics: topics
      });
    });
  }, [socket]);

  if (data === undefined) return <p>No canvas loaded yet...</p>;

  return <LeanCanvasPage canvas={data.canvas} topics={data.topics} />;
};
