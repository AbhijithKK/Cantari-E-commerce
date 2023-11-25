import Home from "./Components/Home/Home";
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import About from "./Components/AboutPage/About";
import Contact from "./Components/ContactUs/Contact";
function App() {
  return (
    <div className="App">
      <Router>

      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/details/:id" element={<DetailsPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
