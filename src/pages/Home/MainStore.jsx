import React, {useState} from "react";
import styled from "styled-components";
import {Heading2} from "@/components";
import {UserStoreList, UserStoresType} from "@/pages/Home";

export function MainStore() {
  const [selectedType, setSelectedType] = useState("전체");

  const handleSelectType = (classification) => {
    setSelectedType(classification);
  };

  return (
    <StyledStore>
      <div className="inner">
        <Heading2>다양한 동네 가게를 볼 수 있어요</Heading2>
        <UserStoresType onSelectType={handleSelectType} />
        <UserStoreList selectedType={selectedType} />
      </div>
    </StyledStore>
  );
}

const StyledStore = styled.div`
  margin-bottom: 80px;

  & .inner {
    margin: 65px auto 85px;
    width: 1056px;
  }

  & h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: #212124;
  }

  & .storeList {
    width: 768px;
    margin: 10px auto 0;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
    justify-items: center;
  }
`;
