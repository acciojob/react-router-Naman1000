import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router";
import App from "./components/App";



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
 <BrowserRouter>
     <App />
  </BrowserRouter>,
);
