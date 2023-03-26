import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {GlobalStyle} from "./GlobalStyle";
import {BrowserRouter} from "react-router-dom";
import {RecoilRoot} from "recoil";
import {HelmetProvider} from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HelmetProvider>
      <BrowserRouter>
        <RecoilRoot>
          <GlobalStyle />
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </HelmetProvider>
  </>
);

reportWebVitals();
