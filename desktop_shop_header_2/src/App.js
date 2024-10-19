import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App;
