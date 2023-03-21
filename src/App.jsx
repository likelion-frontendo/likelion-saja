import {Routes, Route} from "react-router-dom";
import {Home, Login, ProductDetail, Register} from "@/pages";
import {Mypage} from "./pages/Mypage/Mypage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
