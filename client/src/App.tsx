import { useEffect } from "react";
import { Link } from "react-router-dom";
import config from "../config";
import { useAppContext } from "./context/AppContext";
import apiActions from "./context/app.actions";

function App() {
  const { state, dispatch } = useAppContext();

  const connect = () => {
    const ws = new WebSocket(config.webSocketUrl);
    dispatch(apiActions.connect(ws));
  };

  useEffect(() => {
    connect();
  }, []);

  return (
    <>
      <p>{state.socket ? state.socket?.url : "Failed"}</p>
      <div className="h-full flex justify-center items-center">
        <input placeholder="Your name" className="p-3 rounded-md" />
        <button className="ml-2 h-12">
          <Link to="/feed">Join</Link>
        </button>
      </div>
    </>
  );
}

export default App;
