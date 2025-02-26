import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/loader/loader";
import Comic from "./components/home/comic/comic";

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
          <Route path="/comic" element={<Comic />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
