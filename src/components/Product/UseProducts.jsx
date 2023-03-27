import {useEffect} from "react";
import {atom, selector, useRecoilState, useRecoilValue} from "recoil";
import {app} from "@/firebase/app";
import {getFirestore, collection, getDocs, query, limit, where} from "firebase/firestore";

const productsAtom = atom({
  key: "products",
  default: [],
});

const productsExcludeIdAtom = atom({
  key: "productsExcludeId",
  default: [],
});

const isLoadingSelector = selector({
  key: "productsIsLoading",
  get: ({get}) => {
    const stores = get(productsAtom);
    return stores.length === 0;
  },
});

const errorSelector = selector({
  key: "productsError",
  get: ({get}) => {
    const stores = get(productsAtom);
    if (stores.length === 0) {
      return "Error fetching stores";
    } else {
      return null;
    }
  },
});

export function useProducts(excludeId, limitCount = 20) {
  const [productsState, setProductsState] = useRecoilState(!excludeId ? productsAtom : productsExcludeIdAtom);
  const isLoading = useRecoilValue(isLoadingSelector);
  const error = useRecoilValue(errorSelector);

  useEffect(() => {
    const db = getFirestore(app);
    const productsRef = collection(db, "Products");

    let q = query(productsRef, limit(limitCount));

    if (excludeId) {
      q = query(productsRef, where("id", "!=", excludeId), limit(limitCount));
    }

    getDocs(q).then((querySnapshot) => {
      const products = [];

      querySnapshot.forEach((doc) => {
        const product = {id: doc.id, ...doc.data()};
        products.push(product);
      });
      const shuffledProducts = products.sort(() => Math.random() - 0.5);
      setProductsState(shuffledProducts);
    });
  }, [setProductsState, excludeId, limitCount]);

  return {isLoading, error, productsState};
}
