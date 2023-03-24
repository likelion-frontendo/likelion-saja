import {useEffect} from "react";
import {atom, useRecoilState, useRecoilValue} from "recoil";
import {makeIsLoadingSelector, makeErrorSelector} from "@/components";
import {app} from "@/firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore";

const storesAtom = atom({
  key: "stores",
  default: [],
});

export function useStores() {
  const [stores, setStores] = useRecoilState(storesAtom);
  const isLoading = useRecoilValue(makeIsLoadingSelector(storesAtom));
  const error = useRecoilValue(makeErrorSelector(storesAtom));

  useEffect(() => {
    const db = getFirestore(app);
    const storesRef = collection(db, "Stores");

    getDocs(storesRef).then((querySnapshot) => {
      const stores = [];

      querySnapshot.forEach((doc) => {
        const store = {id: doc.id, ...doc.data()};
        stores.push(store);
      });
      setStores(stores);
    });
  }, []);

  return {isLoading, error, stores};
}
