import {app} from "@/firebase/app";
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore";
import React, {useState, useEffect} from "react";
import {Product} from "@/components";

export function UseProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore(app);
    const productsRef = collection(db, "Products");

    getDocs(productsRef)
      .then((querySnapshot) => {
        const productList = [];
        querySnapshot.forEach(async (doc) => {
          const product = {id: doc.id, ...doc.data()};
          const userId = product.userId;

          const userQuerySnapshot = await getDocs(query(collection(db, "Users"), where("id", "==", userId)));
          userQuerySnapshot.forEach((userDoc) => {
            const userData = userDoc.data();
            const productWithUser = {...product, location: userData.location};
            productList.push(productWithUser);
          });
          console.log(productList);
        });
        setProducts(productList);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <div className="productContainer">
      {products.map((product) => (
        <Product key={product.id} imgUrl={product.imgUrl} title={product.title} price={product.price} location={product.location} interest={product.interest} />
      ))}
    </div>
  );
}
