import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Career from "./pages/Contact/Career";

// Components
import Header from "./components/Header/Header";

function App() {
  return (
    <Router basename={"samuelbillot"}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Career />} />
      </Routes>
    </Router>
  )
}

export default App;
