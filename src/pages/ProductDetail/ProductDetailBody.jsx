import styled from "styled-components";
import {Link} from "react-router-dom";
import {UseProductList} from "@/components";

export function ProductDetailBody(props) {
  return (
    <StyledProductDetail>
      <section className="productImg">
        <Link to="/">
          <img className="mainImg" src={props.imgUrl} alt="상품 이미지"></img>
        </Link>
      </section>
      <section className="userInfo"></section>
      <hr />
      <section className="productDescription">
        <span className="titleDescription">{props.title} </span>
        <span className="priceDescription">{props.price}벨 </span>
        <span className="descriptionDescription">{props.description} </span>
        <span className="interestDescription">관심 {props.interest} </span>
      </section>
      <hr />
      <section className="popularProduct">
        <div className="textContainer">
          <span>당근마켓 인기중고</span>
          <Link to="/">더 구경하기</Link>
        </div>
        <UseProductList count={6} />
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
  & .productDescription {
    width: 678px;
    height: 148px;
    margin: 36px auto 0 auto;
    line-height: 30px;
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
    margin-top: 3px;
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

  & .interestDescription {
    display: block;
    font-style: normal;
    margin-top: 3px;
    font-size: 12px;
    line-height: 3 px;
    color: #868e96;
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
