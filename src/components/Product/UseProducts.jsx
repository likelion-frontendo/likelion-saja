import {useEffect} from "react";
import {atom, useRecoilState, useRecoilValue} from "recoil";
import {app} from "@/firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import {makeIsLoadingSelector, makeErrorSelector} from "@/components";

const productsAtom = atom({
  key: "products",
  default: [],
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
