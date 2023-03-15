import MainBanner from "@/pages/Home/MainBanner";
import MainProduct from "@/pages/Home/MainProduct";
import LineBanner from "@/pages/Home/LineBanner";
import MainStore from "@/pages/Home/MainStore";
import Store from "./pages/Home/Store";

function App() {
  return (
    <div className="App">
      <MainBanner />
      <MainProduct />
      <LineBanner />
      <MainStore />
      <Store />
    </div>
  );
}

export default App;
