import Home from "./routes/home/home.component.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}

export default App;
