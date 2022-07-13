import "./App.css";
import Navigation from "./Components/Shared/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import CoverImg from "./Components/Home/CoverImg";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <CoverImg></CoverImg>
    </div>
  );
}

export default App;
