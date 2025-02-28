import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRouter from "./routes/userRoute/userRoute";
import AdminRoute from "./routes/adminRoute/adminRouter";
import AddaRoute from "./routes/adda/addaRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserRouter />} />
        <Route path="/admin/*" element={<AdminRoute />} />
        <Route path="/adda/*" element={<AddaRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
