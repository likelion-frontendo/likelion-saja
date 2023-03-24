import {useEffect} from "react";
import {atom, selector, useRecoilState, useRecoilValue} from "recoil";
import {app} from "@/firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore";

const productsAtom = atom({
  key: "products",
  default: [],
});

const isLoadingAtom = atom({
  key: "isLoading",
  default: true,
});

const errorAtom = atom({
  key: "error",
  default: null,
});

export const makeIsLoadingSelector = (atom) =>
  selector({
    key: `isLoadingSelector_${atom.key}`,
    get: ({get}) => {
      const value = get(atom);
      return value.length === 0;
    },
  });

export const makeErrorSelector = (atom) =>
  selector({
    key: `errorSelector_${atom.key}`,
    get: ({get}) => {
      const value = get(atom);
      if (value.length === 0) {
        return `Error fetching ${atom.key}`;
      } else {
        return null;
      }
    },
  });

export function useProducts() {
  const [productsState, setProductsState] = useRecoilState(productsAtom);
  const isLoading = useRecoilValue(makeIsLoadingSelector(productsAtom));
  const error = useRecoilValue(makeErrorSelector(productsAtom));

  useEffect(() => {
    const db = getFirestore(app);
    const productRef = collection(db, "Products");

    getDocs(productRef).then((querySnapshot) => {
      const products = [];

      querySnapshot.forEach((doc) => {
        const product = {id: doc.id, ...doc.data()};
        products.push(product);
      });
      setProductsState(products);
    });
  }, []);

  return {isLoading, error, productsState};
}
