import Layout from "./components/Layout";
import React from "react";
import ReactDOM from "react-dom";

require('./style.scss');

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);