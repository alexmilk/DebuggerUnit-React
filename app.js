import Layout from "./components/Layout";
import Checkbox from "./components/Checkbox";
import React from "react";
import ReactDOM from "react-dom";
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

require('./style.scss');

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
