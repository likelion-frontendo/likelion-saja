import {app} from "@/firebase/app";
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore";
import {useState, useEffect} from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
            setProducts(usersWithProductInfo);
            setIsLoading(false);
          });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        setError(error);
      });
  }, []);

  return {isLoading, error, products};
}
