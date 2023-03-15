import {MainBanner, MainProduct, LineBanner, MainStore} from "@/pages/Home/index";
import {Footer} from "@/components/Footer/Footer";
import {Header} from "@/components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <MainProduct />
      <LineBanner />
      <MainStore />
      <Footer />
    </div>
  );
}

export default App;
