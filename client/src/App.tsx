import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="">
        <input placeholder="Your name" className="p-3 rounded-md" />
        <button className="ml-2 h-12">
          <Link to="/feed">Join</Link>
        </button>
      </div>
    </>
  );
}

export default App;
