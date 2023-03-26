import {useEffect} from "react";
import {atom, selector, useRecoilState, useRecoilValue} from "recoil";
import {app} from "@/firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore";

const productsAtom = atom({
  key: "products",
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

export function useProducts() {
  const [productsState, setProductsState] = useRecoilState(productsAtom);
  const isLoading = useRecoilValue(isLoadingSelector);
  const error = useRecoilValue(errorSelector);

  useEffect(() => {
    const db = getFirestore(app);
    const productsRef = collection(db, "Products");

    getDocs(productsRef).then((querySnapshot) => {
      const products = [];

      querySnapshot.forEach((doc) => {
        const product = {id: doc.id, ...doc.data()};
        products.push(product);
      });
      setProductsState(products);
    });
  }, [setProductsState]);

  return {isLoading, error, productsState};
}
