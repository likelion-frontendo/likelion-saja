import styled from "styled-components/macro";

export function SectionInfoCount() {
  return (
    <InfoCount>
      <div className="ListTitle">
        <span>내 정보</span>
      </div>
      <ul className="InfoCountListItem">
        <li>
          <p>내 구매 수</p>
          <p className="InfoCountNum">4</p>
        </li>
        <li>
          <p>내 판매 수</p>
          <p className="InfoCountNum">9</p>
        </li>
        <li>
          <p>내 관심 수</p>
          <p className="InfoCountNum">24</p>
        </li>
        <li>
          <p>내 채팅 수</p>
          <p className="InfoCountNum">9</p>
        </li>
      </ul>
    </InfoCount>
  );
}

const InfoCount = styled.div`
  width: 100%;
  margin-top: 60px;

  & .ListTitle {
    border-radius: 12px 12px 0 0;
  }

  & .InfoCountListItem {
    display: flex;
    border-radius: 0 0 12px 12px;
    border: 1px solid #f8e1db;
  }

  & .InfoCountListItem li {
    width: 204px;
    height: 100px;
    border-right: 1px solid #f8e1db;
    color: #4d5159;
    padding: 24px;
  }

  & .InfoCountListItem li:nth-child(4) {
    border: 0;
  }

  & .InfoCountNum {
    color: #6c816d;
    font-weight: 600;
    font-size: 28px;
    margin-top: 8px;
  }
`;
