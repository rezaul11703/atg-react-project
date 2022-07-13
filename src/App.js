import "./App.css";
import Navigation from "./Components/Shared/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import CoverImg from "./Components/Home/CoverImg";
import MainpartNav from "./Components/Home/MainpartNav";
import Article from "./Components/Article/Article";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <CoverImg></CoverImg>
      <MainpartNav></MainpartNav>
      <Article></Article>
    </div>
  );
}

export default App;
