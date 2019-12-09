import React, { useState, useEffect } from "react";
import CanvasGridPage from "./CanvasGridPage";
import { loadCanvases } from "../api/api";

export default function CanvasGrid() {
  const [canvases, setCanvases] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await loadCanvases();
      setCanvases(response.data);
    }
    load();
  }, []);
  console.log(canvases)
  return (<CanvasGridPage canvases={canvases} />);
}
