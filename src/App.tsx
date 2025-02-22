import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Adda from "./pages/adda";
// import PrimaryHeader from "./components/primaryHeader/primaryHeader";
// import Home from "./pages/home";
// import SecondaryHeader from "./components/secondaryHeader/secondaryHeader";
import "./app.css";
import { lazy, Suspense } from "react";
import Loader from "./components/loader/loader";

const PrimaryHeader = lazy(
  () => import("./components/primaryHeader/primaryHeader")
);
const SecondaryHeader = lazy(
  () => import("./components/secondaryHeader/secondaryHeader")
);
const Home = lazy(() => import("./pages/home"));
const Adda = lazy(() => import("./pages/adda"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <PrimaryHeader />
        <SecondaryHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adda" element={<Adda />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
