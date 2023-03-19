import {app} from "@/firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore";
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
        querySnapshot.forEach((doc) => {
          const product = {id: doc.id, ...doc.data()};
          productList.push(product);
          console.log(productList);
          console.log(product.imgUrl);
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
        <Product key={product.id} imgUrl={product.imgUrl} title={product.title} price={product.price} location={"부산 북구 만덕제2동"} interest={product.interest} />
      ))}
    </div>
  );
}
