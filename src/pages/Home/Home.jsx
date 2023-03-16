import {MainBanner, MainProduct, LineBanner, MainStore} from "@/pages/Home";
import {Header, Footer} from "@/components";

export function Home() {
  return (
    <div className="Home">
      <Header />
      <MainBanner />
      <MainProduct />
      <LineBanner />
      <MainStore />
      <Footer />
    </div>
  );
}
