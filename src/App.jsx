import {Routes, Route} from "react-router-dom";
import {Home, Login, ProductDetail, Register, Mypage, Post} from "@/pages";
import { RequireAuth } from '@/components';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={
          <RequireAuth>
            <Mypage />
          </RequireAuth>
        } />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/post" element={
          <RequireAuth>
            <Post />
          </RequireAuth>
        } />
      </Routes>
    </div>
  );
}

export default App;
