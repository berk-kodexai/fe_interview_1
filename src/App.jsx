import "./App.css";
import ChildComponent from "./Components/ChildComponent";

export default function App() {
  return (
    <div className="App">
      Current random number:
      <ChildComponent />
    </div>
  );
}
