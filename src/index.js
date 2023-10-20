import React from "react";
import { createRoot } from "react-dom";
import Home from "./containers/Home";
import GlobalStyles from "./globalStyles";
import NewUsers from "./containers/Users";

const root = document.getElementById("root");
const rootElement = createRoot(root);
rootElement.render(
  <>
    <NewUsers /> <GlobalStyles />
  </>
);


