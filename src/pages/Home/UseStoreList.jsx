import React from "react";
import {Store, useStores} from "@/pages/Home/index";

export function UserStoreList() {
  const {isLoading, stores} = useStores();

  if (isLoading) {
    return <div role="alert">로딩 중...</div>;
  }

  const slicedStores = stores.slice(0, 10);

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
