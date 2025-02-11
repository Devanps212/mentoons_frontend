import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adda from "./pages/adda";
import Header from "./components/header/header";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adda" element={<Adda />} />
      </Routes>
    </Router>
  );
}

export default App;
