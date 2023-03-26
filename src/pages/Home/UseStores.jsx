import {useEffect} from "react";
import {atom, selector, useRecoilState, useRecoilValue} from "recoil";
import {app} from "@/firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore";

const storesAtom = atom({
  key: "stores",
  default: [],
});

const isLoadingSelector = selector({
  key: "storesIsLoading",
  get: ({get}) => {
    const stores = get(storesAtom);
    return stores.length === 0;
  },
});

const errorSelector = selector({
  key: "storesError",
  get: ({get}) => {
    const stores = get(storesAtom);
    if (stores.length === 0) {
      return "Error fetching stores";
    } else {
      return null;
    }
  },
});

export function useStores() {
  const [stores, setStores] = useRecoilState(storesAtom);
  const isLoading = useRecoilValue(isLoadingSelector);
  const error = useRecoilValue(errorSelector);

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
