import "./styles.css";
import Playlist from "./components/TaskList";

export default function App() {
  return (
    <div className="App">
      <h1>Task management app</h1>
      <Playlist />
    </div>
  );
}
