import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {GlobalStyle} from "./GlobalStyle";
import {BrowserRouter} from "react-router-dom";
import {RecoilRoot} from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
