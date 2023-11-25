import Home from "./Components/Home/Home";
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
function App() {
  return (
    <div className="App">
      <Router>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/details" element={<DetailsPage/>}/>
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
