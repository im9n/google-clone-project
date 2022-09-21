import "./App.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Searchpage from "./pages/Searchpage.jsx";


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
        <Route path="/search" element={<Searchpage />}/>
        <Route path="/" exact element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
