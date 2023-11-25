import Home from "./Components/Home/Home";
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import About from "./Components/AboutPage/About";
function App() {
  return (
    <div className="App">
      <Router>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/details" element={<DetailsPage/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
