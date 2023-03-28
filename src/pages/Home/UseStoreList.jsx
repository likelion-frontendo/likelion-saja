import React, {useEffect} from "react";
import {Store, useStores} from "@/pages/Home";
import raccoon from "@/assets/Logo/raccoon.gif";
import styled from "styled-components";
import {atom, useRecoilState} from "recoil";

const showLoadingAtom = atom({
  key: "showLoadingStoreRaccoon",
  default: true,
});

export function UserStoreList({selectedType}) {
  const {isLoading, stores} = useStores();
  const [showLoading, setShowLoading] = useRecoilState(showLoadingAtom);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setShowLoading]);

  if (isLoading || showLoading) {
    return (
      <StyledLoadingImgContainer role="alert">
        <img src={raccoon} alt="로딩 중..."></img>
      </StyledLoadingImgContainer>
    );
  }

  const filteredStores = selectedType === "전체" ? stores : stores.filter((store) => store.classification === selectedType);
  const slicedStores = filteredStores.slice(0, 10);

  return (
    <div className="storeList">
      {slicedStores.map((store, index) => (
        <Store key={index} store={store} />
      ))}
    </div>
  );
}

const StyledLoadingImgContainer = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;

  & img {
    border-radius: 10%;
  }
`;
