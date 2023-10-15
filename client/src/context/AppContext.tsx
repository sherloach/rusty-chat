/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { createContext, useContext, useReducer } from "react";
import { SocketConnectionTypes } from "./types";

interface IAppContext {
  children: string | JSX.Element | JSX.Element[];
}

interface ISocketState {
  connectionStatus: SocketConnectionTypes;
  socket: WebSocket | null;
}

interface IApp {
  state: ISocketState;
  dispatch: any;
}

const initialState = {
  state: {
    connectionStatus: SocketConnectionTypes.PRE_CONNECTED,
    socket: null,
  },
  dispatch: () => {},
};

const AppContext = createContext<IApp>(initialState);

const appReducer = (state: IApp, { type, payload }: any): IApp => {
  switch (type) {
    case "CONNECTED": {
      return {
        ...state,
        state: {
          connectionStatus: SocketConnectionTypes.CONNECTED,
          socket: payload,
        },
      };
    }
    case "DISCONNECTED": {
      return {
        ...state,
        state: {
          connectionStatus: SocketConnectionTypes.STOPPED,
          socket: null,
        },
      };
    }
    default:
      return state;
  }
};

const AppProvider: React.FC<IAppContext> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, useAppContext };
