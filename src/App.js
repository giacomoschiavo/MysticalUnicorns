import "./App.css";
import HomePage from "./HomePage";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="container flex-column">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
