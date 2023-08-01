import "./App.css";
import { getDataFromAPI } from "./helpers";
export default function App() {
  return (
    <div className="App">
      <button onClick={async() => console.log(await getDataFromAPI())}>Make API call</button>
    </div>
  );
}
