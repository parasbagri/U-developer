import Home from "./routes/home/home.component.jsx";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/shop.component.jsx";
import NaveBar from "./routes/navigation/navigation.component.jsx";
import SignIn from "./routes/sing-in/sign-in.component.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NaveBar />}>
        {/* Home ko default route banane ke liye index prop use kar rahe hain */}
        <Route index element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="SignIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
