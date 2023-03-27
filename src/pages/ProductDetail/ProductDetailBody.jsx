import styled from "styled-components";
import {Link} from "react-router-dom";
import {UseProductList} from "@/components";
import test from "@/assets/test.jpg";

export function ProductDetailBody(props) {
  return (
    <StyledProductDetail>
      <section className="productImg">
        <Link to="/">
          <img className="mainImg" src={props.imgUrl} alt="상품 이미지"></img>
        </Link>
      </section>
      <section className="userInfo">
        <div className="userInfoContainer">
          <div className="userInfoImgContainer">
            <img src={test} alt="프로필 사진" />
          </div>
          <div className="spanContainer">
            <span className="userId">아이디</span>
            <span className="userLocation">장소</span>
          </div>
        </div>
      </section>
      <hr />
      <section className="productDescription">
        <span className="titleDescription">{props.title} </span>
        <span className="priceDescription">{props.price.toLocaleString(navigator.language)}벨 </span>
        <span className="descriptionDescription">{props.description} </span>
      </section>
      <hr />
      <section className="popularProduct">
        <div className="textContainer">
          <span>당근마켓 인기중고</span>
          <Link to="/PopularProduct">더 구경하기</Link>
        </div>
        <UseProductList count={6} excludeId={props.id} />
      </section>
    </StyledProductDetail>
  );
}

const StyledProductDetail = styled.div`
  & hr {
    width: 678px;
    border: 1px solid #eaebee;
  }
  & .productContainer {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    justify-items: center;
    margin-right: 0;
  }

  & .productImg {
    margin: 64px auto 0 auto;
    width: 678px;
    height: 564px;
  }

  & .userInfoContainer {
    display: flex;
    width: 678px;
    height: 60px;
    margin: 24px auto;
    align-items: center;
  }

  & .userInfoImgContainer {
    width: 40px;
    height: 40px;
    border-radius: 70%;
    overflow: hidden;
    margin-right: 8px;
  }
  & .spanContainer {
    line-height: 20px;
  }
  & .spanContainer span {
    display: block;
  }

  & .userId {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #212529;
  }

  & .userLocation {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #212529;
  }
  & .productDescription {
    width: 678px;
    height: 84px;
    margin: 36px auto;
  }

  & .mainImg {
    width: 678px;
    height: 564px;
    margin-bottom: 25px;
    border-radius: 8px;
  }

  & .titleDescription {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }

  & .priceDescription {
    display: block;
    font-style: normal;
    color: #212529;
    font-weight: 700;
    font-size: 15px;
    line-height: 30px;
  }

  & .descriptionDescription {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 30px;
  }

  & .popularProduct {
    width: 678px;
    height: 830px;
    margin: 0 auto;
  }
  & .textContainer {
    display: flex;
    width: 678px;
    margin: 0 auto;
    justify-content: space-between;
  }

  & .textContainer span,
  a {
    margin: 36px 0 0 0;
  }

  & .textContainer span {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
  }

  & .textContainer a {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    color: #ff8a3d;
  }

  & a:hover {
    font-weight: 600;
  }
`;
