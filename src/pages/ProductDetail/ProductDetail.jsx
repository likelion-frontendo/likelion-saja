import {Header, Footer, UpButton} from "@/components";
import {useParams} from "react-router-dom";
import {UseProductDetail} from "./UseProductDetail";
import {Helmet} from "react-helmet-async";

export function ProductDetail() {
  const {id} = useParams();
  return (
    <div className="ProductDetail">
      <Helmet>
        <title>사자-메인페이지</title>
        <meta name="description" content="사자마켓-중고 거래 장터 whit.프론트엔도" />
        <meta name="keywords" content="중고거래, 당근마켓, 멋쟁이사자처럼, 멋쟁이사자처럼프론트엔드" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="사자마켓" />
        <meta property="og:locale" content="ko-KR" />
        <meta property="og:title" content="사자마켓 메인페이지" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="og:description" content="사자마켓-중고 거래 장터 whit.프론트엔도" />
      </Helmet>
      <Header />
      <UseProductDetail id={id} />
      <UpButton />
      <Footer />
    </div>
  );
}
