import { Routes, Route } from 'react-router-dom';
import {Home, Login, Register} from '@/pages';
import { Mypage } from './pages/Mypage/Mypage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </div>
  )
}

export default App;
