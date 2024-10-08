import Home from "./routes/home/home.component.jsx";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/shop.component.jsx";
import { Outlet } from "react-router-dom";

const NaveBar = () => {
  return (
    <>
      <h2>Hii i'm Navigation bar</h2>
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<NaveBar />}>
        <Route path="Home" element={<Home />} />
        <Route path="Shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
