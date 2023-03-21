import {Routes, Route} from "react-router-dom";
import {Home, Login, Register} from "@/pages";
import {Mypage} from "./pages/Mypage/Mypage";
import {Post} from "./pages/Post/Post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
