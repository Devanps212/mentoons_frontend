import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adda from "./pages/adda";
import PrimaryHeader from "./components/primaryHeader/primaryHeader";
import Home from "./pages/home";
import SecondaryHeader from "./components/secondaryHeader/secondaryHeader";
import "./app.css";

function App() {
  return (
    <Router>
      <PrimaryHeader />
      <SecondaryHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adda" element={<Adda />} />
      </Routes>
    </Router>
  );
}

export default App;
