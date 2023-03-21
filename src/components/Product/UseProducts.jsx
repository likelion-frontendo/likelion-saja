import {app} from "@/firebase/app";
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore";
import {useEffect} from "react";
import {atom, useRecoilState} from "recoil";

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

export function useProducts() {
  const [productsState, setProductsState] = useRecoilState(productsAtom);
  const [isLoadingState, setIsLoadingState] = useRecoilState(isLoadingAtom);
  const [errorState, setErrorState] = useRecoilState(errorAtom);

  useEffect(() => {
    const db = getFirestore(app);
    const productsRef = collection(db, "Products");

    getDocs(productsRef)
      .then((querySnapshot) => {
        const queryPromises = [];
        const products = [];

        querySnapshot.forEach((doc) => {
          const product = {id: doc.id, ...doc.data()};
          const userId = product.userId;
          products.push(product);

          const queryPromise = new Promise(async (resolve, reject) => {
            const usersSnapshot = await getDocs(query(collection(db, "Users"), where("id", "==", userId)));
            resolve(usersSnapshot.docs);
          });

          queryPromises.push(queryPromise);
        });

        Promise.all(queryPromises)
          .then((userDocs) => {
            const users = [];
            userDocs.forEach(([doc]) => {
              users.push({id: doc.id, ...doc.data()});
            });
            return users;
          })
          .then((users) => {
            return users.map((user) => {
              return {...products.find((product) => product.userId === user.id), location: user.location};
            });
          })
          .then((usersWithProductInfo) => {
            setProductsState(usersWithProductInfo);
            setIsLoadingState(false);
          });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        setErrorState(error);
      });
  }, []);

  return {isLoadingState, errorState, productsState};
}
