import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {GlobalStyle} from "./GlobalStyle";
import {HashRouter} from "react-router-dom";
import {RecoilRoot} from "recoil";
import {HelmetProvider} from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HelmetProvider>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <RecoilRoot>
          <GlobalStyle />
          <App />
        </RecoilRoot>
      </HashRouter>
    </HelmetProvider>
  </>
);

reportWebVitals();
