import {Header, Footer} from "@/components";
import {useParams} from "react-router-dom";
import {UseProductDetail} from "./UseProductDetail";

export function ProductDetail() {
  const {id} = useParams();
  return (
    <div className="ProductDetail">
      <Header />
      <UseProductDetail id={id} />
      <Footer />
    </div>
  );
}
