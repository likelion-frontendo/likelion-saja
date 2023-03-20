import {app} from "@/firebase/app";
import {useEffect} from "react";
import {useRecoilState} from "recoil";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import {Product} from "@/components";
import styled from "styled-components";
import {atom} from "recoil";

export function UseProductList() {
  const productListState = atom({
    key: "productListState",
    default: [],
  });

  const [productList, setProductList] = useRecoilState(productListState);

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
    <StyledProductListContainer className="test">
      {productList.map((product) => (
        <Product key={product.id} imgUrl={product.imgUrl} title={product.title} price={product.price} location={"부산 북구 만덕제2동"} interest={product.interest} className="item" />
      ))}
    </StyledProductListContainer>
  );
}

const StyledProductListContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 86px;

  & .item {
    width: 25%;
  }
`;
