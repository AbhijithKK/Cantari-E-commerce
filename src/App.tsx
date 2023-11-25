import Home from "./Components/Home/Home";
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
function App() {
  return (
    <div className="App">
      <Router>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
