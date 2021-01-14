import { useEffect } from "react";
import io from "socket.io-client";

let socket;

const CONNECTION_PORT = "localhost:8000/";

function App() {
  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, []);

  useEffect(() => {
    socket.on("connection", () => {
      console.log("connected");
    });
  }, []);

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
