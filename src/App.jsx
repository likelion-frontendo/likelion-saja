import {Routes, Route} from "react-router-dom";

import {Home, Login, ProductDetail, Register, Mypage, Post} from "@/pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} component={ProductDetail} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
