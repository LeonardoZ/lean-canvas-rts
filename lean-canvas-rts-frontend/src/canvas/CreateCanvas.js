import React, { useEffect } from "react";
import CreateCanvasPage from "./CreateCanvasPage";
import { saveCanvas } from "../api/api";
import { useHistory } from "react-router-dom";

export default function CreateCanvas() {
  const history = useHistory();
  
  const onSubmitCallback = formData => {
    async function save() {
      const result = await saveCanvas(formData);
      if (result.status === 201) {
        const kindof = result.data.kind_of;
        const id = result.data.id;
        history.push(`/${kindof}-canvas/${id}`);
      } else if (result.status > 400) {
        // error
      }
    }
    save();
  };

  return <CreateCanvasPage onSubmitCallback={onSubmitCallback} />;
}
