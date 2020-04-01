import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_SERVER_HOST}:${process.env.REACT_APP_BACKEND_SERVER_PORT}`
});

console.log(process.env);

export function saveCanvas(canvas) {
  return api.post(`/canvas`, canvas);
}

export function loadCanvases() {
  return api.get(`/canvas`);
}

export function loadCanvas(id) {
  return api.get(`/canvas/${id}/all`);
}

export function loadTopics(canvasId) {
  return api.get(`/canvas/${canvasId}/topics`);
}

export function saveTopic(canvasId, topic) {
  return api.post(`/canvas/${canvasId}/topics`, topic);
}

export function updateTopic(canvasId, topic) {
  return api.put(`/canvas/${canvasId}/topics`, topic);
}

export function removeTopic(canvasId, topicId) {
  return api.delete(`/canvas/${canvasId}/topics/${topicId}`);
}
