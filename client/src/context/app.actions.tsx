import { ApiActionType } from "./types";

const connect = (socket: WebSocket) => {
  return { type: ApiActionType.Connect, payload: socket };
};

const apiActions = {
  connect,
};

export default apiActions;
