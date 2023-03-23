import React from "react";
import {Store, useStores} from "@/pages/Home/index";

export function UserStoreList({selectedType}) {
  const {isLoading, stores} = useStores();

  if (isLoading) {
    return <div role="alert">로딩 중...</div>;
  }

  const filteredStores = selectedType === "전체" ? stores : stores.filter((store) => store.classification === selectedType);
  const slicedStores = filteredStores.slice(0, 10);

  return (
    <div className="storeList">
      {slicedStores.map((store, index) => (
        <Store
          key={index}
          imgUrl={store.imgUrl}
          title={store.title}
          description={store.description}
          location={store.location}
          interest={store.interest}
          review={store.review}
          regular={store.regular}
        />
      ))}
    </div>
  );
}
