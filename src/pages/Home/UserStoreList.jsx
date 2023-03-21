import {app} from "@/firebase/app";
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore";
import React, {useState, useEffect} from "react";
import {Store} from "@/pages/Home/Store";

export function UserStoreList() {
  const {isLoading, stores} = useStores();

  if (isLoading) {
    return <div role="alert">로딩 중...</div>;
  }

  return (
    <div className="storeList">
      {stores.map((store, index) => (
        <Store key={index} imgUrl={store.imgUrl} title={store.title} description={store.description} location={store.location} interest={store.interest} />
      ))}
    </div>
  );
}

function useStores() {
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const db = getFirestore(app);
    const storesRef = collection(db, "Stores");

    getDocs(storesRef)
      .then((querySnapshot) => {
        const stores = [];

        querySnapshot.forEach((doc) => {
          const store = {id: doc.id, ...doc.data()};
          stores.push(store);
          console.log(store);
        });
        setStores(stores);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        setError(error);
      });
  }, []);

  return {isLoading, error, stores};
}
