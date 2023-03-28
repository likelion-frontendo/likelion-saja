import {Link} from "react-router-dom";
import styled from "styled-components";
import {Image} from "@/components";
import facebook from "@/assets/Home/facebook.png";
import instargram from "@/assets/Home/instargram.png";
import youtube from "@/assets/Home/youtube.png";
import naverblog from "@/assets/Home/naverblog.png";

export function Footer() {
  return (
    <StyledFooter>
      <hr />
      <div className="sectionContainer">
        <section className="container">
          <section>
            <div>
              <span tabIndex={0}>
                <b>대표</b> 김용현, 황도연
              </span>
              <span> | </span>
              <span tabIndex={0}>
                <b>사업자 번호</b> 375-87-00088
              </span>
            </div>
            <div>
              <span tabIndex={0}>
                <b>직업정보제공사업 신고번호</b> 2016-서울서초-0051
              </span>
            </div>
            <address>
              <div>
                <span tabIndex={0}>
                  <b>주소</b> 서울특별시 구로구 디지털로 30길 28, 609호(당근서비스)
                </span>
              </div>
              <span tabIndex={0}>
                <b>전화</b> 1544-9796
              </span>
              <span> | </span>
              <span tabIndex={0}>
                <b>고객문의</b> cs@daangnservice.com
              </span>
            </address>
          </section>
          <section className="aContainer">
            <Link to={"#"}>제휴 문의</Link>
            <Link to={"#"}>광고 문의</Link>
            <Link to={"#"}>PR 문의</Link>
            <Link to={"#"}>IR 문의</Link>
          </section>
          <section className="aContainer">
            <Link to={"#"}>이용약관</Link>
            <Link to={"#"} className="unique">
              개인정보처리방침
            </Link>
            <Link to={"#"}>위치기반서비스 이용약관</Link>
            <Link to={"#"}>이용자보호 비전과 계획</Link>
          </section>
        </section>
        <section className="container">
          <Link to={"#"}>
            <Image src={facebook} alt="페이스북" />
          </Link>
          <Link to={"#"}>
            <Image src={instargram} alt="인스타그램" />
          </Link>
          <Link to={"#"}>
            <Image src={youtube} alt="유튜브" />
          </Link>
          <Link to={"#"}>
            <Image src={naverblog} alt="네이버 블로그" />
          </Link>
        </section>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: white;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 100px;

  & hr {
    border: 1px solid #eaebee;
  }

  & .sectionContainer {
    position: relative;
    justify-content: space-between;
    width: 768px;
    margin: 6px auto;
    display: flex;
    padding-top: 60px;
  }

  & span {
    color: #868b94;
    font-size: 13.008px;
  }

  & b {
    font-weight: 700;
    font-size: 13.008px;
  }

  & a {
    margin: 0 14px;
    text-decoration: none;
    margin-left: 0;
    color: #868b94;
    font-weight: 700;
    font-size: 13.008px;
  }

  & .unique {
    color: rgb(77, 81, 89);
  }

  & .container {
    float: left;
  }

  & .aContainer {
    margin-top: 20px;
  }
`;
