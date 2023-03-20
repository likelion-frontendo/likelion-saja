import {app} from "@/firebase/app";
import {useEffect} from "react";
import {useRecoilValue, selector, useSetRecoilState} from "recoil";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import {Product} from "@/components";
import styled from "styled-components";
import {atom} from "recoil";

export function UseProductList() {
  const productListState = atom({
    key: "productListState",
    default: [],
  });

  const setProductList = useSetRecoilState(productListState);

  const productListSlice = selector({
    key: "productListSlice",
    get: ({get}) => {
      const productList = get(productListState);
      return productList.slice(0, 8);
    },
  });

  useEffect(() => {
    const db = getFirestore(app);
    const productsRef = collection(db, "Products");

    getDocs(productsRef)
      .then((querySnapshot) => {
        const productList = [];
        querySnapshot.forEach((doc) => {
          const product = {id: doc.id, ...doc.data()};
          productList.push(product);
        });
        setProductList(productList);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [setProductList]);

  return (
    <StyledProductListContainer className="productContainer">
      {useRecoilValue(productListSlice).map((product) => (
        <Product key={product.id} imgUrl={product.imgUrl} title={product.title} price={product.price} location={"부산 북구 만덕제2동"} interest={product.interest} className="item" />
      ))}
    </StyledProductListContainer>
  );
}

const StyledProductListContainer = styled.div`
  & .productContainer {
    margin-top: 85px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 55px;
    justify-items: center;
  }
`;
