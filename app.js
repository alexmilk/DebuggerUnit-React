import Layout from "./components/Layout";
import React from "react";
import ReactDOM from "react-dom";
import EmbedSection from "./components/EmbedSection";
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

require('./style.scss');


const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
